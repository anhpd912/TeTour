package tetour.com.service.impl;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tetour.com.enums.ErrorCode;
import tetour.com.enums.RoleName;
import tetour.com.exception.AppException;
import tetour.com.mapper.UserMapper;
import tetour.com.models.dto.request.user.UserCreateRequest;
import tetour.com.models.dto.response.user.UserResponse;
import tetour.com.models.entity.Role;
import tetour.com.models.entity.User;
import tetour.com.repository.RoleRepository;
import tetour.com.repository.UserRepository;
import tetour.com.service.UserService;

import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserServiceImpl implements UserService {
    UserRepository userRepository;
    UserMapper userMapper;
   RoleRepository roleRepository;
    PasswordEncoder passwordEncoder;


    @Override
    public Page<UserResponse> getUsers(Pageable pageable) {
        return userRepository.findAll(pageable).map(userMapper::toUserResponse);
    }

    @Override
    public UserResponse getUserById(UUID id) {
        return userRepository.findById(id)
                .map(userMapper::toUserResponse)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
    }

    @Override
    public UserResponse getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .map(userMapper::toUserResponse)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
    }

    @Override
    public UserResponse getUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .map(userMapper::toUserResponse)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
    }

    @Override
    public UserResponse getUserByUsernameAndPassword(String username, String password) {
        if (!userRepository.findByUsername(username).isPresent()) {
            throw new AppException(ErrorCode.USER_NOT_FOUND);
        }
        if (!userRepository.findByUsernameAndPassword(username, password).isPresent()) {
            throw new AppException(ErrorCode.INVALID_PASSWORD);
        }
        var user = userRepository.findByUsernameAndPassword(username, password);
        if (user.isPresent()) {
            return userMapper.toUserResponse(user.get());
        }
        return null;
    }

    @Override
    public UserResponse saveUser(UserCreateRequest userCreateRequest) {
        User user = new User();
        user = userMapper.toUser(userCreateRequest, user);
        Role customerRole = roleRepository.findById(RoleName.CUSTOMER).get();
        user.setRoles(Set.of(customerRole));
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user = userRepository.save(user);
        return userMapper.toUserResponse(user);
    }
}
