import StyledInteractiveCard from "./StyledInteractiveCard";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { ElementOrSelector, DOMKeyframesDefinition } from "framer-motion";

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
  const [scope, animate] = useAnimate();

  const [cardAnimation, setCardAnimation] = useState<
    [ElementOrSelector, DOMKeyframesDefinition]
  >([".card", {}]);

  useEffect(() => {
    animate(...cardAnimation);
  });

  function playTapAnimation(event: Event) {
    if (event.target instanceof HTMLElement) {
      const idSelector = `#${event.target.id}`;

      const targetLeft = event.target.offsetLeft;
      const targetTop = event.target.offsetTop;
      const targetWidth = event.target.offsetWidth;
      const targetHeight = event.target.offsetHeight;

      const parent = event.target.parentElement!;
      const parentWidth = parent.offsetWidth;
      const parentHeight = parent.offsetHeight;
      [...parent.children].forEach((child) => child.classList.add("fade"));
      event.target.classList.remove("fade");

      const newX = parentWidth / 2 - targetLeft - targetWidth / 2;
      const newY = parentHeight / 2 - targetTop - targetHeight / 2;

      const xPadding = (parent.firstElementChild as HTMLElement).offsetLeft;
      const yPadding = (parent.firstElementChild as HTMLElement).offsetTop;

      const xScaleFactor = (parentWidth - xPadding * 2) / targetWidth;
      const yScaleFactor = (parentHeight - yPadding * 2) / targetHeight;

      setCardAnimation([
        idSelector,
        { x: newX, y: newY, scaleX: xScaleFactor, scaleY: yScaleFactor },
      ]);
    }
  }

  function resetAnimation(event: Event) {
    if (event.target instanceof HTMLElement) {
      const idSelector = `#${event.target.id}`;

      const children = Array.from(event.target.parentNode!.children);
      children.forEach((child) => child.classList.remove("fade"));

      setCardAnimation([idSelector, { x: 0, y: 0, scaleX: 1, scaleY: 1 }]);
    }
  }

  return (
    <StyledInteractiveCard
      as={motion.div}
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.1 }}
      ref={scope}
    >
      <motion.div
        layout
        id="first"
        className="first card"
        variants={childVariant}
        whileHover={cardHover}
        onTap={playTapAnimation}
        onHoverEnd={resetAnimation}
      >
        1
      </motion.div>
      <motion.div
        layout
        id="second"
        className="second card"
        variants={childVariant}
        whileHover={cardHover}
        onTap={playTapAnimation}
        onHoverEnd={resetAnimation}
      >
        2
      </motion.div>
      <motion.div
        id="third"
        className="third card"
        variants={childVariant}
        whileHover={cardHover}
        onTap={playTapAnimation}
        onHoverEnd={resetAnimation}
      >
        3
      </motion.div>
      <motion.div
        id="fourth"
        className="fourth card"
        variants={childVariant}
        whileHover={cardHover}
        onTap={playTapAnimation}
        onHoverEnd={resetAnimation}
      >
        4
      </motion.div>
    </StyledInteractiveCard>
  );
}

export default InteractiveCard;
