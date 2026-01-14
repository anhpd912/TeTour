import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AuthService } from '../auth.service';
import type { RegisterRequest, RegisterResponse, AuthError } from 'src/shared/types/auth.types';
import { AxiosError } from 'axios';

export const useRegisterMutation = (
  options?: UseMutationOptions<RegisterResponse, AxiosError<AuthError>, RegisterRequest>,
) => {
  return useMutation<RegisterResponse, AxiosError<AuthError>, RegisterRequest>({
    mutationFn: (data: RegisterRequest) => AuthService.register(data),
    ...options,
  });
};
