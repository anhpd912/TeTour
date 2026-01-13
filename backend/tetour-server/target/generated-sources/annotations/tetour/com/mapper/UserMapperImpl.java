package tetour.com.mapper;

import java.util.LinkedHashSet;
import java.util.Set;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import tetour.com.models.dto.request.user.UserCreateRequest;
import tetour.com.models.dto.response.user.UserResponse;
import tetour.com.models.entity.Role;
import tetour.com.models.entity.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-01-13T13:54:00+0700",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.7 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserResponse toUserResponse(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponse.UserResponseBuilder userResponse = UserResponse.builder();

        userResponse.avatarUrl( user.getAvatarUrl() );
        userResponse.username( user.getUsername() );
        userResponse.email( user.getEmail() );
        userResponse.fullName( user.getFullName() );
        userResponse.gender( user.getGender() );
        userResponse.phoneNumber( user.getPhoneNumber() );
        userResponse.address( user.getAddress() );
        userResponse.dateOfBirth( user.getDateOfBirth() );
        Set<Role> set = user.getRoles();
        if ( set != null ) {
            userResponse.roles( new LinkedHashSet<Role>( set ) );
        }
        userResponse.isActive( user.getIsActive() );
        userResponse.createdDate( user.getCreatedDate() );
        userResponse.updatedDate( user.getUpdatedDate() );

        return userResponse.build();
    }

    @Override
    public User toUser(UserCreateRequest request, User user) {
        if ( request == null ) {
            return user;
        }

        user.setUsername( request.getUsername() );
        user.setPassword( request.getPassword() );
        user.setEmail( request.getEmail() );
        user.setFirstName( request.getFirstName() );
        user.setLastName( request.getLastName() );
        user.setGender( request.getGender() );
        user.setPhoneNumber( request.getPhoneNumber() );
        user.setAddress( request.getAddress() );
        user.setDateOfBirth( request.getDateOfBirth() );
        user.setIsActive( request.getIsActive() );

        return user;
    }
}
