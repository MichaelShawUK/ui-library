import StyledButton from "./StyledButton";
import { motion } from "framer-motion";

interface Props {
  children: string;
  alt?: boolean;
  onClick?: () => void;
}

function Button({ children, alt, onClick }: Props) {
  return (
    <StyledButton
      as={motion.button}
      style={{ originX: 0.5, originY: 0.5 }}
      whileHover={{
        boxShadow: "0px 2px 6px 0px #74a2f7",
      }}
      whileTap={{ scale: 0.96 }}
      $alt={alt}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
