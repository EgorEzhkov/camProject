import { api } from "./axios";

export const getDeviceType = async () => {
  try {
    const res = await api.get("deviceype");
    if (res) {
      return res;
    }
  } catch (err) {
    throw err;
  }
};
