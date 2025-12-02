import { useDispatch, useSelector } from "react-redux";
import styles from "./ButtonWithMenu.module.css";
import type { RootState } from "../../store";

import arrow from "../../assets/images/simpleArrowRightWhite.svg";
import { useEffect, useRef, useState } from "react";
import { logout } from "../../api/auth";
import { clearUser } from "../../feauters/auth/authSlice";

const ButtonWithMenu = () => {
  const userName = useSelector((state: RootState) => state.auth.user?.userName);
  const arrayName = userName?.split(" ");

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const dispatch = useDispatch();

  const mainDiv = useRef<HTMLDivElement | null>(null);
  const list = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (isOpenMenu) {
      const handleClick = (e: MouseEvent) => {
        if (mainDiv.current && !mainDiv.current.contains(e.target as Node)) {
          setIsOpenMenu(false);
        }
      };

      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [isOpenMenu]);

  return (
    <div className={styles.mainDiv} ref={mainDiv}>
      <h4 className={styles.name} onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <button
          className={styles.button}
          style={{
            backgroundColor: isOpenMenu ? "#5C17CD" : "",
            borderRadius: isOpenMenu ? "6px 6px 0 0" : "6px",
            borderBottom: isOpenMenu ? "none" : "",
            minWidth: isOpenMenu ? "180px" : "150px",
          }}
        >
          <p
            className={styles.textName}
            style={{ opacity: isOpenMenu ? 0.5 : 1 }}
          >
            {arrayName?.map((el, index) =>
              index === 0 ? `${el} ` : index > 0 ? `${el[0]}.` : null
            )}
          </p>
          <img
            src={arrow}
            alt=""
            className={styles.arrow}
            style={{ opacity: isOpenMenu ? 0 : 1 }}
          />
        </button>

        <ul
          className={styles.list}
          style={{
            opacity: isOpenMenu ? 1 : 0,
            visibility: isOpenMenu ? "visible" : "hidden",
          }}
          ref={list}
        >
          <li className={styles.listElement}>Мои камеры</li>
          <li className={styles.listElement}>Мои данные</li>
          <li className={styles.listElement}>Пополнить: 0 ₽</li>
          <li
            className={styles.listElement}
            onClick={() => {
              logout(), dispatch(clearUser());
            }}
          >
            Выход
          </li>
        </ul>
      </h4>
    </div>
  );
};

export default ButtonWithMenu;
