import React from "react";
import data from "./NPC.json";
import Card from "./CharCard";
import "./CardList.css" 

const CardList = ({ levelFilter, clanFilter }) => {
  return (
    <div className="char-card-list">
      {data
        .filter(
          item =>
            (!levelFilter || item.level === levelFilter) &&
            (!clanFilter || item.clan === clanFilter)
        )
        .map((character, index) => <Card key={index} character={character} />)}
    </div>
  );
};

export default CardList;
