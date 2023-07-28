import React from "react";
import "./Characters.css";
import { Link } from "react-router-dom";

function Characters() {
  return (
    <div className="player-cards">
      <Link to={"/gracze"}>
        <div className="card big">
          <h1>Players</h1>
        </div>
      </Link>
      <Link to={"/npc"}>
        <div className="card big">
          <h1>NPCs</h1>
        </div>
      </Link>
    </div>
  );
}

export default Characters;
