import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RateModal } from "./types";

interface RateModalState extends RateModal {}

const initialState: RateModalState = {
  description: null,
  isOpenModal: false,
  price: null,
  subtitle: null,
};

const rateModalSlice = createSlice({
  name: "rateModal",
  initialState,
  reducers: {
    setRateModal: (state, action: PayloadAction<RateModal>) => {
      state.isOpenModal = action.payload.isOpenModal;
      state.description = action.payload.description;
      state.price = action.payload.price;
      state.subtitle = action.payload.subtitle;
    },

    clearRateModal: (state) => {
      state.isOpenModal = false;
    },
  },
});

export const { clearRateModal, setRateModal } = rateModalSlice.actions;
export default rateModalSlice.reducer;
