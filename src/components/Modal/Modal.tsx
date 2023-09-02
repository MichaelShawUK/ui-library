import StyledModal from "./StyledModal";
import Button from "../Button/Button";

import { createPortal } from "react-dom";

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
          <div className="modal">
            <button onClick={onClose} className="close-btn">
              X
            </button>
            <p>Modal</p>
            <Button onClick={onClose}>Close</Button>
          </div>
          <div className="backdrop" onClick={onClose}></div>
        </StyledModal>,
        modalNode
      )}
    </>
  );
}

export default Modal;
