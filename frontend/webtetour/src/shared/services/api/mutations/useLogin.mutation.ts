import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AuthService } from '../auth.service';
import type { LoginRequest, LoginResponse, AuthError } from 'src/shared/types/auth.types';
import { AxiosError } from 'axios';

export const useLoginMutation = (options?: UseMutationOptions<LoginResponse, AxiosError<AuthError>, LoginRequest>) => {
  return useMutation<LoginResponse, AxiosError<AuthError>, LoginRequest>({
    mutationFn: (data: LoginRequest) => AuthService.login(data),
    ...options,
  });
};
