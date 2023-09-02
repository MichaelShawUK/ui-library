import Modal from "../components/Modal/Modal";

import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      {showModal && <Modal onClose={closeModal} />}
      <button onClick={toggleModal}>Toggle</button>
    </>
  );
}

export default ModalPage;
