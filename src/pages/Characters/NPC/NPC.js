import React from "react";
import CardComponent from "../../../components/PresentationCard/CardComponent";
import "./NPC.css";

function NPC() {
  {
    data.map(item =>
      <CardComponent
        cornerImgSrc={item.cornerImg}
        level={item.level}
        imgSrc={item.imgSrc}
        title={item.title}
        description={item.description}
        side={item.side}
      />
    );
  }

  const titleToSortBy = "";

  const sortedDataphrase = [...data].sort((a, b) => {
    if (a.clan === titleToSortBy) {
      return -1; // a comes first
    } else if (b.title === titleToSortBy) {
      return 1; // b comes first
    } else {
      return a.clan.localeCompare(b.clan); // Default sorting
    }
  });
  //Sorting by clan name

  const sortedDatatitle = [...data].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  //sorting alphabetically by name

  const sortedDataclan = [...data].sort((a, b) =>
    a.cornerImg.localeCompare(b.cornerImg)
  );
  //sorting by clan image {not sure if makes sence}

  let lastSide = "right";

  return (
    <div>
      <div className="npc-container">
        {data.map((item, index) => {
          const currentSide = lastSide === "left" ? "right" : "left";
          lastSide = currentSide;

          return (
            <CardComponent
              cornerImgSrc={item.cornerImg}
              level={item.level}
              imgSrc={item.imgSrc}
              title={item.title + "" + " " + "(" + item.level + ")"}
              description={item.description}
              side={currentSide}
            />
          );
        })}
      </div>
    </div>
  );
}

