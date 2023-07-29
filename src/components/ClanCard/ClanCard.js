import React from "react";
import "./ClanCard.css";
import Modal from "../Modal/Modal";

const ClanCard = ({ imgSrc, title, description, side, level, longdesc }) => {
  return (
    <div>
      <div className="clanfull-container">
        <div className={`clanCardContainer ${side} ${level}`}>
          <div className="clanImageContainer">
            <img className="clanCardImg" src={imgSrc} alt="card" />
          </div>
          <div className={`clanCardInfo ${side}`}>
            <h3>
              {title}
            </h3>
            <p>
              {description}
            </p>
          </div>
        </div>

        <Modal desc={longdesc} />
      </div>
    </div>
  );
};

export default ClanCard;
