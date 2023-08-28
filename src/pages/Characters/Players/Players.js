import React from "react";
import CardComponent from "../../../components/PresentationCard/CardComponent";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Players() {
  return (
    <div>
      <CardComponent
        cornerImgSrc={
          "https://drive.google.com/uc?export=view&id=1gPJ0fdDOa7LT4LY-PT5h0ic05G1-w80v"
        }
        level={"Player"}
        imgSrc={require("./Dawid/Sebastian.png")}
        title={"Sebastian Alvarez"}
        description={
          <div>
            <ReactMarkdown>
              Pochodzący z barcelony toreador, Przez śmiertelników znany jako
              Julio bousquets Zdążył wypracować sobie szacunek kilku okolicznych
              gangów. Obecnie jest właścicielem klubu Sense w sztokholmiskiej
              dzielnicy södermalm, gdzie awangardowi muzycy kreują niezapomniane
              melodie. W zakamarkach jego lokalu odbywają się mroczne transakcje
              i spotkania.Mimo że od czterech lat przebywa w Sztokholmie, cienie
              jego przeszłości z Barcelony wciąż go doganiają. Jego paranoiczne
              lęki są ciągłym przypomnieniem o skomplikowanej sieci zobowiązań i
              intryg.Jest posłuszny Obecnej Księżniczce Sztokholmu, a jej wpływy
              świadczą o zawiłościach polityki w Kamarilli.
            </ReactMarkdown>
            <br />
            <ReactMarkdown>**Zalety:**</ReactMarkdown>
            <ul>
              <li>Zasoby(Okoliczne gangi)</li>
              <li>Kanciapa koterii(klub Sense)</li>
              <li>Kontakty(Handlarz ecstasy)</li>
              <li>Samochody</li>
            </ul>
          </div>
        }
        side={"left"}
      />
      <CardComponent
        cornerImgSrc={
          "https://drive.google.com/uc?export=view&id=1OYqf9g1OZQzQ5jUpQlOtuVXvLFGpHkzz"
        }
        level={"Player"}
        imgSrc={require("./Patryk/Walerian.png")}
        title={"Walerian Kojtyła"}
        description={
          "Jest Polakiem, który wyjechał do Szwecji na stypendium i wykładał na uniwersytecie. Obecnie jest głową kultu Szkarłatny Świt, organizacji skoncentrowanej na poprawie życia biedoty i robotników. Nienawidzi klanu Ventrue. Jego siedziba, choć bogata w wiedzę dotyczącą klanów i historii wampirów, jest w pewien sposób przerażająca . Ma obsesję na punkcie pewnej księgi i, mimo iż posiada ogromną wiedzę na temat klanów i historii wampirów, jest mu obojętne, co dzieje się między Sabatem, Camarillą czy Tremere. Jego głównym celem jest pomoc słabszym. Jest potężnym magiem krwi i ma zdolność spożywania normalnego jedzenia, choć nigdy nie chwalił się, jakie są tego konsekwencje."
        }
        side={"right"}
      />
      <CardComponent
        cornerImgSrc={
          "https://drive.google.com/uc?export=view&id=1DEaQJVl0eJgRzND3PJhV5aNYyIp2dUIp"
        }
        level={"Player"}
        imgSrc={require("./Michal/Portrait 2.png")}
        title={"Godrick"}
        description={
          <div>
            <ReactMarkdown>
              Całe swoje życie spędził w Sztokholmie. Jako dziecko został
              porzucony w lesie, gdzie znalazł go starszy mężczyzna i
              przygarnął. To on wpoił mu ważne wartości, w tym szacunek do
              kobiet. Godrick wybrał drogę tatuażysty, lecz od 2-3 lat jest
              również wampirem - przemieniony przez Randvi. Co niezwykłe, nie
              posiada kłów, więc zamiast karmić się tradycyjnie, pije krew z
              torebek. Stałym towarzyszem Godricka jest kruk, który zawsze go
              śledzi. Chociaż kowalstwo to jego hobby, to medycyna przyswoiła
              się Godrickowi przez kursy medyczne, które odbywał w trakcie nauki
              tatuażu.
            </ReactMarkdown>
            <br />
            <ReactMarkdown>**Zalety:**</ReactMarkdown>
            <ul>
              <li>Niewielka zbrojownia w schronieniu</li>
              <li>Zamiana w kruka</li>
            </ul>
          </div>
        }
        side={"left"}
      />

      <CardComponent
        cornerImgSrc={
          "https://drive.google.com/uc?export=view&id=1DQ22jzHjxLfDlCpXy0p3GHFkxfLIam72"
        }
        level={"Player"}
        imgSrc={require("./Leon/Allan.png")}
        title={"Ludvig „Anioł Ulic” Larsson  "}
        description={
          <div>
            <ReactMarkdown>
              
            </ReactMarkdown>
            <br />
            <ReactMarkdown></ReactMarkdown>
            
          </div>
        }
        side={"right"}
      />
      <CardComponent
        cornerImgSrc={
          "https://drive.google.com/uc?export=view&id=1OYqf9g1OZQzQ5jUpQlOtuVXvLFGpHkzz"
        }
        level={"Player"}
        imgSrc={require("./Marlena/Mary.png")}
        title={"Mary White"}
        description={
          "Pochodząca z Czech, Mary White posiada niesamowitą fascynację w dziedzinie biologii i genetyki. Ta głęboka pasja pochłania ją całkowicie przez co zaczęła się interesować jednym z najbardziej dla niej interesującej technologii zwanej nanorobotami. Jest w stanie poświęcić wszystko by tylko zdobyć informacje na ich temat. Postanowiła z tej pasji wykupić informatora na ten temat. Przez jej fascynacje do badań zjawisk nadprzyrodzonych jest z każdym dniem co raz mocniejsza. Jednak tragiczne wydarzenia w rodzinie pozostawiły ją z głębokim traumą. Od tamtej pory Mary nie potrafi rozmawiać i jest bardzo zamknięta w sobie. Jej obecność jest prawie niewyczuwalna - jest niesamowicie cicha i skryta. Mary jest również członkiem klanu Tremere. Zaledwie dwa lata temu została przemieniona przez pewnego czeskiego Tremere o imieniu William. Wampiryzm dodał nowego wymiaru do jej życia, choć wciąż boryka się z własnymi demonami i trudnościami w komunikacji z otoczeniem. Jej wewnętrzny świat jest bogaty i skomplikowany, a jej zainteresowania naukowe mogą okazać się cennym atutem w wampirzym świecie."
        }
        side={"left"}
      />
    </div>
  );
}

export default Players;
