import { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState(false);

  useEffect(() => {
    let lastY = window.pageYOffset; // previous scroll position

    const updateScrollDir = () => {
      const y = window.pageYOffset;

      if (y > lastY) {
        setScrollDir(true);    // scrolling down
      } else if (y < lastY) {
        setScrollDir(false);      // scrolling up
      }

      lastY = y;
    };

    window.addEventListener("scroll", updateScrollDir);

    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return scrollDir;
}
