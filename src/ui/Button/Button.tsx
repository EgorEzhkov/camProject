import type { FC } from "react";

interface Props {
  children?: React.ReactNode;
  border?: boolean;
  fontFamily: "Montserrat" | "Play";
  fontWeight: "Bold" | "Medium" | "Regular";
  fontSize: number;
  backgroundColor: boolean;
  borderColor?: "purple" | "blue";
  color?: string;
  padding?: string;
}

const Button: FC<Props> = ({
  children,
  border = false,
  fontFamily = "Montserrat",
  fontWeight = "Regular",
  fontSize = 16,
  backgroundColor = false,
  borderColor = "purple",
  color = "white",
  padding = "7px 20px",
}) => {
  const style = {
    fontFamily,
    fontWeight:
      fontWeight === "Bold" ? 700 : fontWeight === "Medium" ? 500 : 400, // Regular
    fontSize,
    backgroundColor: backgroundColor ? "#007bff" : "transparent",
    color: color,
    border: border ? "1px solid " : "none",
    borderColor: borderColor === "blue" ? "#386DF4" : "#5C17CD",
    padding: padding,
    borderRadius: "4px",
    cursor: "pointer",
  } as const;

  return <button style={style}>{children}</button>;
};

export default Button;
