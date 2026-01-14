import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { UserService, UserProfile } from '../user.service';
import { AxiosError } from 'axios';

export const useUserProfileQuery = (options?: UseQueryOptions<UserProfile, AxiosError>) => {
  return useQuery<UserProfile, AxiosError>({
    queryKey: ['user', 'profile'],
    queryFn: () => UserService.getProfile(),
    ...options,
  });
};
