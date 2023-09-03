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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button onClick={onClose} className="close-btn">
              X
            </button>
            {children}
          </motion.div>
          <div className="backdrop" onClick={onClose}></div>
        </StyledModal>,
        modalNode
      )}
    </>
  );
}

export default Modal;
