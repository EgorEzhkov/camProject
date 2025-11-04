import axios, { AxiosError } from "axios";
import { API_URL } from "../utils/constants";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.log("Истек access-token");
    }
    if (error) {
      throw error;
    }
  }
);
