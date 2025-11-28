import { useEffect, type FC, type ReactNode } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) navigate("/", { replace: false });
  }, [isAuth]);

  return children;
};

export default ProtectedRoute;
