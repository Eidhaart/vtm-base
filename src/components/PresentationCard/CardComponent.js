import React from "react";
import "./CardComponent.css";
import Modal from "../Modal/Modal";

const CardComponent = ({
  imgSrc,
  title,
  description,
  side,
  level,
  cornerImgSrc,
  modal
}) => {
  return (
    <div className="full-container">
      <div className={`cardContainer ${side} ${level}`}>
        <div className="imageContainer">
          <img className="cardImg" src={imgSrc} alt="card" />
          <img
            className={
              cornerImgSrc == "" ? "cornerImg none" : `cornerImg ${side}`
            }
            src={cornerImgSrc}
            alt="corner"
          />
        </div>
        <div className={`cardInfo ${side}`}>
          <h3>
            {title}
          </h3>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
