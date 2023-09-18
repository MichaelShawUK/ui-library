import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import StyledDropDownMenu from "./StyledDropDownMenu";

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  const ulVariants = {
    closed: { scaleY: 0 },
    open: { scaleY: 1 },
  };

  const liVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 },
  };

  return (
    <StyledDropDownMenu
      as={motion.div}
      animate={isOpen ? "open" : "closed"}
      onClick={toggleMenu}
    >
      <motion.div className="menu-btn" whileTap={{ scale: 0.97 }}>
        <span>Menu Title</span>
        <motion.span
          className="menu-icon"
          variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
        >
          &#9662;
        </motion.span>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="list"
            style={{ originY: "top" }}
            variants={ulVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ when: "beforeChildren" }}
          >
            <motion.li variants={liVariants}>Item 1</motion.li>
            <motion.li variants={liVariants}>Item 2</motion.li>
            <motion.li variants={liVariants}>Item 3</motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </StyledDropDownMenu>
  );
}

export default DropDownMenu;
