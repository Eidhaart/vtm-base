import React from "react";
import CardContainer from "../../components/CardContainer";
import "./Home.css";

const cardData = [
  {
    title: "Strefa Gracza",
    desc: "",
    link: "/gracz",
    src:
      "https://drive.google.com/uc?export=view&id=1MfxdtXudTcni_bIbBtrDVCdq0vNR0pzk"
  },
  {
    title: "Klany",
    desc: "",
    link: "/klany",
    src:
      "https://drive.google.com/uc?export=view&id=1ZDA7VYvVphXAe78z172uZPISgrygkuWc"
  },
  {
    title: "Camarilla",
    desc: "",
    link: "/camarilla",
    src:
      "https://drive.google.com/uc?export=view&id=1udND6YK0CfvKyUax2_Tqiwlm3ttKXoa4"
  },
  {
    title: "Postacie",
    desc: " ",
    link: "/postacie",
    src:
      "https://drive.google.com/uc?export=view&id=1aq6zh5YxxDv739_etRIiJ-q7AGhaxbWI"
  },
  {
    title: "Sztokholm",
    desc: " ",
    link: "/mapy",
    src:
      "https://drive.google.com/uc?export=view&id=12qMm1-TmbLBXpJyX8NPO8PDanI63Mq0l"
  },
  // {
  //   title: "Zagrożenia",
  //   desc: " ",
  //   link: "/zagrozenia",
  //   src:
  //     "https://drive.google.com/uc?export=view&id=1NvFO9uVHNqCvQdGb0pddDBDGhnN0KykR"
  // },
  // {
  //   title: "System",
  //   desc: "",
  //   link: "/zasady",
  //   src:
  //     "https://drive.google.com/uc?export=view&id=1ceS7nJDS35uYq7DnIpJMzsluLCrEkJAx"
  // },
  {
    title: "Podręcznik",
    desc: "",
    link: "/podrecznik",
    src:
      "https://drive.google.com/uc?export=view&id=1MfxdtXudTcni_bIbBtrDVCdq0vNR0pzk"
  },

  // Add more cards with different values here
];

function Home() {
  return (
    <div className="home">
      <CardContainer cardData={cardData} />
    </div>
  );
}

export default Home;
