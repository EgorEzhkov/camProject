import type { AxiosResponse } from "axios";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "../types/dto/auth.dto";
import { api } from "./axios";

export const register = async (dto: RegisterRequest) => {
  const { email, name, password } = dto;
  if (email && password && name) {
    try {
      const res: AxiosResponse<RegisterResponse> = await api.post(
        "/auth/register",
        {
          email,
          password,
          name,
        }
      );

      if (res) {
        localStorage.setItem("accessToken", `Bearer ${res.data.accessToken}`);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export const login = async (dto: LoginRequest) => {
  const { email, password } = dto;
  try {
    const res: AxiosResponse<LoginResponse> = await api.post("/auth/login", {
      email,
      password,
    });
    if (res) {
      res.status;
      localStorage.setItem("accessToken", `Bearer ${res.data.accessToken}`);
    }
  } catch (err) {
    console.log(err);
  }
};
