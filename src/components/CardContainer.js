// CardContainer.js
import React from "react";
import Card from "./ContentCard";
import "./Card.css";

const CardContainer = ({ cardData }) => {
  return (
    <div className="card-container">
      {cardData.map((card, index) =>
        <Card
          key={index}
          title={card.title}
          desc={card.desc}
          src={card.src}
          link={card.link}
        />
      )}
    </div>
  );
};

export default CardContainer;
