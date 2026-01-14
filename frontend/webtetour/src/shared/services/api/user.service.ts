import { axiosClient } from './axios';

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  gender?: boolean;
  avatar?: string;
}

export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  gender?: boolean;
}

export class UserService {
  /**
   * Get current user profile
   * GET /api/user/profile
   */
  static async getProfile(): Promise<UserProfile> {
    try {
      const response = await axiosClient.get<UserProfile>('/user/profile');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update user profile
   * PUT /api/user/profile
   */
  static async updateProfile(data: UpdateProfileRequest): Promise<UserProfile> {
    try {
      const response = await axiosClient.put<UserProfile>('/user/profile', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Change password
   * POST /api/user/change-password
   */
  static async changePassword(oldPassword: string, newPassword: string): Promise<{ message: string }> {
    try {
      const response = await axiosClient.post('/user/change-password', {
        oldPassword,
        newPassword,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete account
   * DELETE /api/user/account
   */
  static async deleteAccount(): Promise<{ message: string }> {
    try {
      const response = await axiosClient.delete('/user/account');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
