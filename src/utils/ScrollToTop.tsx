import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // можно убрать, если не нужен эффект плавности
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
