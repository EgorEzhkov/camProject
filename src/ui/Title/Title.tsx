import type React from "react";
import styles from "./Title.module.css";
import type { FC } from "react";

interface TitleProps {
  children: React.ReactNode;
  color: "black" | "white";
}

const Title: FC<TitleProps> = ({ children, color = "black" }) => {
  return (
    <h1
      className={styles.title}
      style={{ color: color === "black" ? "#1B1C1F" : color }}
    >
      {children}
    </h1>
  );
};

export default Title;
