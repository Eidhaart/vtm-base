import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import NotesApp from "./Patryk/NotesApp";
import RenderApp from "./Patryk/RenderApp";
import "./Player.css";
import PhoneApp from "./Patryk/PhoneApp";

function Player() {
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  const handleClearUserId = () => {
    localStorage.removeItem("userId");
    setUserId("");
  };

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

  console.log("In Player - userId:", userId);

  return (
    <div>
      <div className="column">
        {" "}<PhoneApp key={userId} userId={userId} />
      </div>

      <button onClick={handleClearUserId}>Clear User ID</button>
    </div>
  );
}

export default Player;
