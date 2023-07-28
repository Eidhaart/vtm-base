import React from "react";
import "./CardComponent.css";

const CardComponent = ({
  imgSrc,
  title,
  description,
  side,
  level,
  cornerImgSrc
}) => {
  return (
    <div className={`cardContainer ${side} ${level}`}>
      <div className="imageContainer">
        <img className="cardImg" src={imgSrc} alt="card" />
        <img className={`cornerImg ${side}`} src={cornerImgSrc} alt="corner" />
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
  );
};

export default CardComponent;
