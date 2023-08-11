import React from "react";
import Glossary from "./Glossary/Glossary";
import "./System.css";
import Concepts from "./Concepts/Concepts";
import { Link, Outlet } from "react-router-dom";

function System() {
  return (
    <div className="sys-container">
      <Link to={"slowniczek"}>
        <div className="card big">
          <h1>Słowniczek</h1>
        </div>
      </Link>\
      <Link to={"zasady"}>
        <div className="card big">
          <h1>Zasady</h1>
        </div>
      </Link>\
      <Link to={"make-a-vampire"}>
        <div className="card big">
          <h1>Tworzenie postaci</h1>
        </div>
      </Link>\
      <Outlet />
    </div>
  );
}

export default System;
