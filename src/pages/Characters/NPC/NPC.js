import React from "react";
import CardComponent from "../../../components/PresentationCard/CardComponent";
import "./NPC.css";
import data from "../../../components/Characters/NPC.json";

function NPC() {
  {
    data.map(item =>
      <CardComponent
        cornerImgSrc={item.cornerImg}
        level={item.level}
        imgSrc={item.imgSrc}
        title={item.title}
        description={item.description}
        side={item.side}
      />
    );
  }

  const titleToSortBy = "";

  const sortedDataphrase = [...data].sort((a, b) => {
    if (a.clan === titleToSortBy) {
      return -1; // a comes first
    } else if (b.title === titleToSortBy) {
      return 1; // b comes first
    } else {
      return a.clan.localeCompare(b.clan); // Default sorting
    }
  });
  //Sorting by clan name

  const sortedDatatitle = [...data].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  //sorting alphabetically by name

  const sortedDataclan = [...data].sort((a, b) =>
    a.cornerImg.localeCompare(b.cornerImg)
  );
  //sorting by clan image {not sure if makes sence}

  let lastSide = "right";

  return (
    <div>
      <div className="npc-container">
        {data.map((item, index) => {
          const currentSide = lastSide === "left" ? "right" : "left";
          lastSide = currentSide;

          return (
            <CardComponent
              cornerImgSrc={item.cornerImg}
              level={item.level}
              imgSrc={item.imgSrc}
              title={item.title + "" + " " + "(" + item.level + ")"}
              description={item.description}
              side={currentSide}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NPC;
