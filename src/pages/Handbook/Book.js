import React from "react";
import Handbook from "./handbook.pdf";
import "./Handbook.css";

function Book() {
  return (
    <div className="handbook">
      <object className="pdf" id="handbook" data={Handbook} />
    </div>
  );
}

export default Book;
