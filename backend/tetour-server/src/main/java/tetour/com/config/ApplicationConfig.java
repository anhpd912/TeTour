package tetour.com.config;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import tetour.com.enums.RoleName;
import tetour.com.models.entity.Role;
import tetour.com.repository.RoleRepository;

@Configuration
@Slf4j
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ApplicationConfig {
    @Bean
    ApplicationRunner applicationRunner(RoleRepository roleRepository) {
        return args -> {
            if (roleRepository.findById(RoleName.ADMIN).isEmpty()) {
                Role role1 = new Role();
                role1.setName(RoleName.ADMIN);
                role1.setDescription("ADMIN can manage all user and content in this system.");
                roleRepository.save(role1);
            }
            if (roleRepository.findById(RoleName.CUSTOMER).isEmpty()) {
                Role role1 = new Role();
                role1.setName(RoleName.CUSTOMER);
                role1.setDescription("CUSTOMER can access this system to view and book tour.");
                roleRepository.save(role1);
            }
        };
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(10);
    }
}
