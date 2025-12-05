import styles from "./RegistrationModal.module.css";
import { useState, type FC } from "react";
import { getUser, registerUser } from "../../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setUser } from "../../feauters/auth/authSlice";
import Button from "../../ui/Button/Button";
import unVisibility from "../../assets/images/unVisibility.svg";
import visibility from "../../assets/images/visibility.svg";
import { getDeviceType } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { RegisterRequest } from "../../types/dto/auth.dto";
import { AxiosError } from "axios";
import type { RootState } from "../../store";

interface RegistrationModalProps {
  setIsOpenRegistration(boolean: boolean): void;
  setIsOpenLogin(boolean: boolean): void;
}

const RegistrationModal: FC<RegistrationModalProps> = ({
  setIsOpenRegistration,
  setIsOpenLogin,
}) => {
  const { register, formState, watch, reset } = useForm<
    RegisterRequest & { repeatedPassword: string }
  >({
    mode: "onChange",
  });

  const email = watch("email");
  const password = watch("password");
  const repeatedPassword = watch("repeatedPassword");
  const userName = watch("userName");
  const login = watch("login");

  const userNameErrorMessage = formState.errors.userName?.message;
  const emailErrorMessage = formState.errors.email?.message;
  const loginErrorMessage = formState.errors.login?.message;
  const passwordErrorMessage = formState.errors.password?.message;

  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const deviceType = getDeviceType();

  const navigate = useNavigate();

  const authError = useSelector((state: RootState) => state.auth.error);

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await registerUser({ email, password, userName, login });
      dispatch(setLoading(true));
      const user = await getUser();
      if (user) {
        dispatch(setUser(user));
        dispatch(setLoading(false));
        setIsOpenRegistration(false);
        reset({
          userName: "",
          email: "",
          password: "",
          repeatedPassword: "",
          login: "",
        });
        navigate("/user");
      }
    } catch (err: unknown) {
      dispatch(setLoading(false));
      if (err instanceof AxiosError) {
        if (err.response) {
          console.error("Ошибка входа:", err.response.data.message);
          dispatch(setError(err.response.data.message));
        }
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
            placeholder="Введите ФИО"
            className={`${styles.input} ${
              userNameErrorMessage ? styles.inputError : null
            }`}
            {...register("userName", {
              required: "Это поле обязательно",
              minLength: { value: 6, message: "Минимум 6 символов" },
              maxLength: {
                value: 50,
                message: "Имя не должно превышать 50 символов",
              },
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё]+([ -][A-Za-zА-Яа-яЁё]+)*$/,
                message:
                  "Можно использовать только буквы (русские/англ.), пробелы и тире",
              },
            })}
          />
          {userNameErrorMessage && (
            <p className={styles.error}>{userNameErrorMessage}</p>
          )}
        </div>
        <div className={styles.field}>
          <input
            type="email"
            id="regEmail"
            value={email}
            placeholder="Введите email"
            className={`${styles.input} ${
              emailErrorMessage ? styles.inputError : null
            }`}
            {...register("email", {
              required: "Это поле обязательно",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Неправильный адрес электронной почты",
              },
            })}
          />
          {emailErrorMessage && (
            <p className={styles.error}>{emailErrorMessage}</p>
          )}
        </div>
        <div className={styles.field}>
          <input
            type="text"
            id="login"
            value={login}
            placeholder="Введите login"
            className={`${styles.input} ${
              loginErrorMessage ? styles.inputError : null
            }`}
            {...register("login", {
              required: "Это поле обязательно",
              maxLength: {
                value: 50,
                message: "Логин не должен превышать 50 символов",
              },
              minLength: {
                value: 5,
                message: "Логин не должен быть меньше 5 символов",
              },
            })}
          />
          {loginErrorMessage && (
            <p className={styles.error}>{loginErrorMessage}</p>
          )}
        </div>
        <div className={styles.field}>
          <input
            type={!isVisible ? "password" : "text"}
            id="regPassword"
            value={password}
            placeholder="Введите пароль"
            className={`${styles.input} ${
              passwordErrorMessage ? styles.inputError : null
            }`}
            {...register("password", {
              required: "Это поле обязятельно",
              maxLength: {
                value: 128,
                message: "Пароль не должен превышать 128 символов",
              },
              minLength: {
                value: 8,
                message: "Логин не должен быть меньше 8 символов",
              },
              pattern: {
                value: /^(?=.*[A-ZА-ЯЁ])(?=.*\d).{8,}$/,
                message:
                  "Пароль должен содержать одну заглавную букву и одну цифру",
              },
            })}
          />
          {passwordErrorMessage && (
            <p className={styles.error}>{passwordErrorMessage}</p>
          )}
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
        <div className={styles.field}>
          <input
            type={!isVisible ? "password" : "text"}
            id="repeatPassword"
            value={repeatedPassword}
            placeholder="Повторите пароль"
            className={styles.input}
            {...register("repeatedPassword")}
          />
          {password && repeatedPassword
            ? password !== repeatedPassword && (
                <p className={styles.error}>Пароли не совпадают</p>
              )
            : null}
          {authError && <p className={styles.error}>{authError}</p>}
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
