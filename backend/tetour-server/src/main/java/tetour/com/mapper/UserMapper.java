package tetour.com.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import tetour.com.models.dto.request.user.UserCreateRequest;
import tetour.com.models.dto.response.user.UserResponse;
import tetour.com.models.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserResponse toUserResponse(User user);

    @Mapping(target = "roles", ignore = true)
    User toUser(UserCreateRequest request, @MappingTarget User user);
}
