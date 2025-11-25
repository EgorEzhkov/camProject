import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api } from "../api/axios";
import { clearUser, setUser } from "../feauters/auth/authSlice";

export const useAuthCheck = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const check = async () => {
      try {
        const { data } = await api.post("/auth/refresh");

        localStorage.setItem("accessToken", data.accessToken);

        const user = await api.get("/auth/@me");

        dispatch(setUser(user.data));
      } catch {
        dispatch(clearUser());
      }
    };

    check();
  }, []);
};
