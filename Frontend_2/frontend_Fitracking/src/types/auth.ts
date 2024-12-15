export interface User {
  id: number;
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}