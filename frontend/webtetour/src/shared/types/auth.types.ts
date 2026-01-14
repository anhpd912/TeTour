export interface RegisterRequest {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: boolean;
  address: string;
  dateOfBirth: string; // Format: "YYYY-MM-DD"
  isActive: boolean;
}

export interface RegisterResponse {
  message: string;
  userId?: string;
  username?: string;
}

export interface LoginRequest {
  username: string; // Backend expects 'username' field
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  token: string;
  refreshToken?: string;
  user: {
    id: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
  };
}

export interface AuthError {
  message: string;
  errors?: Record<string, string[]>;
}
