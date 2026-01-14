import axios from 'axios';
import { clientEnvironment } from 'src/shared/environments/client';
import { authStorage } from 'src/shared/utils/authStorage';

export const axiosClient = axios.create({
  baseURL: `${clientEnvironment.apiURL}/api`,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
axiosClient.interceptors.request.use(
  (config) => {
    const token = authStorage.getAccessToken();
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add response interceptor to handle token refresh
axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 and not already retried, try to refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = authStorage.getRefreshToken();
      if (refreshToken) {
        try {
          // Try to refresh token
          const response = await axios.post(`${clientEnvironment.apiURL}/api/auth/refresh`, {
            refreshToken,
          });

          const { token, refreshToken: rotatedRefreshToken } = response.data;
          authStorage.persistAccessToken(token, rotatedRefreshToken ?? refreshToken);

          // Retry original request with new token
          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${token}`,
          };
          return axiosClient(originalRequest);
        } catch (refreshError) {
          // Refresh failed, clear tokens and redirect to login
          authStorage.clearTokens();
          if (typeof window !== 'undefined') {
            window.location.href = '/login';
          }
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  },
);
