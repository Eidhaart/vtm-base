import React from "react";
import Login from "./Login";
import NotesApp from "./Patryk/NotesApp";
import RenderApp from "./Patryk/RenderApp";

function Player() {
  return (
    <div>
      {/* <Login /> */}
      <NotesApp />
      <RenderApp />
    </div>
  );
}

export default Player;
