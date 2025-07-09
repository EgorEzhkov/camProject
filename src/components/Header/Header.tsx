import styles from "./Header.module.css";

import { useCallback, useEffect, useRef, useState } from "react";

// import { RemoveScrollBar } from "react-remove-scroll-bar";

import Button from "../../ui/Button/Button";
import logo from "../../assets/images/logo.png";
import joinIcon from "../../assets/images/joinIcon.svg";
import phoneIcon from "../../assets/images/phoneIcon.svg";

import { delay, lockScroll, unlockScroll } from "../../utils/utils";
import { buttonPropsDesctop, buttonPropsMobile } from "../../utils/constants";

const Header = () => {
  const [menuState, setMenuState] = useState<"closed" | "opening" | "closing">(
    "closed"
  );

  // if (menuState !== "closed") {
  //   lockScroll();
  // } else {
  //   unlockScroll();
  // }

  const propsForButton =
    menuState !== "closed" ? buttonPropsMobile : buttonPropsDesctop;

  const ulRef = useRef<HTMLUListElement | null>(null);

  const handleHeaderMenu = useCallback(async () => {
    if (menuState === "closed") {
      setMenuState("opening");
    } else if (menuState === "opening") {
      setMenuState("closing");
      await delay(280); // на анимацию тратится 300мс, поставил меньше,
      // потому что так меньше лагов при анимации. Надо бы вообще это всё по-другому сделать,
      // но пока так
      setMenuState("closed");
    }
  }, [menuState]);

  useEffect(() => {
    if (menuState === "closed") return;

    const handleClickOutSide = (event: MouseEvent) => {
      if (ulRef.current && !ulRef.current.contains(event.target as Node)) {
        handleHeaderMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    lockScroll(true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
      unlockScroll(true);
    };
  }, [menuState, handleHeaderMenu]);

  return (
    <>
      <header className={styles.header}>
        {menuState === "closing" || menuState === "opening" ? (
          <div
            className={`${styles.overlay} ${
              menuState === "opening"
                ? styles.active
                : menuState === "closing"
                ? styles.inactive
                : ""
            }`}
          ></div>
        ) : null}
        <div
          className={`${styles.navIcon} ${
            menuState === "opening" ? styles.active : ""
          }`}
          onClick={handleHeaderMenu}
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
            <div className={styles.list}>
              {["Готовые решения", "Тарифы", "Новости", "Контакты"].map(
                (el) => {
                  return (
                    <li className={styles.li} key={el}>
                      <Button {...propsForButton}>{el}</Button>
                    </li>
                  );
                }
              )}
            </div>
            {menuState !== "closed" && (
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
        </div>
        <div className={styles.joinIconContainer}>
          <img src={joinIcon} alt="joinIcon" />
        </div>
      </header>
    </>
  );
};

export default Header;
