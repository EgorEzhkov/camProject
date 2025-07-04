import Button from "../../ui/Button/Button";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import joinIcon from "../../assets/images/joinIcon.svg";
import phoneIcon from "../../assets/images/phoneIcon.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";

const buttonPropsDesctop = {
  fontFamily: "Montserrat",
  fontWeight: "Regular",
  fontSize: 16,
  backgroundColor: false,
  padding: "7px 20px",
} as const;

const buttonPropsMobile = {
  fontFamily: "Montserrat",
  fontWeight: "ExtraBold",
  fontSize: 20,
  backgroundColor: false,
  padding: "0",
  color: "black",
} as const;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const Header = () => {
  const [menuState, setMenuState] = useState<"closed" | "opening" | "closing">(
    "closed"
  );
  const ulRef = useRef<HTMLUListElement>(null);

  const handleMenu = useCallback(async () => {
    if (menuState === "closed") {
      setMenuState("opening");
    } else if (menuState === "opening") {
      setMenuState("closing");
      await delay(300); // ровно столько нужно для анимации
      setMenuState("closed");
    }
  }, [menuState]);

  useEffect(() => {
    if (menuState === "closed") return;

    const handleClickOutSide = (event: MouseEvent) => {
      if (ulRef.current && !ulRef.current.contains(event.target as Node)) {
        handleMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [menuState, handleMenu]);

  const propsForButton = {
    ...(menuState === "opening"
      ? { ...buttonPropsMobile }
      : menuState === "closed"
      ? { ...buttonPropsDesctop }
      : { ...buttonPropsMobile }),
  };

  return (
    <>
      <header className={styles.header}>
        <div
          className={`${styles.navIcon} ${
            menuState === "opening" ? styles.active : ""
          }`}
          onClick={handleMenu}
        >
          <span className={menuState === "opening" ? styles.active : ""}></span>
          <span className={menuState === "opening" ? styles.active : ""}></span>
          <span className={menuState === "opening" ? styles.active : ""}></span>
          <span className={menuState === "opening" ? styles.active : ""}></span>
        </div>
        <div className={styles.imgContainer}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.buttonsContainer}>
          {menuState === "opening" && <RemoveScrollBar></RemoveScrollBar>}
          <ul
            className={`${styles.ul} ${
              menuState === "opening"
                ? styles.active
                : menuState === "closing"
                ? styles.inactive
                : ""
            }`}
            ref={ulRef}
          >
            {["Готовые решения", "Тарифы", "Новости", "Контакты"].map(
              (el, index) => {
                return (
                  <li className={styles.li} key={index}>
                    <Button {...propsForButton}>{el}</Button>
                  </li>
                );
              }
            )}

            {menuState === "opening" && (
              <div className={styles.phoneNumberAndIconContainer}>
                <a href="tel:+74732573191" className={styles.phoneNumber}>
                  +7 (473) 257-31-91
                </a>
                <img src={phoneIcon} alt="phoneicon" />
              </div>
            )}
          </ul>
          <div className={styles.buttonJoinContainer}>
            <Button
              {...buttonPropsDesctop}
              border={true}
              borderColor="purple"
              padding="7px 30px"
            >
              Войти
            </Button>
          </div>
          <div className={styles.joinIconContainer}>
            <img src={joinIcon} alt="joinIcon" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
