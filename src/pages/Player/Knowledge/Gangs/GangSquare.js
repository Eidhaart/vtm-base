import React from "react";
import LasSombras from "./LasSombras.png";
import MidnightDragons from "./MidnightDragons.png";
import Nevegantes from "./Nevegantes.png";
import NordicRebels from "./NordicRebels.png";
import RedFist from "./RedFist.png";
import LostHighway from "./LostHighway.png";

function GangSquare({ img, gangName, onClick }) {
  function imgDisplay() {
    switch (img) {
      case "LasSombras":
        return LasSombras;
      case "MidnightDragons":
        return MidnightDragons;
      case "Nevegantes":
        return Nevegantes;
      case "NordicRebels":
        return NordicRebels;
      case "RedFist":
        return RedFist;
      case "LostHighway":
        return LostHighway;
      default:
        return null;
    }
  }

  return (
    <div className="gang-square" onClick={() => onClick(gangName)}>
      <img className="gang-square-img" src={imgDisplay()} alt="Gang Image" />
    </div>
  );
}

export default GangSquare;
