import { useEffect, type FC, type KeyboardEvent, type ReactNode } from "react";
import closeIcon from "../../assets/images/Х.svg";
import ReactDOM from "react-dom";
import styles from "./ModalWindow.module.css";

interface ModalWindowProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ModalWindow: FC<ModalWindowProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  useEffect(() => {
    function closeKey(e: KeyboardEventInit) {
      if (e.code === "Escape") onClose();
    }

    document.addEventListener("keydown", closeKey);

    return () => {
      document.removeEventListener("keydown", closeKey);
    };
  });

  return ReactDOM.createPortal(
    <>
      <div className={styles.modalMain}>
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
