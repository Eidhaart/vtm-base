import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./Concepts.css";
import items2 from "./Concepts.json";

const ListItem = ({ item, handleItemClick, handleStarClick, isFavorite }) =>
  <div className="concept-list-item">
    <span onClick={() => handleItemClick(item)}>
      {item.title}
    </span>
    <span
      className={`star ${isFavorite ? "favorite" : ""}`}
      onClick={() => handleStarClick(item.title)}
    />
  </div>;

const DisplayComponent = ({ item }) =>
  <div className="concept-display">
    <ReactMarkdown>
      {item.description}
    </ReactMarkdown>
  </div>;

const Concepts = () => {
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [favoriteConcepts, setFavoriteConcepts] = useState(
    () => JSON.parse(window.localStorage.getItem("favoriteConcepts")) || []
  );

  const [displayList, setDisplayList] = useState("Concepts");
  const [dropdownValue, setDropdownValue] = useState("Concepts");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(
    () => {
      window.localStorage.setItem(
        "favoriteConcepts",
        JSON.stringify(favoriteConcepts)
      );
    },
    [favoriteConcepts]
  );

  const handleItemClick = item => {
    setSelectedConcept(item);
  };

  const handleStarClick = title => {
    if (favoriteConcepts.includes(title)) {
      setFavoriteConcepts(prev => prev.filter(i => i !== title));
    } else {
      setFavoriteConcepts(prev => [...prev, title]);
    }
  };

  const handleDropdownChange = event => {
    setDropdownValue(event.target.value);
    setDisplayList(event.target.value);
  };

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  let listItems =
    displayList === "Concepts"
      ? items2
      : items2.filter(item => favoriteConcepts.includes(item.title));

  if (searchTerm !== "") {
    listItems = listItems.filter(
      item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="concept-container">
      <div className="concept-list-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Szukaj..."
          className="concept-searchbar"
        />
        <select
          value={dropdownValue}
          onChange={handleDropdownChange}
          className="concept-dropdown"
        >
          <option value="Concepts">Wszystko</option>
          <option value="Favorites">Ulubione</option>
        </select>
        <div className="concept-list">
          {listItems.map((item, index) =>
            <ListItem
              key={index}
              item={item}
              handleItemClick={handleItemClick}
              handleStarClick={handleStarClick}
              isFavorite={favoriteConcepts.includes(item.title)}
            />
          )}
        </div>
      </div>
      <div className="concept-display-container">
        {selectedConcept && <DisplayComponent item={selectedConcept} />}
      </div>
    </div>
  );
};

export default Concepts;
