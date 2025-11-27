import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api } from "../api/axios";
import { clearUser, setLoading, setUser } from "../feauters/auth/authSlice";

export const useAuthCheck = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const check = async () => {
      dispatch(setLoading(true));
      try {
        console.log("f");
        const { data } = await api.post("/auth/refresh");

        localStorage.setItem("accessToken", data.accessToken);

        const user = await api.get("/auth/@me");

        dispatch(setUser(user.data));
        dispatch(setLoading(false));
      } catch {
        dispatch(clearUser());
        dispatch(setLoading(false));
      }
    };

    check();
  }, []);
};
