import type { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./ModalWindow.module.css";

interface ModalWindowProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ModalWindow: FC<ModalWindowProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className={styles.modalMain}>
        <div className={styles.modalContainer}>{children}</div>
        <div className={styles.modalOverlay} onClick={onClose}></div>
      </div>
    </>,
    document.body
  );
};

export default ModalWindow;
