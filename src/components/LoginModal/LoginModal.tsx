import { useState } from "react";
import { login } from "../../api/auth";
import styles from "./LoginModal.module.css";
import Button from "../../ui/Button/Button";
import { RemoveScrollBar } from "react-remove-scroll-bar";

const LoginModal = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const result = await login({ email, password });

      console.log("Успешный вход:", result);
    } catch (err) {
      console.error("Ошибка входа:", err);
    }
  }

  return (
    <>
      <RemoveScrollBar></RemoveScrollBar>
      <h2 className={styles.title}>Войти в аккаунт</h2>
      <form onSubmit={submitForm} className={styles.form}>
        <div className={styles.field}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email"
            required
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            required
            className={styles.input}
          />
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
    </>
  );
};

export default LoginModal;
