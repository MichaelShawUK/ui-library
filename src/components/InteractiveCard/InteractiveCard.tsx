import StyledInteractiveCard from "./StyledInteractiveCard";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

const childVariant = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: spring },
};

const cardHover = {
  scale: 1.03,
};

function InteractiveCard() {
  return (
    <StyledInteractiveCard
      as={motion.div}
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.div
        className="card"
        variants={childVariant}
        whileHover={cardHover}
      >
        1
      </motion.div>
      <motion.div
        className="card"
        variants={childVariant}
        whileHover={cardHover}
      >
        2
      </motion.div>
      <motion.div
        className="card"
        variants={childVariant}
        whileHover={cardHover}
      >
        3
      </motion.div>
      <motion.div
        className="card"
        variants={childVariant}
        whileHover={cardHover}
      >
        4
      </motion.div>
    </StyledInteractiveCard>
  );
}

export default InteractiveCard;
