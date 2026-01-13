package tetour.com.models.dto.response.auth;

import lombok.*;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RefreshTokenResponse {
    String accessToken;
    String refreshToken;
    Long refreshTokenDuration;
}
