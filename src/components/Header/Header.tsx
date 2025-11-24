import styles from "./Header.module.css";

import { useCallback, useEffect, useRef, useState, type FC } from "react";

import Button from "../../ui/Button/Button";
import logo from "../../assets/images/logo.png";
import joinIconWhite from "../../assets/images/joinIconWhite.svg";
import joinIconBlack from "../../assets/images/joinIconBlack.svg";
import phoneIcon from "../../assets/images/phoneIcon.svg";

import { delay, lockScroll, unlockScroll } from "../../utils/utils";
import {
  buttonPropsDesctop,
  buttonPropsMobile,
  textButtonForHeader,
} from "../../utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ModalWindow from "../../ui/ModalWindow/ModalWindow";
import LoginModal from "../LoginModal/LoginModal";

const Header: FC = () => {
  const [menuState, setMenuState] = useState<"closed" | "opening" | "closing">(
    "closed"
  );
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  const propsForButton =
    menuState !== "closed" ? buttonPropsMobile : buttonPropsDesctop;
  const classNameForSpan = `${menuState === "opening" ? styles.active : ""} ${
    location.pathname.includes("/solutionForConnection")
      ? styles.blackColor
      : location.pathname.includes("/companyNewsPage")
      ? styles.blackColor
      : styles.whiteColor
  }`;

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

  function handleClickLink(path: string) {
    if (menuState === "closed") {
      navigate(path);
    } else {
      setTimeout(() => {
        navigate(path);
      }, 500);
    }
  }

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
        <span className={classNameForSpan}></span>
        <span className={classNameForSpan}></span>
        <span className={classNameForSpan}></span>
        <span className={classNameForSpan}></span>
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
                <div
                  onClick={() => {
                    handleClickLink(el.path);
                    return menuState !== "closed" ? handleHeaderMenu() : null;
                  }} // НУЖНО ДОВЕСТИ ДО УМА
                  key={el.text}
                  className={`${styles.link} ${
                    location.pathname.includes(el.path) ? styles.linkActive : ""
                  }`}
                >
                  <li className={styles.li}>
                    <Button
                      {...propsForButton}
                      color={
                        location.pathname.includes("solutionForConnection")
                          ? "#333333"
                          : location.pathname.includes("companyNewsPage")
                          ? "#333333"
                          : menuState !== "closed"
                          ? "#333333"
                          : "white"
                      }
                      activeLink={location.pathname.includes(el.path)}
                      disabled={location.pathname === el.path}
                    >
                      {el.text}
                    </Button>
                  </li>
                </div>
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

        <div
          className={styles.buttonJoinContainer}
          onClick={() => setIsOpenModal(true)}
        >
          <Button
            {...buttonPropsDesctop}
            border={true}
            borderColor="purple"
            padding="7px 30px"
            color={
              location.pathname.includes("solutionForConnection")
                ? "black"
                : location.pathname.includes("companyNewsPage")
                ? "black"
                : "white"
            }
          >
            Войти
          </Button>
        </div>
      </div>

      <div
        className={styles.joinIconContainer}
        onClick={() => console.log("gfd")}
      >
        <img
          src={
            location.pathname.includes("/solutionForConnection")
              ? joinIconBlack
              : location.pathname.includes("/companyNewsPage")
              ? joinIconBlack
              : joinIconWhite
          }
          alt="joinIcon"
          className={styles.joinIcon}
        />
      </div>
      <ModalWindow isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <LoginModal setIsOpenLogin={setIsOpenModal}></LoginModal>
      </ModalWindow>
    </header>
  );
};

export default Header;
