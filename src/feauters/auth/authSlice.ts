import type { User } from "./types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: User | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
  success: boolean | null;
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
  loading: false,
  error: null,
  success: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
      state.success = true;
    },
    clearUser: (state) => {
      state.isAuth = false;
      state.user = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const { clearUser, setError, setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
