package tetour.com.contants;

public interface IConstants {
    // Define whitelisted URLs that do not require authentication
    String[] WHITELISTED_URLS = {"/api/auth/**", "/api/public/**", "/swagger-ui/**", "/v3/api-docs/**"};
    String[] BLACKLISTED_URLS = {"/api/auth/update-password"};

    //Define other constants
    String MIN_ATTRIBUTE = "min";
}
