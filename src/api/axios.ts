import axios, { AxiosError } from "axios";
import { API_URL } from "../utils/constants";
import type { RefreshResponse } from "../types/dto/auth.dto";

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

        // лучше не localStorage, а в Redux
        localStorage.setItem("accessToken", `Bearer ${newAccessToken}`);

        // обновляем токен и повторяем запрос
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
