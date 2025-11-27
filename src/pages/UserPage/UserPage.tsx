import { useSelector } from "react-redux";
import Title from "../../ui/Title/Title";
import styles from "./UserPage.module.css";
import type { RootState } from "../../store";

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
      </div>
    </main>
  );
};

export default UserPage;
