import React from "react";
import "./Hierarchy.css";
import data from "../../components/Characters/NPC.json"

const hierarchyData = {
  upperTier: ["Prince"],
  middleTier: [
    "Seneschal",
    "Sheriff",
    "Primogen Council",
    "Harpy",
    "Keeper of Elysium"
  ],
  lowerTier: [
    "Clan Gangrel",
    "Clan Brujah",
    "Clan Hecata",
    "Clan Malkavian",
    "Clan Toreador",
    "Clan Ventrue",
    "Clan Nosferatu",
    "Clan Banu Haqim",
    "Clan Ravnos",
    "Clan Tzimisce"
  ]
};

const HierarchySquare = ({ name, tier }) =>
  <div className={`hierarchy-square hierarchy-square-${tier}`}>
    <div className="hierarchy-square-name">
      {name}
    </div>
  </div>;

const Hierarchy = () =>
  <div className="hierarchy">
    {Object.keys(hierarchyData).map((tier, index) =>
      <div key={index} className={`hierarchy-tier hierarchy-tier-${tier}`}>
        {hierarchyData[tier].map((role, index) =>
          <HierarchySquare key={index} name={role} tier={tier} />
        )}
      </div>
    )}
  </div>;

export default Hierarchy;
