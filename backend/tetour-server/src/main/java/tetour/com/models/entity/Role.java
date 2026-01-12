package tetour.com.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import tetour.com.enums.RoleName;

import java.util.UUID;

@Entity
@Table(name = "roles")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Role implements GrantedAuthority {
    @Id
    UUID id;
    @Enumerated(EnumType.STRING)
    RoleName name;
    String description;

    @Override
    public @Nullable String getAuthority() {
        return name.name();
    }
}
