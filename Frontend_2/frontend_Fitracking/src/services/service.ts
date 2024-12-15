import { LoginRequest, User } from "../types/auth";

export const loginUser = async (loginData: LoginRequest): Promise<User> => {
  const response = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
    credentials: "include", // Include cookies
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};