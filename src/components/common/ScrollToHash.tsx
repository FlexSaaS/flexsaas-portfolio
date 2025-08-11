import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // On path or hash change, try to scroll to the element
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // In case the section renders a tick later (lazy/async)
        const t = setTimeout(() => {
          const el2 = document.getElementById(id);
          if (el2) el2.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 60);
        return () => clearTimeout(t);
      }
    } else {
      // No hash: scroll to top on route change
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return null;
}
