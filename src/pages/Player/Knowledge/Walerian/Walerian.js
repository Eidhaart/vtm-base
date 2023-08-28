import React, { useState } from "react";
import "../Knowledge.css";
import Gang from "../Gangs/Gang";
import GangSquare from "../Gangs/GangSquare";
function Walerian() {


  const [openedGang, setOpenedGang] = useState(null);

  const handleGangClick = gangName => {
    if (openedGang === gangName) {
      setOpenedGang(null);
    } else {
      setOpenedGang(gangName);
    }
  };

  const gangData = [
    
    {
      gangName: "Nordycki Bunt",
      origin:
        "Odłam międzynarodowego Hells Angels, ale z nordyckimi korzeniami.",
      work: "Handel bronią, kradzieże motocykli i ochrona.",
      way: "Kluby motocyklowe i bary są ich główną bazą działania.",
      honorableMembers:
        'Erik "Viking" Larsson, górujący nad innymi mężczyzna z długą brodą i miłością do klasycznych motocykli.',
      region:
        "Enskede-Årsta-Vantör. Obszar z tradycjami związanymi z kulturą motocyklową i bardziej robotniczy charakter, oraz Skarrholmen dzielnica robotnicza.",
      img: "NordicRebels"
    }
    
  ];



  return (
    <div className="knowledge-content">
      <div className="societies">
        <h1>Społeczności</h1>
        <div className="gang-wrapper">
          <div className="gang-list">
            {gangData.map(gang =>
              <GangSquare
                key={gang.gangName}
                gangName={gang.gangName}
                onClick={handleGangClick}
                img={gang.img}
              />
            )}
          </div>
          {gangData.map(
            gang =>
              openedGang === gang.gangName &&
              <Gang
                key={gang.gangName}
                isOpen={true}
                img={gang.img}
                {...gang}
              />
          )}
        </div>
      </div>
    </div>
  )
}

export default Walerian