import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const ContentCard = ({ title, desc, link, src }) => {
  const baseUrl = "../../public/assets/";
  return (
    <div className="card">
      <Link to={link}>
        <button>
          <img src={src} alt={title} />
          <h3>
            {title}
          </h3>
          {/* <br></br> */}
          <p>
            {desc}
          </p>
        </button>
      </Link>
    </div>
  );
};

export default ContentCard;
