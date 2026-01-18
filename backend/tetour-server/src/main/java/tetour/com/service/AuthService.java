package tetour.com.service;

import jakarta.mail.MessagingException;
import tetour.com.models.dto.request.auth.AuthenticationRequest;
import tetour.com.models.dto.request.auth.ChangePasswordRequest;
import tetour.com.models.dto.request.auth.IntrospectRequest;
import tetour.com.models.dto.request.auth.LogoutRequest;
import tetour.com.models.dto.response.auth.AuthenticationResponse;
import tetour.com.models.dto.response.auth.ChangePasswordResponse;
import tetour.com.models.dto.response.auth.IntrospectResponse;
import tetour.com.models.dto.response.auth.RefreshTokenResponse;

import java.text.ParseException;
import java.util.UUID;

public interface AuthService {
    AuthenticationResponse authenticate(AuthenticationRequest request);
    IntrospectResponse introspect(IntrospectRequest request);
    void logout(LogoutRequest token);
    RefreshTokenResponse refreshToken(String request) throws ParseException;


    Boolean resetPassword(String email) throws MessagingException;

    ChangePasswordResponse updatePassword(ChangePasswordRequest request, UUID userId);

}
