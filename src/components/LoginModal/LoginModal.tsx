import styles from "./LoginModal.module.css";
import { useState, type FC } from "react";
import { getUser, login } from "../../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setUser } from "../../feauters/auth/authSlice";
import Button from "../../ui/Button/Button";
import unVisibility from "../../assets/images/unVisibility.svg";
import visibility from "../../assets/images/visibility.svg";
import { getDeviceType } from "../../utils/utils";
import type { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

interface LoginModalProps {
  setIsOpenLogin(boolean: boolean): void;
  setIsOpenRegistration(boolean: boolean): void;
}

const LoginModal: FC<LoginModalProps> = ({
  setIsOpenLogin,
  setIsOpenRegistration,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const deviceType = getDeviceType();

  const isError = useSelector((state: RootState) => state.auth.error);

  const navigate = useNavigate();

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login({ email, password });
      dispatch(setLoading(true));
      const user = await getUser();
      if (user) {
        dispatch(setUser(user));
        dispatch(setLoading(false));
        setIsOpenLogin(false);
        setEmail("");
        setPassword("");
        navigate("/user");
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        if (err.response) {
          console.error("Ошибка входа:", err.response?.data.message);
          dispatch(setError(err.response?.data.message));
        }
      } else {
        console.error("Неизвестная ошибка:", err);
        dispatch(setError("Unknown error"));
      }
      dispatch(setLoading(false));
    }
  }

  return (
    <>
      <h2 className={styles.title}>Войти в аккаунт</h2>
      <form onSubmit={submitForm} className={styles.form}>
        <div className={styles.field}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.field}>
          <input
            type={!isVisible ? "password" : "text"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            className={styles.input}
            minLength={6}
            required
          />
          {isError && <p className={styles.error}>{isError}</p>}

          {deviceType === "desktop" ? (
            <img
              src={!isVisible ? unVisibility : visibility}
              alt="svgIcon"
              onClick={() => setIsVisible(!isVisible)}
              className={styles.iconVisibility}
            />
          ) : (
            <img
              src={!isVisible ? unVisibility : visibility}
              alt="svgIcon"
              onClick={() => setIsVisible(!isVisible)}
              className={styles.iconVisibility}
            />
          )}
        </div>
        <Button
          backgroundColor={true}
          fontFamily="Montserrat"
          fontSize={14}
          fontWeight="Medium"
          padding="20px"
          buttonMargin="12px 0 0 0"
        >
          Войти
        </Button>
      </form>
      <h6
        className={styles.registrationText}
        onClick={() => {
          setIsOpenLogin(false), setIsOpenRegistration(true);
        }}
      >
        Регистрация
      </h6>
    </>
  );
};

export default LoginModal;
