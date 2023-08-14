import React, { useState } from "react";
import "../Knowledge.css";
import Gang from "../Gangs/Gang";
import GangSquare from "../Gangs/GangSquare";
function Sebastian() {
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
      gangName: "Los Navegantes",
      origin: "Katalonia, Hiszpania.",
      work: "Głównie przemyt, handel bronią i handel ludźmi.",
      way:
        "Działają przy wykorzystaniu obszernej sieci żeglugowej pomiędzy Barceloną a Sztokholmem. Mają silne powiązania z dokami, co pozwala im dyskretnie przewozić towary. Często używają legalnych firm jako przykrywki.",
      honorableMembers:
        "Ich lider, Rafael Torres, to charyzmatyczna osoba mówiąca z mocnym katalońskim akcentem.",
      region:
        "Södermalm, zwłaszcza obszar w pobliżu portu. Ta dzielnica ma dostęp do wody, co ułatwia przemyt.",
      img: "Nevegantes"
    },
    {
      gangName: "Kartel Los Sombras",
      origin: "Północny Meksyk",
      work:
        "Handel narkotykami, pranie brudnych pieniędzy i okazjonalne kontrakty na zabójstwa.",
      way:
        "Silnie polegają na swoich powiązaniach z podziemnymi walkami na ringach i ciemną stroną internetu.",
      honorableMembers:
        'Maria "La Muerte" Gonzales, budząca grozę liderka znana ze swojej bezwzględności.',
      region: "Södermalm",
      img: "LasSombras"
    },
    {
      gangName: "Nocne Smoki (Yakuza)",
      origin: "Tokio, Japonia.",
      work: "Nielegalny hazard, wymuszenia i handel ludźmi.",
      way:
        "Prowadzą różne podziemne kluby w Sztokholmie, które służą jako przykrywka dla ich nielegalnych działań.",
      honorableMembers:
        "Hiroshi Takada, elegancko ubrany mężczyzna z tradycyjnymi tatuażami Yakuzy pokrywającymi jego plecy.",
      region:
        "Östermalm. Jako że jest to jedna z bardziej zamożnych dzielnic, podziemne kluby Yakuzy działają, zwłaszcza w ekskluzywnych lokalach.",
      img: "MidnightDragons"
    },
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
    },
    {
      gangName: "Czerwona pięść",
      origin: "Moskwa, Rosja.",
      work: "Pranie brudnych pieniędzy, cyberprzestępczość i ochrona.",
      way:
        "Często działają poprzez kluby nocne i mają sieć hakerów zarządzających ich działalnością w internecie.",
      honorableMembers:
        "Dmitry Volkov, stoicki mężczyzna z głębokimi powiązaniami z rosyjską oligarchią.",
      region:
        "Norrmalm i Vasastan. Obszar bardziej centrum z wieloma klubami nocnymi, barakami i innymi punktami, które mogą być używane do prowadzenia nielegalnych operacji.",
      img: "RedFist"
    }
  ];

  return (
    <div>
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
            <Gang key={gang.gangName} isOpen={true} img={gang.img} {...gang} />
        )}
      </div>
    </div>
  );
}

export default Sebastian;
