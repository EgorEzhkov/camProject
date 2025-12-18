import { api } from "./axios";

export const getTariffId = async (nameTariff: string) => {
  try {
    const tariffId = await api.post("/tariff/getId", { name: nameTariff });

    if (tariffId) {
      return tariffId.data;
    }
  } catch (error) {
    throw error;
  }
};
