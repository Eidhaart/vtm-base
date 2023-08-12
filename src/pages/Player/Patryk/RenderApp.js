import React, { useState, useEffect } from "react";
import "./RenderApp.css";
import NPC from "../../Characters/NPC/NPC";
import Players from "../../Characters/Players/Players";
import Dangers from "../../Dangers/Dangers";
import Baza from "../../Baza/Baza";
import ClansBetter from "../../Clans/ClansBetter";
import System from "../../System/System";

const componentsList = [
  { name: "", component: "" },
  { name: "ClansBetter", component: "ClansBetter" },
  { name: "NPC", component: "NPC" },
  { name: "Zagrozenia", component: "Dangers" },
  { name: "System", component: "System" },
  { name: "Gracze", component: "Players" }
];

function RenderComponent({ component }) {
  switch (component) {
    case "ClansBetter":
      return <ClansBetter />;
    case "NPC":
      return <NPC />;

    default:
      return null;
  }
}

function Window({ windowId }) {
  const [selectedComponent, setSelectedComponent] = useState(
    localStorage.getItem(windowId) || ""
  );

  useEffect(
    () => {
      localStorage.setItem(windowId, selectedComponent);
    },
    [selectedComponent, windowId]
  );

  return (
    <div className="render-window">
      <select
        value={selectedComponent}
        onChange={e => setSelectedComponent(e.target.value)}
      >
        {componentsList.map((item, index) =>
          <option key={index} value={item.component}>
            {item.name}
          </option>
        )}
      </select>
      <div>
        <RenderComponent component={selectedComponent} />
      </div>
    </div>
  );
}

function RenderApp() {
  const savedView = localStorage.getItem("isGridView");
  const [isGridView, setIsGridView] = useState(
    savedView === null ? true : JSON.parse(savedView)
  );

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  useEffect(
    () => {
      localStorage.setItem("isGridView", JSON.stringify(isGridView));
    },
    [isGridView]
  );

  return (
    <div className="render-app">
      <button onClick={toggleView} className="switch-button">
        {isGridView ? "Widok Kolumny" : "Widok Kafelek"}
      </button>
      <div className={isGridView ? "grid-view" : "column-view"}>
        <Window windowId="window1" />
        <Window windowId="window2" />
        <Window windowId="window3" />
        <Window windowId="window4" />
      </div>
    </div>
  );
}

export default RenderApp;
