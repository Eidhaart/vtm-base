import React from "react";
import "./Gang.css";

function Gang({
  gangName,
  origin,
  work,
  way,
  honorableMembers,
  region,
  isOpen,
  onClick,
  img
}) {
  return (
    <div className="gang-container" onClick={onClick}>
      {isOpen
        ? <div className="gang-card-container">
            <div className="gang-info">
              <h3>
                {gangName}
              </h3>
              <ul>
                <li>
                  <span className="bold">Pochodzenie: </span>
                  {origin}
                </li>
                <li>
                  <span className="bold"> Działalność: </span>
                  {work}
                </li>
                <li>
                  <span className="bold">Sposób działania:</span>
                  {way}
                </li>
                <li>
                  <span className="bold">Strefy wpływów: </span>
                  {region}
                </li>
                <li>
                  <span className="bold">Znani Członkowie: </span>
                  {honorableMembers}
                </li>
              </ul>
            </div>
          </div>
        : <div
            className="gang-image"
            
          />}
    </div>
  );
}

export default Gang;
