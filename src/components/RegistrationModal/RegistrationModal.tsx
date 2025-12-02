import styles from "./RegistrationModal.module.css";
import { useState, type FC } from "react";
import { getUser, register } from "../../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setUser } from "../../feauters/auth/authSlice";
import Button from "../../ui/Button/Button";
import unVisibility from "../../assets/images/unVisibility.svg";
import visibility from "../../assets/images/visibility.svg";
import { getDeviceType } from "../../utils/utils";
import type { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

interface RegistrationModalProps {
  setIsOpenRegistration(boolean: boolean): void;
  setIsOpenLogin(boolean: boolean): void;
}

const RegistrationModal: FC<RegistrationModalProps> = ({
  setIsOpenRegistration,
  setIsOpenLogin,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatedPassword, setRepeatedPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [login, setLogin] = useState<string>("");

  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const deviceType = getDeviceType();

  const navigate = useNavigate();

  const isError = useSelector((state: RootState) => state.auth.error);

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await register({ email, password, userName, login });
      console.log(res);
      dispatch(setLoading(true));
      const user = await getUser();
      if (user) {
        dispatch(setUser(user));
        dispatch(setLoading(false));
        setIsOpenRegistration(false);
        navigate("/user");
        setEmail("");
        setPassword("");
        setRepeatedPassword("");
        setUserName("");
        setLogin("");
      }
    } catch (err: unknown) {
      dispatch(setLoading(false));
      if (err instanceof Error) {
        console.error("Ошибка входа:", err.message);
        dispatch(setError(err.message));
      } else {
        console.error("Неизвестная ошибка:", err);
        dispatch(setError("Unknown error"));
      }
    }
  }

  return (
    <>
      <h2 className={styles.title}>Регистрация</h2>
      <form onSubmit={submitForm} className={styles.form}>
        <div className={styles.field}>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Введите ФИО"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.field}>
          <input
            type="email"
            id="regEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.field}>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Введите login"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.field}>
          <input
            type={!isVisible ? "password" : "text"}
            id="regPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            className={styles.input}
            minLength={6}
            required
          />
          {deviceType === "desktop" ? (
            <img
              src={!isVisible ? unVisibility : visibility}
              alt="svgIcon"
              onMouseDown={() => setIsVisible(true)}
              onMouseUp={() => setIsVisible(false)}
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
        <div className={styles.field}>
          <input
            type={!isVisible ? "password" : "text"}
            id="repeatPassword"
            value={repeatedPassword}
            onChange={(e) => setRepeatedPassword(e.target.value)}
            placeholder="Повторите пароль"
            className={styles.input}
            minLength={6}
            required
          />
          {password !== repeatedPassword && (
            <p className={styles.error}>Пароли не совпадают</p>
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
          Зарегистрироваться
        </Button>
      </form>
      <h6
        className={styles.registrationText}
        onClick={() => {
          setIsOpenRegistration(false), setIsOpenLogin(true);
        }}
      >
        Войти
      </h6>
    </>
  );
};

export default RegistrationModal;
