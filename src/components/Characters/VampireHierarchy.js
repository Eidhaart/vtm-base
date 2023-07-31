import React from "react";
import CardList from "./CardList";

const VampireHierarchy = () => {
  const roles = [
    "prince",
    "seneschal",
    "sheriff",
    "Primogen Council",
    "Harpy",
    "Keeper of Elysium"
  ];
  const clans = [
    "toreador",
    "brujah",
    "ventrue",
    "malkavian",
    "nosferatu",
    "gangrel",
    "tremere",
    "Caitiff"
  ]; // add all your clans here

  return (
    <div>
      <h2>
        {roles[0]}
      </h2>
      <CardList levelFilter={roles[0]} className="char-row" />

      {roles.slice(1).map(role =>
        <React.Fragment key={role}>
          <h2>
            {role}
          </h2>
          <CardList levelFilter={role} className="char-row" />
        </React.Fragment>
      )}

      {clans.map(clan =>
        <React.Fragment key={clan}>
          <h2>
            {clan} Primogen
          </h2>
          <CardList levelFilter="primogen" clanFilter={clan} className="char-row" />
        </React.Fragment>
      )}
    </div>
  );
};

export default VampireHierarchy;
