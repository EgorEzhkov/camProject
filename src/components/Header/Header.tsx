import Button from "../../ui/Button/Button";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const buttonProps = {
    fontFamily: "Montserrat",
    fontWeight: "Regular",
    fontSize: 16,
    backgroundColor: false,
  } as const;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.imgContainer}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.buttonsContainer}>
          <ul className={styles.ul}>
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
        </div>
      </header>
    </>
  );
};

export default Header;
