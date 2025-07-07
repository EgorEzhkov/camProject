import type { FC } from "react";

interface Props {
  children?: React.ReactNode;
  border?: boolean;
  fontFamily: "Montserrat" | "Play";
  fontWeight: "Bold" | "Medium" | "Regular" | "ExtraBold";
  fontSize: number | string;
  backgroundColor: boolean;
  borderColor?: "purple" | "blue";
  color?: string;
  padding?: string;
  textMargin?: string;
  buttonMargin?: string;
  lineHeight?: string;
  width?: string;
  maxWidth?: string;
  disabled?: boolean;
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
  padding = "0",
  textMargin = "0",
  buttonMargin = "0",
  lineHeight = "110%",
  width,
  maxWidth,
  disabled = false,
}) => {
  const styleButton = {
    fontFamily,
    fontWeight:
      fontWeight === "Bold"
        ? 700
        : fontWeight === "Medium"
        ? 500
        : fontWeight === "Regular"
        ? 400
        : 800, // extrabold
    fontSize,
    backgroundColor: backgroundColor ? "#007bff" : "transparent",
    color: color,
    border: border ? "1px solid" : "none",
    borderColor: borderColor === "blue" ? "#386DF4" : "#5C17CD",
    padding: padding,
    borderRadius: "4px",
    cursor: "pointer",
    margin: buttonMargin,
    lineHeight: lineHeight,
    width: width,
    transition: ".3s ease-in-out all",
    height: "fit-content",
    maxWidth: maxWidth,
  } as const;

  return (
    <button style={styleButton} disabled={disabled}>
      <p style={{ margin: textMargin }}>{children}</p>
    </button>
  );
};

export default Button;
