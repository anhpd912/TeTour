package tetour.com.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import tetour.com.models.dto.request.user.UserCreateRequest;
import tetour.com.models.dto.response.user.UserResponse;

import java.util.UUID;

public interface UserService {
    Page<UserResponse> getUsers(Pageable pageable);

    UserResponse getUserById(UUID id);

    UserResponse getUserByEmail(String email);

    UserResponse getUserByUsername(String username);

    UserResponse getUserByUsernameAndPassword(String username, String password);

    UserResponse saveUser(UserCreateRequest userCreateRequest);

}
