import axios, { AxiosError } from "axios";
import { API_URL } from "../utils/constants";
import type { RefreshResponse } from "../types/dto/auth.dto";
import tokenHandler from "./token";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const originalRequest: any = error.config;

    if (originalRequest.url === "/auth/refresh") {
      return;
    }

    if (error.response?.status === 401) {
      try {
        const { data } = await api.post<RefreshResponse>("/auth/refresh");

        const newAccessToken = data.accessToken;

        tokenHandler.set(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (err) {
        console.log("REFRESH FAILED");
        throw err;
      }
    }

    throw error;
  }
);
