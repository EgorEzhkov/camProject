import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Убедимся, что scrollRestoration включён
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }

    // Прокручиваем вверх только при PUSH-навигации (новый переход)
    if (navigationType === "PUSH") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // при POP (назад/вперёд) — браузер сам восстановит позицию
  }, [location.pathname, navigationType]);

  return null;
};

export default ScrollManager;
