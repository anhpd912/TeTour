package tetour.com.models.dto.response.auth;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class APIResponse {
    String message;
    Object data;
    int statusCode;

    public APIResponse(String message, Object data) {
        this.message = message;
        this.data = data;
        this.statusCode = 200;
    }

    public APIResponse(String message, int statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
