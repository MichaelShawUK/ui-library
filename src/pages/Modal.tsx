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
            <Input id="1" type="text" label="Name" autofocus />
            <Input id="2" type="text" label="E-mail" />
            <Input id="3" type="text" label="Password" />
            <Input id="4" type="text" label="Confirm Password" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "row-reverse",
              }}
            >
              <Button>Submit</Button>
              <span style={{ color: "#fff" }}>......</span>
              <Button alt onClick={closeModal}>
                Cancel
              </Button>
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
