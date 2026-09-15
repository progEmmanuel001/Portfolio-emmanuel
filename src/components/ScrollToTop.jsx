import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Client-side navigation keeps the old scroll position; this resets it.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
