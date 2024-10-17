import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrollt naar de bovenkant van de pagina
  }, [pathname]);

  return null;
}

export default ScrollToTop;
