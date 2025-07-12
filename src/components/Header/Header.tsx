import styles from "./Header.module.css";

import { useCallback, useEffect, useRef, useState, type FC } from "react";

import Button from "../../ui/Button/Button";
import logo from "../../assets/images/logo.png";
import joinIcon from "../../assets/images/joinIcon.svg";
import phoneIcon from "../../assets/images/phoneIcon.svg";

import { delay, lockScroll, unlockScroll } from "../../utils/utils";
import {
  buttonPropsDesctop,
  buttonPropsMobile,
  textButtonForHeader,
} from "../../utils/constants";
import { Link, useLocation } from "react-router-dom";

const Header: FC = () => {
  const [menuState, setMenuState] = useState<"closed" | "opening" | "closing">(
    "closed"
  );

  const location = useLocation();

  const propsForButton =
    menuState !== "closed" ? buttonPropsMobile : buttonPropsDesctop;

  const ulRef = useRef<HTMLUListElement | null>(null);

  const handleHeaderMenu = useCallback(async () => {
    if (menuState === "closed") {
      setMenuState("opening");
      lockScroll(true);
    } else if (menuState === "opening") {
      unlockScroll(true);
      setMenuState("closing");
      await delay(450); // на анимацию тратится 300мс
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);

      // это убирает артефакт на iOS после анимации закрытия меню
      document.body.style.transform = "translateZ(0)";

      setTimeout(() => {
        document.body.style.transform = "";
      }, 160);
    };
    // это убирает артефакт на iOS после анимации закрытия меню
  }, [menuState, handleHeaderMenu]);

  return (
    <>
      <header className={styles.header} style={{}}>
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

        <Link className={styles.imgContainer} to={"/"}>
          <img src={logo} alt="" className={styles.logo} />
        </Link>
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
              {textButtonForHeader.map((el) => {
                return (
                  <Link key={el.text} to={el.path} className={styles.link}>
                    <li className={styles.li}>
                      <Button
                        {...propsForButton}
                        color={
                          location.pathname.includes("solutionForConnection")
                            ? "black"
                            : "white"
                        }
                      >
                        {el.text}
                      </Button>
                    </li>
                  </Link>
                );
              })}
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
              color={
                location.pathname.includes("solutionForConnection")
                  ? "black"
                  : "white"
              }
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
