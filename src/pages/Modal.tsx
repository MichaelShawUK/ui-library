import Modal from "../components/Modal/Modal";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

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
      <Card>
        <h2>Modal</h2>
        {showModal ? (
          <Modal onClose={closeModal}>
            <div>
              <Input id="1" type="text" label="Name" />
              <Input id="2" type="text" label="E-mail" />
              <Input id="3" type="text" label="Password" />
              <Input id="4" type="text" label="Confirm Password" />
              <Button alt onClick={closeModal}>
                Cancel
              </Button>
              <span style={{ color: "#fff" }}>......</span>
              <Button>Submit</Button>
            </div>
          </Modal>
        ) : (
          <></>
        )}
        <Button onClick={toggleModal}>Show Form</Button>
      </Card>
    </>
  );
}

export default ModalPage;
