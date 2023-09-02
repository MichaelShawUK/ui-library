import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import StyledNav from "./StyledNav";

const variants = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

function Nav() {
  return (
    <StyledNav
      as={motion.nav}
      transition={{ staggerChildren: 0.2 }}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={variants}>
        <NavLink to="/">HOME</NavLink>
      </motion.div>
      <motion.div variants={variants}>
        <NavLink to="/buttons">BUTTONS</NavLink>
      </motion.div>
      <motion.div variants={variants}>
        <NavLink to="/inputs">INPUTS</NavLink>
      </motion.div>
    </StyledNav>
  );
}

export default Nav;
