package tetour.com.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtException;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.stereotype.Component;
import tetour.com.models.dto.request.auth.IntrospectRequest;
import tetour.com.service.AuthService;

import javax.crypto.spec.SecretKeySpec;
import java.util.Objects;

@Component
public class CustomJwtDecoder implements JwtDecoder {

    @Value("${jwt.secret}")
    String secretKey;
    
    @Autowired
    @Lazy
    AuthService authService;
    
    NimbusJwtDecoder nimbusJwtDecoder = null;

    @Override
    public Jwt decode(String token) throws JwtException {
        var response = authService.introspect(
                IntrospectRequest.builder().token(token).build());
        if (!response.isValid()) {
            throw new JwtException("Invalid token");
        }
        if (Objects.isNull(nimbusJwtDecoder)) {
            SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(), "HS256");
            nimbusJwtDecoder = NimbusJwtDecoder.withSecretKey(secretKeySpec)
                    .macAlgorithm(MacAlgorithm.HS256)
                    .build();
        }

        return nimbusJwtDecoder.decode(token);
    }
}
