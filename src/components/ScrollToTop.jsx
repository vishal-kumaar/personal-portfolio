import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  return null;
}
