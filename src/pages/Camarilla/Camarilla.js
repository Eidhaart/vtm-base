import React from "react";
import "./Camarilla.css";

import CardList from "../../components/Characters/CardList";
import VampireHierarchy from "../../components/Characters/VampireHierarchy";
export default function Camarilla() {
  return (
    <div className="camarilla">
      <div className="camarilla-content" />
      {/* <VampireHierarchy /> */}
      {/* <CardList /> */}

      <h1>Camarilla</h1>
      <img className="camarilla-tree" src={require("./SwedenCamarilla.png")} />
      <div className="camarilla-text">
        <p className="camarilla-desc">
          Struktura Camarilli w Sztokholmie jest dobrze zorganizowana i oparta
          na hierarchii, której celem jest utrzymanie porządku, zachowanie
          Maskarady oraz regulowanie interakcji między Kindredami w mieście. Oto
          ogólny opis struktury Camarilli w Sztokholmie:
        </p>
        <ul>
          <li>
            <div className="list-item">
              <h2>Książe</h2>
              <p>
                Książę: Najwyższym autorytetem w Camarilli w Sztokholmie jest
                Książę. Jest to przywódca miasta, który sprawuje władzę i nadzór
                nad wszystkimi Kindredami. Książę podejmuje decyzje, pilnuje
                przestrzegania prawa Camarilli i utrzymuje porządek w
                społeczności Kindredów.
              </p>
            </div>
          </li>

          <li>
            <div className="list-item">
              <h2>Rada Starszych</h2>
              <p>
                Rada Starszych składa się z doświadczonych członków różnych
                klanów, którzy doradzają Księciu i wspomagają go w podejmowaniu
                decyzji. Starsi mają wpływ na sprawy polityczne i wprowadzają
                regulacje dotyczące życia w społeczności Kindredów.
              </p>
            </div>
          </li>

          <li>
            <div className="list-item">
              <h2>Primogeni</h2>
              <p>
                Primogeni to przedstawiciele różnych klanów w Sztokholmie. Każdy
                klan ma swojego Primogena, który reprezentuje interesy swojego
                klanu w Radzie Starszych i doradza Księciu. Primogeni działają
                jako pośrednicy między Księciem a swoimi klanami, starając się
                zachować równowagę i jedność w społeczności Kindredów. Każdy
                primogen powinien posiadać zastępce zwanego Biczem.
              </p>
            </div>
          </li>

          <li>
            <div className="list-item">
              <h2>Szeryf</h2>
              <p>
                Szeryf pełni funkcję egzekutora prawa Camarilli. Jego zadaniem
                jest ściganie i karanie tych, którzy łamią zasady społeczności
                Kindredów. Szeryf nadzoruje przestrzeganie porządku, ściga
                wrogów Camarilli i egzekwuje sankcje wobec tych, którzy
                stwarzają zagrożenie dla społeczności.
              </p>
            </div>
          </li>
          <li>
            <div className="list-item">
              <h2>Harpy</h2>
              <p>
                Harpy to postacie odpowiedzialne za sprawy towarzyskie i rozgłos
                w społeczności Kindredów. Monitorują plotki, reputację i wpływy
                między członkami Camarilli. Harpy dbają o utrzymanie dobrego
                imienia, rozstrzygają spory towarzyskie i przyznają prestiżowe
                tytuły.
              </p>
            </div>
          </li>

          <li>
            <div className="list-item">
              <h2>Strażnicy</h2>
              <p>
                Strażnicy to członkowie społeczności, którzy mają na celu
                utrzymanie bezpieczeństwa w Sztokholmie. Patrolują obszar
                miasta, pilnują granic i reagują na zagrożenia. Strażnicy są
                odpowiedzialni za ochronę przed niebezpieczeństwami zarówno
                zewnętrznymi, jak i wewnętrznymi.
              </p>
            </div>
          </li>
        </ul>{" "}
      </div>
    </div>
  );
}
