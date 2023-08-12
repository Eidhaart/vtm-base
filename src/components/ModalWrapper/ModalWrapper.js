import React, { useState } from "react";
import "./ModalWrapper.css"; // CSS for the modal

function ModalWrapper({ Component, button }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button className="open-button" onClick={() => setShowModal(true)}>
        {button}
      </button>

      {showModal &&
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => setShowModal(false)}
              className="close-button"
            >
              X
            </button>
            <Component />
          </div>
        </div>}
    </div>
  );
}

export default ModalWrapper;
