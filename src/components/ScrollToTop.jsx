import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 👈 top pe le jaata hai
  }, [pathname]);

  return null;
}

export default ScrollToTop;