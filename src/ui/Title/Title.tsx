import type React from "react";
import styles from "./Title.module.css";
import type { FC } from "react";

interface TitleProps {
  children: React.ReactNode;
  color: "black" | "white";
  fontSize?: string | number;
  textAlign?: "start" | "end" | "center";
}

const Title: FC<TitleProps> = ({
  children,
  color = "black",
  fontSize = 48,
  textAlign = "start",
}) => {
  const style = {
    color: color === "black" ? "#1B1C1F" : color,
    fontSize: fontSize,
    textAlign: textAlign,
  };
  return (
    <h1 className={styles.title} style={style}>
      {children}
    </h1>
  );
};

export default Title;
