import DarkMode from "./DarkMode";
import LightMode from "./LightMode";
import Slider from "./Slider";
import StyledThemeSlider from "./StyledThemeSlider";

import { useState } from "react";

function ThemeSlider() {
  const [lightMode, setLightMode] = useState(true);

  function themeHandler() {
    setLightMode((previous) => !previous);
  }

  return (
    <StyledThemeSlider onClick={themeHandler} $lightMode={lightMode}>
      <DarkMode colour={lightMode ? "#fff" : "#000"} />
      <Slider lightMode={lightMode} />
      <LightMode colour={lightMode ? "#fff" : "#000"} />
    </StyledThemeSlider>
  );
}

export default ThemeSlider;
