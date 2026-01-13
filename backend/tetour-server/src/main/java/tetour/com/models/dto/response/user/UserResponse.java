package tetour.com.models.dto.response.user;

import lombok.*;
import lombok.experimental.FieldDefaults;
import tetour.com.models.entity.Role;

import java.time.LocalDate;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserResponse {
    String avatarUrl;
    String username;
    String email;
    String fullName;
    Boolean gender;
    String phoneNumber;
    String address;
    LocalDate dateOfBirth;
    Set<Role> roles;
    Boolean isActive;
    LocalDate createdDate;
    LocalDate updatedDate;
}
