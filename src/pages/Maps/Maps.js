import React from "react";
import { useState } from "react";
import "./Maps.css";
import Sztokholm from "./Sztokholm.jpg";
import Dzielnice from "./Dzielnice.png";
import LoadingBar from "react-top-loading-bar";
import SimpleAccordion from "../../components/AccordionComp/SimpleAccordion";
import Modal from "../../components/Modal/Modal";

function Maps() {
  const [imgSrc, setImgSrc] = useState(Sztokholm);

  return (
    <div className="maps">
      <h1>Sztokholm</h1>
      <div>
        <img className="map" src={imgSrc} alt="Your alt text" />
      </div>
      <div className="buttons">
        <div className="butt">
          <button onClick={() => setImgSrc(Sztokholm)}>Sztokholm</button>
        </div>
        <div className="butt">
          <button onClick={() => setImgSrc(Dzielnice)}>Dzielnice</button>
        </div>
      </div>
      <div className="accord">
        <SimpleAccordion
          title={"Dzielnice Sztokholmu"}
          desc={
            <div className="accord-container">
              <div className="accord-column">
                <ul>
                  <li>
                    <h3>Södermalm</h3>
                    <span>
                      Położony na wyspie, Södermalm oferuje malownicze widoki na
                      Stary Miasto i wybrzeże. Charakteryzuje się urokliwymi,
                      kolorowymi kamienicami, wąskimi uliczkami i urokliwymi
                      skwerami. Jest to popularna dzielnica artystyczna, pełna
                      kawiarni, butików i galerii sztuki.
                    </span>
                  </li>
                  <li>
                    <h3>Hägersten-Liljeholmen</h3>
                    <span>
                      Ta dzielnica jest położona na zachodnim brzegu jeziora
                      Mälaren. Można tu znaleźć nowoczesną architekturę, w tym
                      wieżowce, które zapewniają panoramiczne widoki na jezioro
                      i okolicę. Wokół jeziora znajdują się również urocze
                      parki, gdzie można spacerować i odpocząć od miejskiego
                      zgiełku.
                    </span>
                  </li>
                  <li>
                    <h3>Farsta</h3>
                    <span>
                      Farsta to spokojna dzielnica położona na południe od
                      centrum miasta. Charakteryzuje się zielonymi obszarami
                      rekreacyjnymi i dużymi terenami zieleni. Wokół Farsta
                      znajdują się piękne lasy i jeziora, które są idealne na
                      spacery i relaks na świeżym powietrzu.
                    </span>
                  </li>
                  <li>
                    <h3>Skarpnäck</h3>
                    <span>
                      Skarpnäck to obszar położony na południe od Södermalm.
                      Jest to mieszanka nowoczesnej architektury i urokliwych
                      zielonych terenów. Dzielnica oferuje wiele parków, jezior
                      i rezerwatów przyrody, które są idealne dla miłośników
                      przyrody i aktywnego trybu życia.
                    </span>
                  </li>
                  <li>
                    <h3>Skärholmen</h3>
                    <span>
                      Skärholmen to wielokulturowa dzielnica, która jest jednym
                      z największych centrów handlowych w Sztokholmie.
                      Charakteryzuje się nowoczesną architekturą, a także
                      różnorodnością restauracji i sklepów. Skärholmen oferuje
                      również piękne widoki na okoliczne jeziora i parki.
                    </span>
                  </li>
                  <li>
                    <h3>Östermalm</h3>
                    <span>
                      Östermalm jest luksusową dzielnicą, znana z eleganckich
                      apartamentów, ekskluzywnych sklepów i modnych restauracji.
                      Charakteryzuje się pięknymi budynkami z XIX wieku,
                      szerokimi alejami i bujnymi parkami. Östermalm jest także
                      popularnym miejscem spotkań dla mieszkańców i turystów.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="accord-column">
                <ul>
                  <li>
                    <h3>Norrmalm</h3>
                    <span>
                      Norrmalm to centrum biznesowe i handlowe Sztokholmu.
                      Charakteryzuje się nowoczesną architekturą, dużymi
                      drapaczami chmur, sklepami, restauracjami i hotelami.
                      Dzielnica oferuje również wiele zabytków, takich jak
                      Katedra Sztokholmska i Teatr Królewski.
                    </span>
                  </li>
                  <li>
                    <h3>Älvsjö</h3>
                    <span>
                      Älvsjö to dzielnica położona na południe od centrum
                      miasta. Znana jest głównie ze swojego międzynarodowego
                      centrum wystawowego - Stockholmsmässan. Miejsce to
                      przyciąga wiele targów, wystaw i wydarzeń kulturalnych.
                    </span>
                  </li>
                  <li>
                    <h3>Enskede-Årsta-Vantör</h3>
                    <span>
                      Ta dzielnica składa się z trzech obszarów mieszkaniowych.
                      Charakteryzuje się różnorodnością architektoniczną, od
                      tradycyjnych domów jednorodzinnych po nowoczesne
                      apartamentowce. W okolicy znajdują się również obszary
                      zielone, parki i ścieżki rowerowe.
                    </span>
                  </li>
                  <li>
                    <h3>Kungsholmen</h3>
                    <span>
                      Kungsholmen to wyspa położona na jeziorze Mälaren.
                      Charakteryzuje się urokliwymi widokami na wodę i
                      wspaniałymi terenami rekreacyjnymi. Na Kungsholmen
                      znajdują się również historyczne budynki, takie jak Ratusz
                      Kungsholmen i Kyrka Stadshuset.
                    </span>
                  </li>
                  <li>
                    <h3>Bromma</h3>
                    <span>
                      Bromma to dzielnica położona na zachodnich przedmieściach
                      Sztokholmu. Charakteryzuje się przede wszystkim dużymi
                      obszarami zieleni, parkami i lasami. To idealne miejsce
                      dla miłośników przyrody, którzy szukają ciszy i spokoju.
                    </span>
                  </li>
                  <li>
                    <h3>Spånga-Tensta</h3>
                    <span>
                      Ta dzielnica jest położona na północny zachód od centrum
                      miasta. Charakteryzuje się różnorodnością kulturową i
                      architekturą. Spånga-Tensta ma wiele dużych obszarów
                      zielonych, parków i terenów rekreacyjnych.
                    </span>
                  </li>
                  <li>
                    <h3>Hässelby-Vällingby</h3>
                    <span>
                      Hässelby-Vällingby to spokojna dzielnica położona na
                      północno-zachodnich przedmieściach Sztokholmu.
                      Charakteryzuje się dużymi obszarami zieleni, jeziorami i
                      parkami. Jest to idealne miejsce dla rodzin i osób
                      szukających ucieczki od miejskiego zgiełku.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </div>

      <div className="dzielnice">
        <div className="dzielnice-row" />
        <div />
      </div>
      <div>
        <img className="map" src={require("./op3.jpg")} />
      </div>
      <div className="accord">
        <SimpleAccordion
          title={"Stare Miasto"}
          desc={
            <div className="accord-container">
              <div className="accord-column">
                <ul>
                  <li>
                    <h3>Safehouse</h3>
                    <span>
                      Podziemne i odosobnione części Pałacu Tassin zapewniają
                      doskonałe warunki dla wampirów ze Sztokholmu, zwłaszcza
                      dla klanu Ventrue. Ze względu na zamiłowanie Ventrue do
                      polityki i strategii, część tych zamkniętych sekcji jest
                      przeznaczona na izby rady. W tych miejscach Ventrue i inni
                      wampirzy dostojnicy mogą gromadzić się w sekrecie, z dala
                      od wścibskich śmiertelników.
                      <br />
                      <br />
                      Podziemna sieć jest wyposażona w szereg tuneli
                      prowadzących do różnych części miasta, działając jako
                      awaryjne trasy ewakuacyjne w przypadku najazdu lub
                      oblężenia pałacu.
                      <br />
                      <br />
                      Pałac ma prywatny salon dla "Blood Dolls" lub "Naczyń" -
                      ludzi, którzy dobrowolnie pozwalają wampirom z nich się
                      karmić. Ten dyskretny obszar zapewnia wampirom możliwość
                      karmienia bez ryzyka ujawnienia się i zapewnia
                      kontrolowane środowisko do monitorowania zdrowia i
                      bezpieczeństwa tych osób.
                    </span>
                  </li>
                  <li>
                    <h3>Dom Klanu Ventrue</h3>
                    <span>
                      Dom Rycerstwa jest imponującym barokowym budynkiem, który
                      niegdyś był miejscem spotkań szwedzkiej szlachty, a teraz
                      służy jako archiwum genealogiczne. Jego bogata historia,
                      znakomite archiwalne zasoby i reprezentacyjne
                      pomieszczenia czynią go idealnym miejscem dla klanu
                      Ventrue.
                      <br />
                      <br />
                    </span>
                  </li>
                  <li>
                    <h3>"Aifur"</h3>
                    <span>
                      popularny bar i restauracja w historycznej dzielnicy Gamla
                      Stan w Sztokholmie, znany z przepięknego wystroju
                      inspirowanego epoką wikingów. Jego unikalne cechy czynią
                      go idealnym miejscem dla wampirów ze Sztokholmu
                      <br />
                      <br />
                      Bar zapewnia ciemne, kameralne środowisko, które jest
                      idealne dla wampirów, którzy wolą działać poza światłem
                      słonecznym. Dodatkowo, głośna muzyka i gwar tłumu mogą
                      pomóc zatuszować wszelkie niewłaściwe działania.
                      <Modal
                        desc={
                          <div>
                            Na przestrzeni wieków, "Aifur" w Sztokholmie nie
                            tylko służył jako karczma dla śmiertelników, ale
                            także jako tajemnicze miejsce spotkań dla Nocnych
                            Dzieci. Według plotek i legend przekazywanych w
                            cieniu nocy, jego właściciel, zwany Einar
                            Hjalmarsson, jest jednym z najstarszych wampirów w
                            Sztokholmie. Einar, członek dzikiego i
                            nieokiełznanego klanu Gangrel, został przekształcony
                            w czasach wikingów, a jego nieśmiertelność pozwoliła
                            mu przetrwać stulecia, obserwując zmiany, jakie
                            zachodziły w mieście.
                            <br />
                            <br />
                            Zgodnie z legendami, Einar był kiedyś wojownikiem,
                            który brał udział w licznych bitwach i wyprawach, co
                            tłumaczy jego zamiłowanie do dzikiej, nieokiełzanej
                            natury swojego klanu. Jego przeobrażenie w wampira,
                            jak głosi legenda, było wynikiem starcia z
                            tajemniczym wrogiem, który okazał się być potężnym
                            Gangrelem.
                            <br />
                            <br />
                            Einar, teraz wieczny i posiadający nadprzyrodzone
                            moce, utworzył "Aifur" jako środowisko
                            przypominające czas, w którym żył jako człowiek.
                            Pomimo upływu wieków, udało mu się zachować
                            atmosferę epoki wikingów, co sprawia, że miejsce to
                            jest nie tylko popularne wśród śmiertelników, ale
                            także stanowi ważny punkt orientacyjny dla
                            społeczności wampirów.
                            <br />
                            <br />
                            "Aifur" stał się miejscem spotkań dla wampirów,
                            którzy chcieli poznać Einara, zyskać jego mądrość
                            lub poprosić o jego protekcję. Dzięki swojemu
                            długiemu istnieniu i doświadczeniu, Einar posiada
                            głęboką wiedzę na temat Maskarady i polityki
                            wampirów, a jego rada jest ceniona przez wiele
                            klanów.
                            <br />
                            <br />
                            Jednak to miejsce nie jest tylko kryjówką dla
                            wampirów. Einar, zgodnie z naturą swojego klanu,
                            zawsze dbał o równowagę pomiędzy życiem
                            śmiertelników a jego towarzyszy. Dlatego "Aifur"
                            jest również miejscem, gdzie ludzie mogą bezpiecznie
                            cieszyć się nocą, pod warunkiem, że szanują zasady
                            domu. Wielu nie jest świadomych, że sąsiadują z
                            potworami nocy, ale dla tych, którzy odkrywają
                            prawdę, Einar staje się strażnikiem, chroniącym ich
                            przed mrocznymi sekretami świata.
                            <br />
                            <br />
                            Więc chociaż "Aifur" może wydawać się zwykłym barem
                            dla przelotnych gości, jest to miejsce o głębokiej i
                            mrocznej historii, kręgiem wampirów, kierowanym
                            przez jednego z najstarszych i najbardziej
                            szanowanych Gangreli w Sztokholmie, Einara.
                            Zdecydowanie to miejsce ma swoje miejsce w sercach i
                            historii nocnych stworzeń tego miasta.
                          </div>
                        }
                      />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="accord-column">
                <ul>
                  <li>
                    <h3>Siedziba Jednostki Inkwizycji</h3>
                    <span>
                      Pod pałacem królewskim znajduję się należąca do drugiej
                      inkwizycji sieć korytarzy. Jest to Szotkholmska siedziba
                      DI, która skłąda się z podziemnego kompleksu złożonego z
                      komnat sypialnych, laboratiorów w których prowadzone są
                      badania, oraz cele wiezienne dla heretyków.
                    </span>
                  </li>
                  <li>
                    <h3>Kosciol Sw. Gertrudy</h3>
                    <span>
                      Kościół św. Gertrudy, znany również jako "Tysiącletni
                      Kościół", jest jednym z najstarszych kościołów w
                      Sztokholmie i jest głęboko związany z historią miasta.
                      Wampiry w Sztokholmie zdają sobie sprawę z tego, że
                      kościół jest teraz pod kontrolą Stowarzyszenia św.
                      Leopolda, organizacji znanej z polowania na ich ród i
                      innych nadnaturalnych bytów.
                      <br />
                      <br />
                      Co więcej, wiele wampirów wierzy, że kościół jest
                      chroniony przez pewne sakramenty i rytuały, które mogą
                      powodować fizyczne cierpienie czy nawet zniszczenie, jeśli
                      wampir spróbowałby naruszyć tę świętą przestrzeń. Dlatego
                      większość wampirów unika kościoła i okolic, traktując to
                      miejsce jako strefę wysoce niebezpieczną.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
      <div>
        <img className="map" src={require("./op2.png")} />
      </div>
      <div className="accord">
        <SimpleAccordion
          title={"Norrmalm"}
          desc={
            <div className="accord-container">
              <div className="accord-column">
                <ul>
                  <li>
                    <h3>Królewska Opera</h3>
                    <span>
                      Elysium: Królewska Opera w Sztokholmie jest jednym z
                      najbardziej prestiżowych Elysium dla wampirów. Ten
                      elegancki budynek z czasów neoklasycyzmu jest miejscem,
                      gdzie wampiry mogą się spotkać, negocjować i przede
                      wszystkim, zachować swoje polityczne gry. Podziwianie
                      sztuki i prezentowanie się w swoim najbardziej dostojnym
                      wydaniu jest tu na porządku dziennym. Dla większości
                      wampirów, bycie częścią tego Elysium jest znakiem statusu
                      i wpływów.
                    </span>
                  </li>
                  <li>
                    <h3>Klub Berns</h3>
                    <span>
                      DKlub Berns to luksusowy klub nocny i miejsce spotkań dla
                      "wyższych sfer" społeczności wampirów. To miejsce jest
                      dobrze znanym, choć nieoficjalnym, spotkaniem dla tych,
                      którzy lubią dobrą muzykę, przepych i towarzystwo innych
                      wampirów. Klub Berns jest zawsze pełen tajemniczych
                      narożników i skrytych korytarzy, co czyni go idealnym
                      miejscem dla tych, którzy preferują bardziej dyskretne
                      spotkania.
                    </span>
                  </li>
                  <li>
                    <h3>Kościół Świętej Eugenii</h3>
                    <span>
                      Tak jak kościół św. Gertrudy, kościół św. Eugenii jest
                      również pod kontrolą Stowarzyszenia św. Leopolda. Ta
                      świątynia katolicka jest miejscem nie tylko dla świętych
                      obrzędów, ale również dla tajnych spotkań i planowania
                      strategii przeciwko wampirom i innym nadprzyrodzonym
                      bytom.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="accord-column">
                <ul>
                  <li>
                    <h3>
                      Safehouse na skrzyżowaniu Sergelgången i
                      Malmskillnadsgatan
                    </h3>
                    <span>
                      Na skrzyżowaniu tych dwóch ulic, ukryty w gęstwinie
                      miejskich budynków, znajduje się tajny safehouse dla
                      wampirów. Ten niewielki, ale wygodny dom jest dobrze
                      zabezpieczony i wyposażony w ciemne, zamknięte
                      pomieszczenia, idealne dla wampirów, którzy potrzebują
                      odpocząć w ciągu dnia. Miejsce to jest dobrze chronione i
                      tylko nieliczni znają jego lokalizację, co czyni go
                      idealnym schronieniem dla tych, którzy chcą uniknąć
                      spojrzenia zarówno ludzi, jak i innych wampirów.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
      <div>
        <img className="map" src={require("./op1.png")} />
      </div>
      <div className="accord">
        <SimpleAccordion />
      </div>
    </div>
  );
}

export default Maps;
