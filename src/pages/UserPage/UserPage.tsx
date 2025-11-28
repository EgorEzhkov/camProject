import { useSelector } from "react-redux";
import Title from "../../ui/Title/Title";
import styles from "./UserPage.module.css";
import type { RootState } from "../../store";
import Button from "../../ui/Button/Button";

const UserPage = () => {
  const userName = useSelector((state: RootState) => state.auth.user?.name);
  const userLogin = useSelector((state: RootState) => state.auth.user?.login);

  const userEmail = useSelector((state: RootState) => state.auth.user?.email);

  return (
    <main className={styles.mainPage}>
      <div className={styles.titleContainer}>
        <Title color="white">Личные данные</Title>
      </div>
      <div className={styles.line}></div>
      <div className={styles.userInfoAndMoneyBalance}>
        <ul className={styles.userInfo}>
          <li className={styles.listElement}>
            <p className={styles.subTitle}>Имя</p>
            <p className={styles.userInfoElement}>{userName}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.subTitle}>Логин</p>
            <p className={styles.userInfoElement}>{userLogin}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.subTitle}>E-mail</p>
            <p className={styles.userInfoElement}>{userEmail}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.subTitle}>Количество камер</p>
            <p className={styles.userInfoElement}></p>
          </li>
        </ul>
        <div className={styles.balanceAndStatusContainer}>
          <div className={styles.statusContainer}>
            Статус: <span className={styles.statusSpan}>&nbsp;Активирован</span>
            {/* статус будет браться с дб */}
          </div>
          <div className={styles.balanceStatus}>
            <h3 className={styles.balance}>
              Ваш баланс: <span className={styles.balanceSpan}>2 000₽</span>
            </h3>
            <div className={styles.textContainer}>
              <p className={styles.text}>Дата платежа 12.01.2026</p>
              {/* это все тоже будет браться с дб */}
              <p className={styles.text}>Ежемесячный платеж: 750₽</p>
            </div>
            <Button
              maxWidth="232px"
              width="100%"
              backgroundColor={true}
              color="white"
              fontSize={16}
              fontWeight="Bold"
              fontFamily="Montserrat"
              padding="14px 67px"
            >
              Пополнить
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserPage;
