import React from "react";
import "./SimpleAccordion.css";

function SimpleAccordion({ title, desc }) {
  return (
    <div>
      <details>
        <summary>
          {title}
        </summary>
        <p>
          {desc}
        </p>
      </details>
    </div>
  );
}

export default SimpleAccordion;
