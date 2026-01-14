import { axiosClient } from './axios';
import type { RegisterRequest, RegisterResponse, LoginRequest, LoginResponse } from 'src/shared/types/auth.types';
import { authStorage } from 'src/shared/utils/authStorage';

export class AuthService {
  /**
   * Register a new user
   * POST /api/auth/register
   */
  static async register(data: RegisterRequest): Promise<RegisterResponse> {
    try {
      const response = await axiosClient.post<RegisterResponse>('/auth/register', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Login user
   * POST /api/auth/login
   */
  static async login(data: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await axiosClient.post<LoginResponse>('/auth/login', data);

      // Store token using the selected persistence strategy
      if (response.data.token) {
        authStorage.setTokens(response.data.token, response.data.refreshToken, data.rememberMe);
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Logout user
   */
  static logout(): void {
    authStorage.clearTokens();
  }

  /**
   * Get stored auth token
   */
  static getToken(): string | null {
    return authStorage.getAccessToken();
  }

  /**
   * Check if user is authenticated
   */
  static isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
