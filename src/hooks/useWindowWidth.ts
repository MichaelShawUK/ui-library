import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  function resizeHandler(event: UIEvent) {
    setWidth((event.target as Window).innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return width;
}

export default useWindowWidth;
