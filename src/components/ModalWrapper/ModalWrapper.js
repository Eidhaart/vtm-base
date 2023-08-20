import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "./ModalWrapper.css";

function ModalWrapper({ Component, button, userId, unread }) {
  const [showModal, setShowModal] = useState(false);

  // Initial state for modal position
  const initialPosition = {
    x: 0,
    y: 0,
  };

  // State to manage modal's current position
  const [position, setPosition] = useState(initialPosition);

  // When component mounts, get the modal's position from localStorage
  useEffect(() => {
    const savedPosition = localStorage.getItem("modalPosition");
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
  }, []);

  const handleDragStop = (e, data) => {
    const newPosition = {
      x: data.x,
      y: data.y,
    };

    // Set the new position to the state
    setPosition(newPosition);

    // Save the new position to localStorage
    localStorage.setItem("modalPosition", JSON.stringify(newPosition));
  };

  return (
    <div>
      <button
        className={`open-button ${unread ? "unread" : ""}`}
        onClick={() => setShowModal(true)}
      >
        <img src={button} />
      </button>

      {showModal &&
        <div className="modal-overlay">
          <Draggable position={position} onStop={handleDragStop}>
            <div className="modal-content">
              <button
                onClick={() => setShowModal(false)}
                className="close-button"
              >
                X
              </button>
              <Component userId={userId} />
            </div>
          </Draggable>
        </div>}
    </div>
  );
}

export default ModalWrapper;
