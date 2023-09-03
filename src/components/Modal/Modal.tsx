import StyledModal from "./StyledModal";

import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element | JSX.Element[];
  onClose: () => void;
}

function Modal({ children, onClose }: Props) {
  const modalNode = document.getElementById("overlay");

  if (!modalNode) return;

  function escKeyHandler(event: KeyboardEvent): void {
    if (event.key === "Escape") onClose();
  }

  window.addEventListener("keydown", escKeyHandler);
  return (
    <>
      {createPortal(
        <StyledModal>
          <motion.div
            className="modal"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
          >
            <button onClick={onClose} className="close-btn">
              X
            </button>
            {children}
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 0.5] }}
            className="backdrop"
            onClick={onClose}
          ></motion.div>
        </StyledModal>,
        modalNode
      )}
    </>
  );
}

export default Modal;
