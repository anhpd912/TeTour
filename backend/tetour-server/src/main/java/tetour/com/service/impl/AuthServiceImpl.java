package tetour.com.service.impl;

import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import jakarta.mail.MessagingException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tetour.com.enums.ErrorCode;
import tetour.com.exception.AppException;
import tetour.com.mapper.UserMapper;
import tetour.com.models.dto.request.auth.AuthenticationRequest;
import tetour.com.models.dto.request.auth.IntrospectRequest;
import tetour.com.models.dto.request.auth.LogoutRequest;
import tetour.com.models.dto.response.auth.AuthenticationResponse;
import tetour.com.models.dto.response.auth.IntrospectResponse;
import tetour.com.models.dto.response.auth.RefreshTokenResponse;
import tetour.com.models.entity.RefreshToken;
import tetour.com.models.entity.User;
import tetour.com.repository.RefreshTokenRepository;
import tetour.com.repository.UserRepository;
import tetour.com.service.AuthService;

import java.security.MessageDigest;
import java.text.ParseException;
import java.util.Base64;
import java.util.Date;
import java.util.StringJoiner;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthServiceImpl implements AuthService {
    @NonFinal
    @Value("${jwt.secret}")
    String SECRET_KEY;
    @NonFinal
    @Value("${jwt.expiration}")
    Long EXPIRATION_TIME;
    @NonFinal
    @Value("${jwt.refresh-expiration}")
    Long REFRESH_EXPIRATION_TIME;
    @NonFinal
    @Value("${jwt.refresh-expiration-remember-me}")
    Long REFRESH_EXPIRATION_TIME_REMEMBER_ME;
    RefreshTokenRepository refreshTokenRepository;
    PasswordEncoder passwordEncoder;
    UserRepository userRepository;
    UserMapper userMapper;

    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new AppException(ErrorCode.INVALID_CREDENTIALS);
        } else {
            //If user found
            if (user.getIsActive()) {
                return AuthenticationResponse.builder()
                        .accessToken(generateToken(user))
                        .authenticated(true)
                        .userResponse(userMapper.toUserResponse(user))
                        .refreshToken(generateRefreshToken(request.getRememberMe(), user))
                        .refreshTokenDuration(request.getRememberMe() ? REFRESH_EXPIRATION_TIME_REMEMBER_ME : REFRESH_EXPIRATION_TIME)
                        .build();
            } else {
                throw new AppException(ErrorCode.USER_BANNED);
            }
        }
    }

    @Override
    public IntrospectResponse introspect(IntrospectRequest request) {
        return null;
    }

    @Override
    public void logout(LogoutRequest token) {

    }

    @Transactional
    @Override
    public RefreshTokenResponse refreshToken(String token) throws ParseException {
        log.info("Refresh token {}", token);
        var oldRefreshToken = refreshTokenRepository.findById(token).orElseThrow(() -> {
            throw new AppException(ErrorCode.INVALID_REFRESH_TOKEN);
        });
        refreshTokenRepository.deleteByToken(token);
        // Retrieve user from the user id in old refresh token
        UUID userId = oldRefreshToken.getUserId();
        String refreshToken = UUID.randomUUID().toString();
        refreshTokenRepository.save(RefreshToken.builder()
                .token(refreshToken)
                .userId(userId)
                .expiryDate(new Date(System.currentTimeMillis() + (oldRefreshToken.getRememberMe() ? REFRESH_EXPIRATION_TIME_REMEMBER_ME : REFRESH_EXPIRATION_TIME)))
                .rememberMe(oldRefreshToken.getRememberMe())
                .build()
        );
        User user = userRepository.findById(oldRefreshToken.getUserId()).orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
        return RefreshTokenResponse.builder()
                .accessToken(generateToken(user))
                .refreshToken(refreshToken)
                .refreshTokenDuration(REFRESH_EXPIRATION_TIME_REMEMBER_ME)
                .build();

    }

    @Override
    public Boolean resetPassword(String email) throws MessagingException {

        return true;
    }

    @Override
    public Boolean updatePassword(String token, String newPassword) {
        return null;
    }

    public SignedJWT verifyToken(String token) {
        try {
            SignedJWT signedJWT = SignedJWT.parse(token);
            JWSVerifier verifier = new MACVerifier(SECRET_KEY.getBytes());
            var isValid = signedJWT.verify(verifier);
            Date expirationTime =
                    signedJWT
                            .getJWTClaimsSet()
                            .getExpirationTime();
            if (isValid && expirationTime != null && expirationTime.after(new Date())) {
                return signedJWT;
            } else {
                throw new AppException(ErrorCode.INVALID_TOKEN);
            }
        } catch (ParseException | JOSEException e) {
            throw new AppException(ErrorCode.INVALID_TOKEN);
        }
    }


    /**
     * Generates a new access token for the given user.
     *
     * @param user The user for whom to generate the token.
     * @return The generated JWT access token string.
     */
    private String generateToken(User user) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS256);

        JWTClaimsSet claimsSet = new JWTClaimsSet.Builder()
                .subject(user.getUsername())
                .issuer("dev.danh")
                .expirationTime(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .jwtID(UUID.randomUUID().toString())
                .claim("scope", buildScope(user))
                .build();
        // Here you would sign the token with your secret key and return it
        Payload payload = new Payload(claimsSet.toJSONObject());
        JWSObject jwsObject = new JWSObject(header, payload);
        try {
            jwsObject.sign(new MACSigner(SECRET_KEY.getBytes()));
        } catch (JOSEException e) {
            throw new RuntimeException("Error signing JWT", e);
        }
        return jwsObject.serialize();
    }

    /**
     * Generates a new refresh token for the given user.
     *
     * @param rememberMe A boolean indicating whether the "remember me" option is selected, affecting token expiration.
     * @param user       The user for whom to generate the refresh token.
     * @return The generated refresh token string.
     */
    private String generateRefreshToken(Boolean rememberMe, User user) {
        String refreshToken = UUID.randomUUID().toString();
        Date expiryDate = rememberMe ?
                new Date(System.currentTimeMillis() + REFRESH_EXPIRATION_TIME_REMEMBER_ME)
                : new Date(System.currentTimeMillis() + REFRESH_EXPIRATION_TIME);
        refreshTokenRepository.save(RefreshToken.builder()
                .token(refreshToken)
                .userId(user.getId())
                .expiryDate(expiryDate)
                .rememberMe(rememberMe)
                .build()
        );
        return refreshToken;
    }

    /**
     * Builds the scope string for a JWT based on the user's roles and permissions.
     *
     * @param user The user object containing roles and permissions.
     * @return A space-separated string of roles and permissions.
     */
    private String buildScope(User user) {
        StringJoiner stringJoiner = new StringJoiner(" ");
        if (user.getRoles() != null && !user.getRoles().isEmpty()) {
            user.getRoles().forEach(role -> {
                        stringJoiner.add("ROLE_" + role.getName());
                    }
            );
        }
        return stringJoiner.toString();
    }

    /**
     * Generates a password reset link using the provided token.
     *
     * @param token The reset token.
     * @return The complete password reset URL.
     */
    private String generateResetLink(String token) {
        return "localhost:3000/reset-password?token=" + token;
    }

    /**
     * Hashes a given token using SHA-256.
     *
     * @param token The token string to hash.
     * @return The Base64 encoded SHA-256 hash of the token.
     * @throws RuntimeException if there is an error during hashing.
     */
    private String hashToken(String token) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(token.getBytes("UTF-8"));
            return Base64.getEncoder().encodeToString(hash);
        } catch (Exception e) {
            throw new RuntimeException("Error hashing token", e);
        }
    }
}
