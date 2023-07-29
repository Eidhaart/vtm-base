import React from "react";
import "./Navigation.css";
function Navigation() {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-item">
          <a
            href="https://discord.com/channels/1131601350032113695/1131601351160373290"
            target="_blank"
          >
            Chat
          </a>
        </div>

        <div className="nav-item">
          <a
            href="https://app.roll20.net/editor/setcampaign/15598482"
            target="_blank"
          >
            Dołącz do gry
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
