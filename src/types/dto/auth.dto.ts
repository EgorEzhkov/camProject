export interface RegisterRequest {
  email: string;
  name: string;
  password: string;
}

export interface RegisterResponse {
  accessToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}
