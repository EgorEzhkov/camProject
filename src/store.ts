import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feauters/auth/authSlice";
import rateModalReducer from "./feauters/rateModal/rateModalSlice";

export const store = configureStore({
  reducer: { auth: authReducer, rateModal: rateModalReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
