package tetour.com.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

import java.util.Date;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class RefreshToken {
    @Id
    String token;
    @NonNull
    @Column(name = "user_id")
    UUID userId;
    @NonNull
    @Column(name = "expiry_date")
    Date expiryDate;
}
