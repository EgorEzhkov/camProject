import type { AxiosResponse } from "axios";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "../types/dto/auth.dto";
import { api } from "./axios";
import type { User } from "../feauters/auth/types";

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
      throw err;
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
      localStorage.setItem("accessToken", `Bearer ${res.data.accessToken}`);

      return res;
    }
  } catch (err) {
    throw err;
  }
};

export const getUser = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) return;

  try {
    const res: AxiosResponse<User> = await api.get("/auth/@me", {
      headers: { Authorization: accessToken },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const logout = async () => {
  try {
    const res = await api.post("/auth/logout");
    if (res) {
      localStorage.removeItem("accessToken");
    }
  } catch (err) {
    throw err;
  }
};
