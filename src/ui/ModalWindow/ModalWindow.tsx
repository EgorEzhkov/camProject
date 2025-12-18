import { useEffect, type FC, type ReactNode } from "react";
import closeIcon from "../../assets/images/Х.svg";
import ReactDOM from "react-dom";
import styles from "./ModalWindow.module.css";
import { lockScroll, unlockScroll } from "../../utils/utils";

interface ModalWindowProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ModalWindow: FC<ModalWindowProps> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    if (isOpen) lockScroll();

    function closeKey(e: KeyboardEvent) {
      if (e.code === "Escape") onClose();
    }

    document.addEventListener("keydown", closeKey);

    return () => {
      document.removeEventListener("keydown", closeKey);
      unlockScroll();
    };
  }, [isOpen, onClose]);

  return ReactDOM.createPortal(
    <>
      <div
        className={`${styles.modalMain} ${
          isOpen ? styles.active : styles.inactive
        }`}
      >
        <div className={styles.modalContainer}>
          {children}
          <img
            src={closeIcon}
            alt=""
            className={styles.closeIcon}
            onClick={onClose}
          />
        </div>
        <div className={styles.modalOverlay} onClick={onClose}></div>
      </div>
    </>,
    document.body
  );
};

export default ModalWindow;
