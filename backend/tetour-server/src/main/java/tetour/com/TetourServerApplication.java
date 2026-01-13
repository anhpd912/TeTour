package tetour.com;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@OpenAPIDefinition(
        info = @Info(
                title = "TeTour Server API",
                version = "1.0",
                description = "API documentation for tetour server"
        )
)
@SpringBootApplication
public class TetourServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(TetourServerApplication.class, args);
    }

}
