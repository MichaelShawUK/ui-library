import StyledSlider from "./StyledSlider";
import { motion } from "framer-motion";

function Slider({ lightMode }: { lightMode: boolean }) {
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  return (
    <StyledSlider $lightMode={lightMode}>
      <motion.div layout className="slider" transition={spring}></motion.div>
    </StyledSlider>
  );
}

export default Slider;
