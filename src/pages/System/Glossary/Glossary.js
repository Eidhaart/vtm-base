import React, { useState, useEffect } from "react";
import styles from "./Glossary.module.css";
import glossaryData from "./glossaryData.json"; // import JSON data

function Glossary() {
  const [glossary, setGlossary] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setGlossary(glossaryData);
  }, []);

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles["search-input"]}
        placeholder="Szukaj..."
        value={search}
        onChange={e => setSearch(e.target.value.toLowerCase())}
      />
      {glossary
        .filter(item => item.term.toLowerCase().includes(search))
        .map((item, index) =>
          <div key={index} className={styles["glossary-item"]}>
            <h2 className={styles.term}>
              {item.term}
            </h2>
            <p className={styles.definition}>
              {item.definition}
            </p>
          </div>
        )}
    </div>
  );
}

export default Glossary;
