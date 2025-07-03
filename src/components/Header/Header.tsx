import Button from "../../ui/Button/Button";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import joinIcon from "../../assets/images/joinIcon.svg";
import { useState } from "react";

const Header = () => {
  const buttonProps = {
    fontFamily: "Montserrat",
    fontWeight: "Regular",
    fontSize: 16,
    backgroundColor: false,
    padding: "7px 20px",
  } as const;

  const [onClickBurger, setOnClickBurger] = useState(false);
  console.log(onClickBurger);
  return (
    <>
      <header className={styles.header}>
        <div
          className={`${styles.navIcon} ${onClickBurger ? styles.active : ""}`}
          onClick={() => setOnClickBurger(!onClickBurger)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.imgContainer}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.buttonsContainer}>
          <ul className={`${styles.ul} ${onClickBurger ? styles.active : ""}`}>
            <li className={styles.li}>
              <Button {...buttonProps}>Готовые решения</Button>
            </li>
            <li className={styles.li}>
              <Button {...buttonProps}>Тарифы</Button>
            </li>
            <li className={styles.li}>
              <Button {...buttonProps}>Новости</Button>
            </li>
            <li className={styles.li}>
              <Button {...buttonProps}>Контакты</Button>
            </li>
          </ul>
          <div className={styles.buttonJoinContainer}>
            <Button
              {...buttonProps}
              border={true}
              borderColor="purple"
              padding="7px 30px"
            >
              Войти
            </Button>
          </div>
          <div className={styles.joinIconContainer}>
            <img src={joinIcon} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
