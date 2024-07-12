import React, { useState } from "react";
import { ModalUi } from "../UI/modal/ModalUi";

export const Example = () => {
  const [showModal, setShowModal] = useState(false);

  const openAndCloseModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <h1>buy a mik</h1>
      <button onClick={openAndCloseModal}>delete</button>

      <ModalUi isOpen={showModal} onClose={openAndCloseModal}>
        <h2>вы точно хотите добавить</h2>
        <button>yes</button>
        <button onClick={openAndCloseModal}>no</button>
      </ModalUi>
    </div>
  );
};
