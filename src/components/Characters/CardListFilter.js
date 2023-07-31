import React, { useState } from "react";
import data from "./NPC.json";
import Card from "./CharCard";

const CardList = () => {
  const [clanFilter, setClanFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  // find the unique clans and levels in your data
  const clans = [...new Set(data.map(item => item.clan))];
  const levels = [...new Set(data.map(item => item.level))];

  return (
    <div>
      <label htmlFor="clan-filter">Filter by clan:</label>
      <select
        id="clan-filter"
        value={clanFilter}
        onChange={e => setClanFilter(e.target.value)}
      >
        <option value="">All</option>
        {clans.map(clan =>
          <option key={clan} value={clan}>
            {clan}
          </option>
        )}
      </select>

      <label htmlFor="level-filter">Filter by level:</label>
      <select
        id="level-filter"
        value={levelFilter}
        onChange={e => setLevelFilter(e.target.value)}
      >
        <option value="">All</option>
        {levels.map(level =>
          <option key={level} value={level}>
            {level}
          </option>
        )}
      </select>

      {data
        .filter(
          item =>
            (clanFilter ? item.clan === clanFilter : true) &&
            (levelFilter ? item.level === levelFilter : true)
        )
        .map((character, index) => <Card key={index} character={character} />)}
    </div>
  );
};

export default CardList;
