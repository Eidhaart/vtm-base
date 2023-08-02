import React from "react";
import Glossary from "./Glossary/Glossary";

import { Link, Outlet } from "react-router-dom";

function System() {
  return (
    <div className="/system-cards">
      <Link to={"glossary"}>
        <div className="card big">
          <h1>Słowniczek</h1>
        </div>
      </Link>
      
      <Outlet />
    </div>
  );
}

export default System;
