package tetour.com.models.dto.response.auth;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthenticationResponse {
    String accessToken;
    Boolean authenticated;
    UserResponse userResponse;
    String refreshToken;
    Long refreshTokenDuration;
}
