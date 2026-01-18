package tetour.com.models.dto.request.auth;

import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;
import tetour.com.contants.IMessages;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ChangePasswordRequest {
    String oldPassword;
    @Size(min = 8, message = IMessages.LENGTH_PASSWORD)
    String newPassword;
    @Size(min = 8, message = IMessages.LENGTH_PASSWORD)
    String confirmPassword;
}

