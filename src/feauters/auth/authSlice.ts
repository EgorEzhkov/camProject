import type { User } from "./types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: User | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
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
    },
  },
});

export const { clearUser, setError, setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
