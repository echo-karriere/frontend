import axios from "axios";

interface LoginResponse {
  token: string;
}

let inMemoryToken: string;

export function getToken(): string {
  return inMemoryToken;
}

export async function login(email: string, password: string): Promise<void> {
  try {
    const resp = await axios.post<LoginResponse>("/login", {
      email,
      password,
    });
    const { token } = await resp.data;
    inMemoryToken = token;
  } catch (error) {
    throw error;
  }
}