const data = [
  {
    clan: "toreador",
    cornerImg:
      "https://drive.google.com/uc?export=view&id=1gPJ0fdDOa7LT4LY-PT5h0ic05G1-w80v",
    level: "prince",
    side: "left",
    imgSrc:
      "https://drive.google.com/uc?export=view&id=12OI33qX2HS7q2tGDl3r4xcCHVv6hP87b",
    title: "Astrid Nyberg",
    description: (
      <div>
        <p>
          Astrid Nyberg, pochodząca z zamożnej, artystycznej rodziny, przeszła
          transformację w wampira w okresie życiowych niepokojów. Została
          przyciągnięta przez starszego wampira z rodu Toreador, który dostrzegł
          jej potencjał. Jako Toreador, Astrid rozwinęła pasję do sztuki,
          zyskując uznanie na lokalnej scenie artystycznej Sztokholmu. Wygląd
          Astrid jest starannie dopracowany i odzwierciedla jej estetyczne
          gusta, co wykorzystuje jako środek manipulacji i wpływu w
          społeczeństwie wampirów. Jej lojalny powiernik, Henrik Stormson, choć
          oddany, budzi w niej niepokój swoją zazdrością. Astrid, wykorzystując
          swój wpływ i przebiegłość, zdobyła pozycję Księżniczki Sztokholmu.
          Utrzymując strategiczne sojusze, równoważy rywalizujące frakcje
          Ventrue i Brujah, ciesząc się szacunkiem społeczności Kindredów. Jako
          Księżniczka, Astrid zarządza sprawami Kindredów w Sztokholmie,
          utrzymując równowagę między światem śmiertelnym a nadprzyrodzonym.
        </p>
      </div>
    )
  },
  {
    clan: "gangrel",
    cornerImg:
      "https://drive.google.com/uc?export=view&id=1DEaQJVl0eJgRzND3PJhV5aNYyIp2dUIp",
    level: "primogen",
    side: "right",
    imgSrc:
      "https://drive.google.com/uc?export=view&id=15zl-pCVbLkGQsKCEoqucjLej06uVcvyR",
    title: "Henrik Stormson",
    description: (
      <div>
        <p>
          Henrik Stormson to potężny wampir z rodu Gangrel, który pochodzi z
          czasów wielkich zamieszek. Przemiana przyniosła mu nadnaturalne
          zdolności i głęboką więź z siłami natury, czyniąc go silnym i lojalnym
          członkiem swojego rodu. W ciągu lat, Henrik ugruntował swoją pozycję
          wśród wampirów w Sztokholmie, zazdrośnie obserwując jednak wzrost
          władzy Astrid Nyberg, Księżniczki Sztokholmu. Mimo iż Henrik widzi w
          Astrid rywalkę, docenia jej stabilne przywództwo i zdolności
          dyplomatyczne. Henrik, będąc lojalnym Astrid, pełni w ich
          społeczeństwie skomplikowaną rolę, dbając o dobrobyt rodu Gangrel i
          pełniąc funkcję łącznika między Astrid a innymi frakcjami. Mimo
          zewnętrznej lojalności, kierowany ambicjami, szuka okazji do
          podważenia pozycji Astrid, manewrując za kulisami w celu zyskania
          wpływu. Relacje między Henrikem Stormsonem a Astrid Nyberg są złożone,
          pełne zazdrości, ambicji i delikatnego tańca lojalności. Henrik
          wspiera rządy Astrid, ale równocześnie dąży do zdobycia dla siebie
          pożądanej władzy, co nadal wpływa na los wampirzego społeczeństwa w
          Sztokholmie.
        </p>
      </div>
    )
  },
  {
    clan: "brujah",
    cornerImg:
      "https://drive.google.com/uc?export=view&id=10WERG5HSmbNJ8mEUizKeGKP6NPiLS83L",
    level: "primogen",
    side: "left",
    imgSrc:
      "https://drive.google.com/uc?export=view&id=1fi1V03ORLHH0wYl2KlzRl9D8xL-xWcrQ",
    title: "Marcus (Mack) Jansson",
    description: (
      <div>
        <p>
          Pod względem statusu społecznego, Marcus Jasson nie jest tak wysoko
          pozycjonowany jak Erik Vintergaard, ale nadal jest potężną i wpływową
          postacią w świecie Kindredów. Jego siła fizyczna i zdolności bojowe
          sprawiają, że jest szanowany wśród członków swojej frakcji, a jego
          niekonwencjonalne podejście do porządku ustalonego czyni go postacią o
          dużej reputacji wśród buntowników i rebeliantów. Osobowość Marcusa
          jest dzika, niezależna i pełna pasji. Jest buntownikiem, który nie
          zgadza się z ustanowionym porządkiem i nie boi się wystąpić przeciwko
          niemu. Jest stanowczy i zdeterminowany w realizacji swoich celów, nie
          wahając się użyć siły, gdy jest to konieczne. Marcus jest impulsywny i
          nieustraszony, posiadając niezależny duch i niezależne myślenie, co
          sprawia, że inni go podziwiają za jego odwagę i wytrwałość.
        </p>
      </div>
    )
  },
  {
    clan: "hecata",
    cornerImg:
      "https://drive.google.com/uc?export=view&id=1pmMDm_ZOgsJZX6CUza_hQdnKJ18AeQ-q",
    level: "primogen",
    side: "right",
    imgSrc:
      "https://drive.google.com/uc?export=view&id=1GxEaLTTkAxXH_MKMlqkxPeBcho1SAFxY",
    title: "Elin Nordström",
    description: (
      <div>
        <p>
          Elin Nordström jest wpływową postacią w Klanie Hecata w Sztokholmie.
          Pochodzi z zamożnej rodziny związaną z nekromancją i od młodości
          wykazuje zdolności do komunikacji z duchami. Jej życie zmieniło się,
          gdy odkryła swoje nekromantyczne zdolności i od tego czasu oddała się
          studiowaniu tajemnic krainy umarłych. W ramach swoich poszukiwań, Elin
          dołączyła do Klanu Hecata, szybko stając się jego ważnym członkiem
          dzięki swoim umiejętnościom i wiedzy. Jako Primogen, pełni kluczową
          rolę w koordynacji działań klanu i reprezentuje jego interesy wśród
          innych klanów. Choć jej pasja do nekromancji kosztowała ją wiele
          bliskich relacji, Elin niezachwianie dąży do zgłębienia tajemnic
          śmierci i nekromancji. Jej autorytet, mądrość i zdolności
          nekromantyczne czynią ją szanowaną postacią w świecie wampirów.
        </p>
      </div>
    )
  },
  {
    clan: "malkavian",
    cornerImg:
      "https://drive.google.com/uc?export=view&id=1LCQSbBnr-2UxPJbOBRvul-hdnge7CkYx",
    level: "primogen",
    side: "left",
    imgSrc:
      "https://drive.google.com/uc?export=view&id=1411WHt3gXeLGOAk-iCgo1dVrUju7qwe2",
    title: "Lucas (Loke) Nilsson",
    description: (
      <div>
        <p>
          Lucas jest niezwykle ekscentryczną i enigmatyczną postacią. Jego umysł
          jest skomplikowany i często pełen nieprzewidywalnych myśli i wizji.
          Jako członek Klanu Szaleńców, ma w sobie odrobinę szaleństwa, co daje
          mu nietypowy sposób myślenia i podejścia do rzeczywistości. Często
          zaskakuje innych swoją niezwykłą intuicją i zdolnością do odczytywania
          ukrytych znaczeń. Lucas jest znany ze swojej enigmatycznej natury i
          często wydaje się, że przewiduje wydarzenia, których inni nie
          dostrzegają. Jego rozmowy mogą być niekonwencjonalne i pełne
          nieoczekiwanych zwrotów akcji. Mimo to, jego wypowiedzi często kryją w
          sobie głębokie mądrości i wglądy, które mogą prowadzić do odkrycia
          tajemniczych zagadek.
        </p>
      </div>
    )
  },
  {
    clan: "toreador",
    cornerImg:
      "https://drive.google.com/uc?export=view&id=1gPJ0fdDOa7LT4LY-PT5h0ic05G1-w80v",
    level: "primogen",
    side: "left",
    imgSrc:
      "https://drive.google.com/uc?export=view&id=1cGOm2OieEK3t10a8JyxU0Mp2Q-rtZHXf",
    title: "Isabella (La Dama) Garcia",
    description: (
      <div>
        <p>
          Urodzona w hiszpanii, Isabella była cenioną tancerką i kurtyzaną w
          swoim śmiertelnym życiu. Teraz jako Toreador, jej uroda jest
          ponadczasowa, a ruchy zawsze pełne wdzięku i celowe. Zachowała swoją
          miłość do sztuki, wpływając na scenę kulturalną Sztokholmu jako
          influencerka i twórca trendów. Isabella pełni funkcję primogena
          Toreador, reprezentując interesy swojego klanu w mieście. Pod
          elegancką i ujmującą powierzchownością posiada sprytny umysł
          polityczny, co czyni ją szanowaną i wpływową postacią wśród Kindred.
        </p>
      </div>
    )
  },
  {
    clan: "ventrue",
    cornerImg:
      "https://drive.google.com/uc?export=view&id=1rkXQvkqfw8SNf2c7vY7yoZtFl5GrD5gG",
    level: "primogen",
    side: "right",
    imgSrc:
      "https://drive.google.com/uc?export=view&id=1a2sbTfYEXxRoVoLFpjTAMIRFfuVLfjSL",
    title: "Erik Vintergaard",
    description: (
      <div>
        <p>
          Pod względem statusu społecznego, Erik Vintergaard cieszy się wysokim
          prestiżem jako Primogen klanu Ventrue w Sztokholmie. Jego pozycja daje
          mu autorytet i wpływ zarówno w świecie Kindredów, jak i w szerszym
          społeczeństwie. Jako CEO potężnej firmy i lider finansowy, ma również
          znaczącą pozycję w biznesowym świecie mortalnym. Osobowość Erika
          charakteryzuje się pewnością siebie, godnością i chłodną elegancją.
          Jest wyrafinowanym intelektualistą, posiadającym strategiczne myślenie
          i zdolność do podejmowania trudnych decyzji. Jego postawa jest
          zdecydowana i pełna godności, co sprawia, że ​​ludzie naturalnie
          szanują go i podziwiają. Erik jest zazwyczaj spokojny, z dystansem i
          kontrolą nad swoimi emocjami, zachowując profesjonalizm nawet w
          najtrudniejszych sytuacjach.
        </p>
      </div>
    )
  },
  {
    clan: "nosferatu",
    cornerImg:
      "https://drive.google.com/uc?export=view&id=1DQ22jzHjxLfDlCpXy0p3GHFkxfLIam72",
    level: "primogen",
    side: "left",
    imgSrc:
      "https://drive.google.com/uc?export=view&id=1XDs1SutxJFGEmTXuFneTju2m9KNNPRfk",
    title: "Elvira Lindström",
    description: (
      <div>
        <p>
          Elvira Lindström jest Primogenem klanu Nosferatu w Sztokholmie. Jest
          doświadczoną archeolożką wampiryczną o zdeformowanym wyglądzie. Jej
          wiedza, maskowanie i umiejętności szpiegowskie przyniosły jej szacunek
          w świecie wampirów. Jako Primogen, zarządza klanem Nosferatu, chroni
          tajemnice i utrzymuje spójność klanu. Jej działania wpływają na życie
          wielu wampirów w mieście, a jej mądrość i lojalność cieszą się
          uznaniem.
        </p>
      </div>
    )
  },
  {
    clan: "Banu Haqim",
    cornerImg:
      "https://drive.google.com/uc?export=view&id=1MgGmKvjiDoyag2erl73L9iPDoxm-QtLc",
    level: "primogen",
    side: "left",
    imgSrc:
      "https://drive.google.com/uc?export=view&id=15TAP74L5z9isf7_meqq8iRyZ5Amfqxpj",
    title: "Aisha Rashid",
    description: (
      <div>
        <p>
          Aisha jest do pewnego stopnia tajemniczą postacią, naukowcem prawa i
          etyki w swoim śmiertelnym życiu, który teraz służy jako rodzaj
          sędziego dla Kindred w Sztokholmie. Postawiła sobie za misję
          egzekwowanie Tradycji i nie boi się brać sprawy w swoje ręce, jeśli
          sprawiedliwość Księcia jest niewystarczająca. Jej sprawiedliwe, ale
          surowe podejście zdobyło jej szacunek wśród jej klanu i poza nim.
        </p>
      </div>
    )
  },
  {
    clan: "Ravnos",
    cornerImg:
      "https://drive.google.com/uc?export=view&id=1hGyn7ZWeae2UAXMMljTgA917ZB9JJ0Qh",
    level: "primogen",
    side: "left",
    imgSrc:
      "https://drive.google.com/uc?export=view&id=1B1LkDcryx5L8WvZBQEJoIkERhIxda0p9",
    title: " Aleksandar (Szelma) Jovanovic",
    description: (
      <div>
        <p>
          Aleksandar, pochodzący z Serbii, ucieleśnia reputację swojego klanu
          jako szelmy. Jest doświadczonym iluzjonistą, zarówno w użyciu swojej
          dyscypliny, jak i w relacjach z innymi Kindred. Aleksandar prowadzi
          sieć drobnych przestępców i oszustów na terenie całego miasta, często
          odgrywając rolę figlarnego mediatora w podziemnym świecie miasta.
          Wielu Kindred podejrzewa go o maczanie palców w każdym torcie, choć
          nikt nie może tego udowodnić.
        </p>
      </div>
    )
  },
  {
    clan: "tzimisce",
    cornerImg:
      "https://drive.google.com/uc?export=view&id=1T93FenGLkqyIGbccGJbUZVD0Hd8z1I6V",
    level: "primogen",
    side: "left",
    imgSrc:
      "https://drive.google.com/uc?export=view&id=1I-NvICln0WM_c9xt8RYkRZIsLlCdoQiu",
    title: " Dr. Henrik (Rzeźnik) Müller",
    description: (
      <div>
        <p>
          W swoim śmiertelnym życiu znany jako wybitny chirurg, teraz Henrik
          jest przerażającą postacią wśród Kindred w Sztokholmie, znanym ze
          swojej mistrzowskiej władzy nad charakterystyczną dla Tzimisce
          dyscypliną Vicissitude, czyli modelowaniem ciała. Jego fizyczna forma
          jest niesamowicie doskonała, nie wykazując żadnych oznak starzenia się
          czy wad. Henrik prowadzi prywatną klinikę, gdzie świadczy "usługi
          medyczne" zarówno dla Kindred jak i śmiertelników, służąc tym, którzy
          mogą sobie pozwolić na jego wygórowane ceny.
        </p>
      </div>
    )
  },
  {
    clan: "ventrue",
    cornerImg:
      "https://drive.google.com/uc?export=view&id=1rkXQvkqfw8SNf2c7vY7yoZtFl5GrD5gG",
    level: "sherrif",
    side: "right",
    imgSrc:
      "https://drive.google.com/uc?export=view&id=1cuhp3O7zWjpurvfCjMcIozFAeILe0EYN",
    title: "Johan Andresson",
    description: (
      <div>
        <p>
          Johan Andersson to wpływowy członek Klanu Ventrue, który pomimo
          towarzyszącej mu neutralności w wojnie między Brujah a Ventrue,
          wspiera Astrid i Henrika, dbając o zachowanie Maskarady i dyskretne
          poszukiwanie artefaktu. Dzięki swoim zdolnościom taktycznym i
          strategicznym, a także szybkim pozyskiwaniu wiedzy na różne tematy,
          jest nieoceniony dla grupy. Johan jest również CEO QuantumSoft
          Technologies, międzynarodowej firmy technologicznej specjalizującej
          się w sztucznej inteligencji, chmurze obliczeniowej, oprogramowaniu
          komputerowym i technologii kwantowej. Reprezentuje firmę z pewnością
          siebie, elegancko ubrany i emanujący profesjonalizmem. Jego
          umiejętności jako strategicznego myśliciela, eksperta technologicznego
          i zaangażowanie w zachowanie Maskarady czynią go niezastąpionym
          członkiem grupy, przyczyniającym się do wysiłków w nawigowaniu przez
          skomplikowany nadprzyrodzony krajobraz i dyskretnym poszukiwaniu
          artefaktu.
        </p>
      </div>
    )
  }
];

export default NPC;
