import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import NotesApp from "./Patryk/NotesApp";
import RenderApp from "./Patryk/RenderApp";
import "./Player.css";
import PhoneApp from "./Patryk/PhoneApp";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";
import Walerian from "./Knowledge/Walerian/Walerian";
import Godrick from "./Knowledge/Godrick/Godrick";
import Sebastian from "./Knowledge/Sebastian/Sebastian";
import Mary from "./Knowledge/Mary/Mary";
import Allan from "./Knowledge/Allan/Allan";
import Backpack from "./Patryk/Backpack";

function Player() {
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  const handleClearUserId = () => {
    localStorage.removeItem("userId");
    setUserId("");
  };

  function CharPage({ userId }) {
    switch (userId) {
      case "walerian":
        return <Walerian />;
      case "sebastian":
        return <Sebastian />;
      case "godrick":
        return <Godrick />;
      case "mary":
        return <Mary />;
      case "allan":
        return <Allan />;
      default:
        return null;
    }
  }

  // On component mount, if no userId is in localStorage, prompt the user for it.
  useEffect(
    () => {
      if (!userId) {
        const promptedUserId = prompt("Please enter your User ID:");
        if (promptedUserId) {
          localStorage.setItem("userId", promptedUserId);
          setUserId(promptedUserId);
        }
      }
    },
    [userId]
  );

  function SampleComponent() {
    return <PhoneApp key={userId} userId={userId} />;
  }

  console.log("In Player - userId:", userId);

  return (
    <div className="player-container">
      <span className="character-name">
        {userId}
      </span>

      <div className="row-menu">
        <div className="column">
          <ModalWrapper
            className="modal-wrapper-cont"
            Component={Backpack}
            button={"🎒"}
            userId={userId}
          />
        </div>
        <div className="column">
          <ModalWrapper
            className="modal-wrapper-cont"
            Component={SampleComponent}
            button={"📱"}
          />
        </div>

        {/* Add more columns/items as needed */}
      </div>

      <div className="player-apps">
        <CharPage userId={userId} />
      </div>

      <button className="clear-id" onClick={handleClearUserId}>
        Clear User ID
      </button>
    </div>
  );
}

export default Player;
