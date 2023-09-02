import StyledModal from "./StyledModal";
import Button from "../Button/Button";

import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface Props {
  onClose: () => void;
}

function Modal({ onClose }: Props) {
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
            <p>Modal</p>
            <Button onClick={onClose}>Close</Button>
          </motion.div>
          <div className="backdrop" onClick={onClose}></div>
        </StyledModal>,
        modalNode
      )}
    </>
  );
}

export default Modal;
