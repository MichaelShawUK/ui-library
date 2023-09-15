import { useState, useEffect } from "react";

type ViewMode = "MOBILE" | "TABLET" | "DESKTOP";

function getViewMode(width: number): ViewMode {
  if (width < 480) {
    return "MOBILE";
  } else if (width < 768) {
    return "TABLET";
  } else {
    return "DESKTOP";
  }
}

function useViewMode() {
  const initialViewMode = getViewMode(window.innerWidth);
  const [viewMode, setViewMode] = useState(initialViewMode);

  function resizeHandler(event: UIEvent) {
    const currentWidth = (event.target as Window).innerWidth;
    setViewMode(getViewMode(currentWidth));
  }

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return viewMode;
}

export default useViewMode;
