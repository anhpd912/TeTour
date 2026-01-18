package tetour.com.restcontroller.auth;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.web.bind.annotation.*;
import tetour.com.models.dto.request.auth.AuthenticationRequest;
import tetour.com.models.dto.request.auth.ChangePasswordRequest;
import tetour.com.models.dto.request.user.UserCreateRequest;
import tetour.com.models.dto.response.auth.APIResponse;
import tetour.com.service.AuthService;
import tetour.com.service.UserService;

import java.text.ParseException;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
@Slf4j
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthController {
    AuthService authService;
    UserService userService;
    @NonFinal
    @Value("${enable.secure}")
    Boolean ENABLE_SECURE;

    @PostMapping("/login")
    public ResponseEntity<APIResponse> login(@RequestBody AuthenticationRequest request) {

        var response = authService.authenticate(request);

        ResponseCookie cookie = ResponseCookie.from("refreshToken", response.getRefreshToken())
                .httpOnly(true)
                .secure(ENABLE_SECURE)
                .path("/")
                .sameSite("Lax")
                //If not remember , cookie is active in session
                .maxAge(request.getRememberMe() ? response.getRefreshTokenDuration() : -1)
                .build();
        return ResponseEntity.ok()
                //Set cookie for saving refresh token
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(APIResponse.builder().message("Authenticate successfully").data(response).statusCode(200)
                        .build());
    }

    @PostMapping("/register")
    public ResponseEntity<APIResponse> register(@RequestBody UserCreateRequest userCreateRequest) {
        return ResponseEntity.ok(APIResponse.builder()
                .message("User registered successfully")
                .data(userService.saveUser(userCreateRequest))
                .statusCode(200)
                .build());
    }

    @PostMapping("/refresh")
    public ResponseEntity<APIResponse> refreshToken(@CookieValue("refreshToken") String token) throws ParseException {
        /**
         * Refreshes an access token using a provided refresh token.
         * @param token The refresh token provided as a cookie.
         * @return A ResponseEntity containing an APIResponse with the new access token.
         * @throws ParseException If there is an error parsing the token.
         */
        log.info("Refresh token {}", token);
        var response = authService.refreshToken(token);
        log.info("New access token {}", response.getAccessToken());
        ResponseCookie cookie = ResponseCookie.from("refreshToken", response.getRefreshToken())
                .httpOnly(true)
                .secure(ENABLE_SECURE)
                .path("/")
                .maxAge(response.getRefreshTokenDuration())
                .sameSite("Lax")
                .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(APIResponse.builder().message("Refresh token successfully").data(response).statusCode(200).build());
    }

    @PutMapping("/update-password/{userId}")
    //Check current user is changing their password
    @PostAuthorize("returnObject.body.data.username == authentication.name")
    public ResponseEntity<APIResponse> updatePassword(@PathVariable UUID userId, @RequestBody ChangePasswordRequest request) {
        return ResponseEntity.ok(APIResponse.builder().message("Update password successfully").data(authService.updatePassword(request, userId)).statusCode(200).build());
    }
}
