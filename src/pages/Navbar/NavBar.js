import React from "react";
import "./Navbar.css";
import stockholm from "../../components/assets/stockholm.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="container">
      <img className="logo" src={stockholm} />
      <div className="content">
        
        <Link to={"/home"}>
          <h2>Stockholm By Night</h2>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
