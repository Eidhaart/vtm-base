import React from "react";

import "./Clans.css";
import ClanCard from "../../components/ClanCard/ClanCard";

function ClansBetter() {
  // {
  //   data.map(item =>
  //     <ClanCard
  //       level={item.level}
  //       imgSrc={item.imgSrc}
  //       title={item.title}
  //       description={item.description}
  //       side={item.side}
  //     />
  //   );
  // }

  let lastSide = "right";

  return (
    <div>
      <div className="clan-container">
        {data.map((item, index) => {
          const currentSide = lastSide === "left" ? "right" : "left";
          lastSide = currentSide;

          return (
            <ClanCard
              level={item.level}
              imgSrc={item.img}
              title={item.title}
              description={item.desc}
              side={currentSide}
              longdesc={item.longdesc}
            />
          );
        })}
      </div>
    </div>
  );
}

const data = [
  {
    img:
      "https://drive.google.com/uc?export=view&id=1OYqf9g1OZQzQ5jUpQlOtuVXvLFGpHkzz",
    title: "Tremere",
    desc:
      "W stosunkowo krótkim czasie od ich powstania Warlockowie zdobyli niezwykłą pozycję wśród społeczeństwa wampirycznego i są prawdopodobnie najpotężniejszym klanem we współczesnych nocach. Jest to w dużej mierze wynik ich surowej hierarchii, tajemniczej natury oraz opanowania tajemnej magii zwaną Thaumaturgy, co budzi podejrzenia, strach i szacunek u innych Cainitów. Warlockowie stanowią filar Camarilli i są jednymi z jej głównych obrońców, chociaż działają jako niemalże subsekt. Niektórzy idą nawet tak daleko, że uważają się za ewolucję wampiryzmu, powołując się na swoją ogromną wszechstronność w zakresie magii krwi i brak prawdziwej klątwy klanowej. Ostateczne noce przyniosą wiele wyzwań dla Tremere, a im bardziej wzrastają w siłę, tym więcej wrogów gromadzi się przeciw nim - a w ich dążeniu do władzy Tremere zdobyli więcej wrogów niż większość klanów.",
    longdesc: (
      <div>
        <h3>Historia</h3>
        <h4>Wczesna Historia</h4>
        Tremere rozpoczęli jako Dom Tremere, magowie z Zakonu Hermesa, nazwani
        tak od swojego przywódcy i założyciela, Tremere. Pod koniec pierwszego
        tysiąclecia członkowie Domu Tremere zdali sobie sprawę, że hermetyczne
        sztuki zawodzą, a ich eliksiry nie zapewniają już nieśmiertelności. W
        obliczu możliwości utraty wszystkiego, Tremere rozkazał prowadzenie
        badań nad alternatywnymi metodami podtrzymywania życia. Dom Tremere
        podjął liczne eksperymenty, ale to Goratrix znalazł rozwiązanie w
        badaniach nad wampirami.
        <br />
        <br />
        W 1022 roku Goratrix zaprosił Tremere i sześciu najbliższych doradców
        założyciela, by wziąć udział w ukończonym rytuale, który obiecywał
        prawdziwą nieśmiertelność. Czy Goratrix wiedział, co się stanie, wie
        tylko on i być może Tremere, ale po ukończeniu rytuału uczestnicy zasnął
        i odrodzili się jako wampiry, ich awatary zostały zniszczone, a
        zdolności magiczne stracone. Magowie zyskali nieśmiertelność, ale
        stracili moc, dla której żyli. Chociaż inni prawdopodobnie zabili by
        Goratrixa za jego głupotę (lub podstęp), Tremere nakazał im zatrzymać
        się i oznajmił, że pozostaną przy jego boku, pozostawiając swoje
        klasztory pod opieką podwładnych, podczas gdy sami odkryją tajemnice
        swoich nowych form w tajemnicy.
        <br />
        <br />
        Z czasem Tzimisce wypowiedzieli wojnę Domowi Tremere w odwecie za
        Fiendów, którzy zostali uwikłani w eksperymenty Goratrixa. Zakon Hermesa
        również stał się podejrzliwy wobec diabolicznych praktyk wykonywanych
        przez coraz bardziej tajemniczy Dom, ale Tremere był w stanie
        powstrzymać ich przed dalszym śledztwem. Ostatecznie, w 1037 roku
        Tremere zebrał siedmiu nowo stworzonych Kainitów i wymusił na nich więź
        krwi. Następnie oznajmił, że Dom Tremere zostanie przeorganizowany z
        nową hierarchią piramidy, umieszczając siebie na jej szczycie jako
        Primusa Domu i klanu Tremere, a siedmiu najbliższych wyznawców
        stanowiących Wewnętrzną Radę Siedmiu bezpośrednio pod nim. Powoli
        zaczęli Przemieniać resztę Domu, a każdy inicjant był związany więzią z
        Wewnętrzną Radą, aby zapewnić ich lojalność. Z czasem wszyscy członkowie
        Domu Tremere mieliby umrzeć lub stać się wampirami.
        <h4>Średniowiecze</h4>
        W ciągu następnego wieku trwała wojna z Tzimisce na przemian. Ich
        magowie stawali się coraz słabsi, a nowo przemienieni nieznający jeszcze
        mocy krwi, a klasztory, nawet te w ich twierdzy Ceoris, były
        wielokrotnie niszczone. Podczas gdy Tremere i Etrius prowadzili własne
        badania na całym kontynencie europejskim, przekształcając sztuki
        hermetyczne w Thaumaturgy, Goratrix powrócił do swoich laboratoriów z
        uczniami. Po latach eksperymentów na pojmanych Tzimisce, Nosferatu i
        Gangrelu, udało mu się w 1121 roku stworzyć Gargoyle'a, a do 1125 roku
        hybrydy służyły jako oddziały szturmowe przeciwko Fiends.
        <br />
        <br />
        Niemniej jednak Tremere znaleźli się na trzecim miejscu wśród
        nieumarłych. Jakakolwiek śmiałość, którą Tremere wykazał wkraczając w
        noc, została zignorowana przez zatwardziałych tradycjonalistów klanów, a
        wielokrotnie byli zmuszani do opuszczania miast przez książąt, którzy
        nie patrzyli przychylnie na ich założycielskie aspiracje.
        <br />
        <br />
        Reakcją Tremere było dalsze ryzyko. W miarę jak Tremere i Etrius
        zdobywali coraz więcej wiedzy wampirycznej, odkryli historię Kaina i
        Antediluvian, a także korzyści płynące z diablerii. Chcąc ugruntować
        swoją pozycję jako klan, Tremere poszukiwali założyciela klanu, którego
        mogliby diablerizować, i wybrali Saulota, tajemniczego założyciela klanu
        Salubri. W 1133 roku Tremere i Wewnętrzna Rada odkryli grobowiec Saulota
        na pustyni Anatolii. Tremere wyssał Antediluvian i natychmiast zapadł w
        śpiączkę, pozostawiając Wewnętrzną Radę na czele klanu i niszcząc
        pozostałych Salubri.
        <br />
        <br />
        Jak wszystko, co Tremere zrobili do tego momentu, wynik był mieszany. W
        dużej mierze dzięki wysiłkom Meerlindy, Tremere był zakorzeniony w wielu
        dworach Cainitów, a ich usługi jako magów czyniły ich niezbędnymi dla
        książąt w całej Europie. Zostali teraz uznani za jedno z Klanów Niskich,
        choć uważano ich za uzurpatorów, nieufnych czarnoksiężników i znanych
        diablerystów. Wysoko postawiona kampania propagandowa malowała Salubri
        jako infernalistów i złodziejów dusz, dając im w ten sposób pewien
        kredyt, a nawet ci, którzy wiedzieli lepiej, w dużej mierze siedzieli z
        założonymi rękoma, podczas gdy Salubri byli bliscy całkowitego wymarcia,
        bo ich arogancja uczyniła ich wielu wrogów wśród innych klanów.
        <br />
        <br />
        W 1202 roku Zakon Hermesa ostatecznie odkrył, co stało się z Domem
        Tremere i skazał ich na śmierć, co doprowadziło do Marszu Czarodziejów.
        Wojna Massasy, jak ją nazwano, nigdy oficjalnie się nie zakończyła, ale
        żadna ze stron nie miała zasobów, by utrzymać wojnę, która ustała po
        kilku dekadach, tylko po to, by sporadycznie odżyć lata później.
        <h4>Renesans</h4>
        Tremere kontynuowali polowanie na potomków Saulota, jednocześnie
        zawierając sojusze z węgierskim klanem Ventrue przeciwko Tzimisce. W XV
        wieku Salubri byli już tylko legendą, a Tremere zostali całkowicie
        uznani za klan. Inkwizycja była wobec nich szczególnie surowa i stracili
        wiele ze swoich kultów i klasztorów. Podczas tego okresu Goratrix użył
        swojego wpływu i mocy, aby próbować skorumpować zakony religijne,
        zwłaszcza Templariuszy, w celu przejęcia potężnych artefaktów Kościoła i
        skierowania jego łowców przeciwko swoim wrogom. Kiedy jego próba
        zdobycia władzy nie powiodła się, a Templariuszy zostali uznani za
        heretyków, Tremere obudził się i wezwał Goratrixa do powrotu do Ceoris,
        aby stanął przed sądem przed Wewnętrzną Radą. Po ukaraniu i pozbawieniu
        go władzy Goratrix uciekł na wschód, wierząc, że jego zabójstwo jest
        nieuniknione. Wkrótce potem Etrius przeniósł ciało Tremere do klasztoru
        w Wiedniu, który stał się nowym centrum klanu.
        <br />
        <br />
        Utworzenie Camarilli sygnalizowało legalizację Tremere. Chociaż Tremere
        nie ucierpieli znacznie z powodu Rewolty Anarchistycznej,
        rozprzestrzenianie się Thaumaturgy wśród antytribu Tremere stanowiło
        poważne zagrożenie dla klanu. Czarownicy używali swojej magii, aby
        ułatwić komunikację i koordynację starszych, którzy byli potrzebni do
        wsparcia tego przedsięwzięcia, i odegrali kluczową rolę na Konwencji
        Gwiazd, gdy na cały klan Assamite nałożyli klątwę, uniemożliwiając im
        picie krwi Kainitów bez skrajnego niebezpieczeństwa. Assamici nigdy nie
        wybaczyli Tremere, a ich rywalizacja trwa do dziś. Jednocześnie
        antytribu Tremere zostali także przeklęci, tak aby wszyscy, którzy
        uczestniczyli w Vaulderie, zostali zaznaczeni znakiem widocznym dla
        "prawdziwych" Tremere. Tak potężne czyny miały być prowadzone osobiście
        przez samego Tremere, który obudził się z torporu na to wydarzenie,
        razem z całą Wewnętrzną Radą.
        <h4>Epoka wiktoriańska</h4>
        W XVIII wieku potwierdziły się plotki, że Goratrix przyłączył się do
        Sabbatu i zbierał większość antytribu Tremere, by założyć Dom Goratrix.
        Chociaż Tzimisce zapewnili, że nigdy nie staną się wpływowi w obrębie
        sekty, wysiłki Zdrajcy zbliżyły ich do siebie w ironicznej imitacji
        głównego klanu.
        <br />
        <br />
        W tym czasie Tremere kontynuowali ekspansję na terenie Europy i Ameryki
        Północnej, z znacznie mniejszym sukcesem w Afryce i Azji. Mimo tej
        ekspansji, klan utrzymywał swoją hierarchię, a sieć komunikacyjna
        prowadząca do Wiednia i Wewnętrznej Rady systematycznie rosła.
        <br />
        <br />
        W epoce wiktoriańskiej nastąpił wzrost zainteresowania okultyzmem wśród
        śmiertelników, a Tremere szybko to wykorzystali. Infiltrując wiele
        tajnych stowarzyszeń, które powstały wśród klasy wyższej i średniej,
        rekrutowali z nich swoich nowych wyznawców, służących i stada. Pozwoliło
        im to także na otwarte praktykowanie swoich talentów (choć wciąż w
        ramach restrykcji Maskarady), i to, co kiedyś doprowadziłoby
        nieostrożnego maga na stos za czary, teraz zachwycało i fascynowało
        śmiertelników swoimi koncepcjami wróżenia, zaklinania i łączenia się z
        duchami.
        <h4>Współczesne noce</h4>
        W 1998 roku Tremere antytribu zostali wymazani. Po wezwaniu na chantry w
        Meksyku zostali całkowicie zniszczeni w nieznany sposób podczas rytuału.
        Jeśli jakikolwiek antytribu pozostał, ci, którzy nie uczestniczyli w
        zgromadzeniu, niewątpliwie ukrywają się. Więcej informacji znajdziesz w
        suplementach Transylvania Chronicles IV i Nights of Prophecy lub w
        wpisach na temat Tremere i Goratrixa.
        <br />
        <br />
        Większym problemem była rosnąca liczba wolnych Gargulców ujawniających
        się w Camarilli oraz ci, którzy domagali się większych swobód i praw,
        pomimo prób Tremere, by ich kontrolować. O wiele gorzej, Tremere
        zaczynali dostrzegać rosnącą niestabilność w Thaumaturgy z
        przerażającymi podobieństwami do upadku sztuk hermetycznych, które
        skłoniły Goratrixa do eksperymentów i przemiany w wampiry. Klątwa
        nałożona na klan Assamite nie powiodła się, a kolejne próby jej
        odnowienia były nieudane, a zabójcy polowali na nich z nowym zapałem,
        podczas gdy nowa frakcja czarowników i uczonych starali się przystąpić
        do Camarilli. Postępy dokonane przez Tremere zdawały się napotykać
        kolejne przeszkody, a niewielkie pocieszenie płynęło z samej szczytu
        piramidy.
        <h3>Organizacja</h3>
        Tremere są najbardziej ściśle zorganizowanym klanem, nie ma w tym
        względzie równych im wśród pozostałych Cainitów, a każdy członek wie,
        gdzie stoi w hierarchii wśród swoich rówieśników. To tworzy iluzję
        całkowitego zgodzenia i współpracy w oczach innych Cainitów, którzy
        rzadko wiedzą cokolwiek o hierarchii Tremere czy polityce wewnętrznej
        klanu. Ich Założyciel i imiennik, nominalny Antediluvian Tremere,
        znajduje się na szczycie Piramidy i jest rzekomo kierownikiem całego
        klanu, chociaż bardzo niewielu go kiedykolwiek widziało lub było
        świadkami jego działania. Wielu nie wierzy, że jest on nawet prawdziwą
        osobą, ale może być raczej ideałem Tremere lub symbolem ich jedności.
        Poniżej niego podkreśla się znaczenie liczby siedem, ponieważ każdy
        kolejny szczebel składa się z siedmiu do jednego, rozpoczynając od:
        <ul>
          <li>
            Rady - członkowie Wewnętrznej Rady Siedmiu i prawdziwi władcy klanu,
            z których każdy odpowiedzialny jest za kierowanie wysiłkami klanu w
            określonej części świata. Każdy radca mianuje siedmiu Pontyfików.
          </li>
          <li>
            Pontyfikowie - pontifeksowie nadzorują duży obszar, takie jak części
            kraju lub grupowanie mniejszych krajów i wysp, a z kolei nadzorują
            siedmiu Lordów.
          </li>
          <li>
            Lordowie - każdy lord jest odpowiedzialny za mały kraj lub grupę
            państw i używa swojego wpływu i wiedzy, aby wpłynąć na Tremere w
            swoim obszarze, w szczególności Regentów.
          </li>
          <li>
            Regenci - najbardziej widoczni przedstawiciele władzy Tremere.
            Regent zarządza indywidualnym chantry i jest odpowiedzialny za jego
            nadzór.
          </li>
          <li>
            Magisterowie - termin określający Tremere, którzy nie szukają
            władzy, ale stali się zaufanymi doradcami, którzy zarządzają sporami
            między-chantry. Magisterowie kształcą i dbają o dobrobyt uczniów.
          </li>
          <li>
            Uczniowie - najmłodsi i najliczniejsi Tremere. Uczniowie muszą
            poświęcić wiele czasu na szkolenie, służenie jakiejś potrzebie w
            swoim chantry lub grać w politykę klanu, jak najlepiej pozwala na to
            ich brak doświadczenia. Niektórzy nigdy nie awansują poza ten
            szczebel, ponieważ bardziej interesuje ich polityka Camarilli lub
            własne sprawy, aby wspinać się w hierarchii Tremere, lub dlatego, że
            lord regionu nie widzi potrzeby tworzenia nowego chantry i regenta.
          </li>
          <li>
            Akolici - ci, którzy są poniżej Uczniów, to stopień obejmujący
            Tremere, którzy jeszcze nie zostali zaakceptowani jako część klanu,
            oraz grupy związane z Radą Siedmiu (takie jak Trimira). Poniżej
            Akolitów znajdują się gule i sługi, takie jak Gargulce.
          </li>
        </ul>
        <h4>Koła Tajemnicy</h4>
        Każdy szczebel, z wyjątkiem samej Wewnętrznej Rady, jest podzielony na
        siedem poziomów zwanych kołami tajemnicy. Koło tajemnicy danej osoby
        oznacza jedną z kilku cech, które zdobyły jej prestiż i dodatkowe
        odpowiedzialności, takie jak umiejętność w Thaumaturgy, lata
        doświadczenia i ciężką pracę, udane machinacje polityczne czy po prostu
        protekcjonizm. Im wyższe koło tajemnicy, tym większą władzę i dostęp do
        niej mają, ale jednocześnie oczekuje się od nich większych przysług dla
        klanu i mniej tolerancji dla porażki. Osoby z piątego koła lub wyższego
        są także często nazywane "wysokimi" członkami swojego szczebla, takimi
        jak "wysoki uczeń", "wysoki regent" czy "wysoki lord" - chociaż niewielu
        przejmuje się takim niewygodnym określeniem jak "wysoki uczeń". Awans i
        degradacja są rozpatrywane przez członków wyższych szczebli, choć mogą
        być również powołane trybunały, gdzie dokonuje się analizy osiągnięć i
        niepowodzeń. Dążenie do awansu jest jednym z najbardziej motywujących
        czynników dla członków klanu, aby się wyróżnić i przestrzegać doktryny
        Tremere, choć awans jest rzadko tak prosty, jakby się mogło wydawać.
        <br />
        <br />
        <h4>Tajne Towarzystwa</h4>
        Piramida Tremere roi się od spisków od czasu powstania klanu i sporu
        między Goratrixem a Etriusem. Wiele z tych społeczeństw jest
        tolerowanych, o ile nie zagrażają fundamentom lojalności wobec klanu.
        Znane i akceptowane są takie społeczeństwa jak:
        <ul>
          <li>
            Astors - tajna organizacja, która tropi zdrajców i infiltratorów w
            piramidzie
          </li>
          <li>
            Bracia Absyntu - ci, którzy wierzą w stosowanie pewnych narkotyków w
            celu podniesienia świadomości i świadomości we śnie
          </li>
          <li>Dzieci Piramidy - ci, którzy czczą duchową koncepcję Piramidy</li>
          <li>
            Przymierze - grupa, która poszukuje wiedzy o nekromancji, aby
            połączyć ją z Taumaturgią
          </li>
          <li>
            Elita - grupa Tremere, która wierzy, że są następnym etapem w
            ewolucji wampirycznej i poświęca się wykazaniu supremacji klanu
          </li>
          <li>
            Strażnicy Tradycji - ci, którzy sprzeciwiają się wszelkim zmianom w
            polityce i przeciwnicy wszelkiej nowoczesnej technologii i konwencji
          </li>
          <li>
            Praesidium - tradycjonaliści, którzy dążą do powrotu do Piramidy po
            upadku Głównej Chantry, związani z Domem Tremere.
          </li>
          <li>
            Quaesitori - pozostałość z House Quaesitor, która działa jako
            niezależni sędziowie
          </li>
          <li>
            Nieugięci Śmiertelnicy - grupa Tremere, która lobbuje za lepszym
            uwzględnieniem tych Tremere, którzy nie wykazują zdolności do
            Taumaturgii
          </li>
        </ul>
        <br />
        <br />
        Oprócz nich istnieją grupy takie jak Oko Węża, które jest komórką
        Followers of Set; Trzecie Oko, grupa Tremere, która dąży do pojednania
        za ludobójstwo wobec Salubri; oraz Bractwo Oświecone i Zakon Węża, o
        których mówi się, że mają związki z demonizującymi Baali. Członkostwo w
        jednym z tych społeczeństw może być karane Ostateczną Śmiercią, gdy
        tylko to zostanie ujawnione, dlatego te kulty ukrywają się wśród innych
        członków Klanu. Inne społeczeństwa wymierają z powodu braku
        zainteresowania, takie jak Humanus League czy Golden Path of Harmony.
        <h4>Domy</h4>
        Domy Klanu Tremere są mało więcej niż kultami osobowości w najgorszym
        przypadku, ale w najbardziej ważnych są to odrębne kolegia magii lub
        filozofii.
        <h4>Ważne domy</h4>
        Po upadku Chantry w Wiedniu w 2008 roku, Klan został zreorganizowany na
        4 Domki, gdy wielu Tremere szukało jedności poza Piramidą:
        <ul>
          <li>
            Dom Tremere - związany z Camarillą, lojalista Piramidy, tradycyjni
            hermetycy, pod przewodnictwem Karla Schrekta
          </li>
          <li>
            Dom Carna - większość z nich związana z Camarillą, z niektórymi w
            Anarchach, pogańscy niekonformiści, wiccanki i inne współczesne
            wiedźmy, pod przewodnictwem Carny
          </li>
          <li>
            Dom Goratrix - związany z Camarillą, z niewieloma znanymi
            informacjami o nich, prawdopodobnie pod przewodnictwem Goratrixa
          </li>
          <li>
            Dom Ipsissimus - związany z Anarchami, choć ogólnie uważany za nie
            będący głównym domem. Zdecentralizowany i bez lidera.
          </li>
        </ul>
        <h4>Pomniejsze Domy</h4>
        Przed atakiem klan składał się z nieznanej liczby mniejszych domów,
        niektóre z nich twierdzą, że mają tylko kilku członków, podczas gdy inne
        - jak Dom Tremere - twierdzą, że obejmuje wszystkie dzieci klanu.
        Poniżej wymieniono kilka z bardziej znanych - lub znanych z opowiadań -
        domów Klanu Tremere:
        <ul>
          <li>Trismegistus - symbolika i numerologia</li>
          <li>Hashem - Kabała</li>
          <li>Rodolfo - wróżbiarstwo</li>
          <li>Córki Staruchy - magia narodzin i śmierci</li>
          <li>
            Horned Society - Infernalizm (umożliwia przyjęcie nieśmiertelnym
            członkom)
          </li>
          <li>
            Wielka Sobota - voodoo i nekromancja (umożliwia przyjęcie
            nie-Tremere)
          </li>
          <li>Gildia Auram - Alchemia</li>
          <li>Etrius - Taumaturgia</li>
        </ul>
        <br />
        <br />
        Nie wszystkie z nich są powszechnie znane; niektóre istnieją tylko jako
        plotki i mogą być fikcyjne, podczas gdy inne są poważne i prestiżowe.
        Los tych Domków po Upadku Wiednia jest nieznany, ale można przypuszczać,
        że dołączyły - częściowo lub całkowicie - do wymienionych wyżej głównych
        domów.
        <h3>Kultura</h3>
        Na przestrzeni wieków klan Tremere pielęgnował wizerunek autorytarnej
        społeczności rządzonej przez duszącą hierarchię i tyranię. Większość
        osób spoza klanu traktuje to jako fakt, że hegemonia Tremere jest surowa
        i nieprzejednana. W rzeczywistości jednak cały klan jest mniej sztywny i
        mniej jednolity, niż większość ludzi wie - struktura władzy jest zarówno
        bardziej złożona, jak i bardziej delikatna, niż większość zdaje sobie
        sprawę. Osoby wyższego szczebla stawiają oczekiwania swoim podwładnym -
        a ci, którzy stanowią bezpośrednie zagrożenie dla klanu, są ścigani i
        neutralizowani. Jednak podczas gdy niektórzy regenci i lordowie mogą być
        brutalnie drakońscy, inni są znacznie bardziej liberalni. W
        rzeczywistości wielu jest na tyle inteligentnych, że zdaje sobie sprawę,
        że siać niepotrzebne niezadowolenie tylko motywuje do buntu. I chociaż
        piramida ma na celu zmuszenie do posłuszeństwa, każdy członek jest nadal
        jednostką, która skrywa swoje własne ambicje. Dlatego przełożeni
        regularnie używają obietnic awansu, nauk okultystycznych i dostępu do
        tajemnic Thaumaturgii, nad którymi klan ma swoją monopolistyczną władzę,
        aby motywować jednostki do pozostania w szeregach i zaspokoić ich
        pragnienie władzy.
        <br />
        <br />
        Wobec reszty społeczeństwa nieśmiertelnych zawsze prezentują jednolitą
        frontową. Z uwagi na swoją historię jako zdobywców i oszukiwaczy władzy,
        są obsesyjni na punkcie wizerunku i reputacji swojego klanu. Ale pod
        powierzchnią zamyka się zżyta hierarchia piramidy, która rodzi
        bezwzględną konkurencję (coś, czego najwyższe szczeble aktywnie
        zachęcają). Dlatego też dla wielu Tremere życie nocne staje się
        labiryntem bizantyjskiej polityki, gdzie na każdym kroku czają się
        wieczne spiskowanie i podstępy ze strony tych poniżej i tych powyżej.
        Oprócz hierarchii klanu, Tremere czasami tworzą polityczne frakcje i
        domki w obrębie klanu, które obejmują kulty lub odrębne kolegia magii
        lub innych intelektualnych dążeń. Te grupy są zazwyczaj bardzo
        nieformalne i utrzymują własną organizację, jeśli w ogóle, a niektóre
        mogą być nawet w sprzeczności między sobą.
        <br />
        <br />
        Współcześnie Tremere są jednym z głównych filarów Camarilli, być może
        drugim tylko po Ventrue pod względem wsparcia i wpływów, jakie posiadają
        (większość tej siły pochodzi z niemal monopolu Tremere na Thaumaturgię,
        ale także z zachęcania indywidualnych Tremere do stawiania interesów
        klanu wysoko na swojej liście priorytetów). Klan jest synonimem magii
        krwi, co wykorzystują, aby wpajać strach i zazdrość innym. Chociaż na
        pewno nie są pierwszymi tautomancerzami w historii Cainitów (pomimo
        roszczeń w tej sprawie), ich paradygmat jest jednym z najbardziej
        elastycznych i ekspansywnych. Tremere różnią się od innych
        tautomancerzy, podejmując unikatowe naukowe podejście do magii i
        zachęcają do aktywnej eksperymentacji - rezultatem jest olbrzymia liczba
        dróg i rytuałów tautomantycznych. Oczywiście, żadna jednostka nie zna
        wszystkich zastosowań magii krwi, a takie wiedza stanowi naturalnie
        jedną z głównych form wymiany handlowej w obrębie klanu.
        <br />
        <br />
        Klan przywiązuje dużą wagę do wartości numerologicznej liczby siedem.
        Widząc umysł jako uporządkowany na podobieństwo uporządkowanej piramidy
        o siedmiu stopniach, wewnętrzna dyscyplina umysłu odzwierciedla
        strukturę samego klanu. Myśli, pragnienia i obawy muszą być
        uporządkowane na tych siedmiu stopniach. Podobnie piramida naucza
        siedmiu lekcji: Nieciągłość, Hierarchię, Apatię, Łaskę, Władzę,
        Dokumentację i Nadzór, aby ukształtować swoich członków w pożądany
        kształt.
        <h4>Spokrewnienie</h4>
        Tremere są bardzo wybredni w kwestii, kogo przemieniają, i zazwyczaj
        robią to z myślą o potrzebach klanu, co jest warunkiem wzmocnionym
        faktem, że miejscowy Regent musi dać zgodę na stworzenie nowego potomka.
        Szuka się zazwyczaj osób o silnej woli lub agresywnych osobowościach,
        pod warunkiem, że mają jasny umysł i potrafią nauczyć się być częścią
        większej całości, jaką jest klan. Kandydaci byli erudytami za życia, a
        wielu z nich bawiło się w okultyzm do pewnego stopnia, choć nie jest to
        wymóg. Oczywiście, istnieją "buntownicze" obejścia zwykłych powodów -
        miłość, zysk polityczny, czy wypadek. Regenci często nakazują
        natychmiastowe zabicie takich błędów, z odpowiednią karą dla twórcy, ale
        zawsze są wyjątki. Wkrótce po "obejrzeniu" (Embrace), neonaty Tremere są
        zobligowani do zobowiązania się do Kodeksu Tremere - który wyjaśnia,
        czego oczekuje się od Tremere i jakie działania zasługują na
        nieprzychylność. Neonat musi wypić krew Wewnętrznej Rady Siedmiu poprzez
        rytuał zwany Transubstancjacja Siedmiu, zbliżając się do Więzi Krwi z
        liderami klanu i zapewniając pewien stopień lojalności wobec swoich
        rówieśników. Następnie rozpoczyna się ich szkolenie, nawet gdy nadal
        zmagają się ze swoją przemianą w wampira, zapamiętują Tradycje, uczą się
        jak się karmić itd. Te czynniki prowadzą do dużej liczby niepowodzeń
        wśród nowo przemienionych Tremere, którzy mogą oszaleć lub popełnić
        samobójstwo.
      </div>
    )
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1rkXQvkqfw8SNf2c7vY7yoZtFl5GrD5gG",
    title: "Ventrue",
    desc: (
      <div>
        Klan Ventrue od dawna jest jednym z najbardziej dumnych rodów wampirów.
        Jego członkowie ciężko pracują, aby utrzymać reputację honoru,
        szlachetnego zachowania i przywództwa. Długo panowało w klanie
        przekonanie o swoistym "noblesse oblige" oraz autentyczna wiara, że
        Ventrue wiedzą, co jest najlepsze dla wszystkich. Nie tylko uważają się
        za najstarszy klan, ale także za egzekutorów tradycji i prawowitych
        przywódców społeczeństwa Wampirów. Przez wieki wampiry z klanu Ventrue
        były pozyskiwane spośród szlachty i ludzi z przywilejami, czy to królów
        czy kupieckich książąt, ale znane są również jako rycerze i władcy
        wojenni, którzy starali się żyć według zasad rycerskości i obowiązku. W
        ciągu czasu Ventrue dostosowali się do pełnienia roli przywódców, a w
        ostatnich nocach stali się bardziej politykami niż szlachetnymi
        wojownikami, bardziej dyrektorami wykonawczymi niż baronami. Nadal
        stanowią największe wsparcie dla Kamarilli i Maskarady, wierząc, że obie
        instytucje są najpewniejszym środkiem ochrony wampirów przed rosnącymi
        liczebnie masami śmiertelników oraz strażnikami własnej władzy.
      </div>
    ),
    longdesc: (
      <div>
        <h3>Historia</h3>
        <h4>Wczesna historia</h4>
        Ventrue cenią historię bardziej niż jakikolwiek inny klan, uważając ją
        za wartościowy przewodnik do życia i usprawiedliwienia ich dzisiejszych
        pozycji władzy. Nie oznacza to jednak, że mają jakąś szczególną obsesję
        na punkcie prawdy - przecież mit może być o wiele potężniejszy niż
        rzeczywistość. Jednak podchodzą do historii bardzo poważnie, co bez
        wątpienia wynika z faktu, że ich historia jest pełna podbojów i wielkich
        osiągnięć, którymi niewiele innych klanów może się pochwalić. Słuchając
        ich opowieści, ich sława sięga wczesnych dni historii wampirów, gdy sam
        Kain rozkazał swojemu najstarszemu potomkowi Ynoschowi Embrace
        założyciela Ventrue, którego uważają za pierwszego członka Trzeciej
        Generacji i którego często nazywają Ventru. Miał on być doradcą Kaina w
        czasach Pierwszego Miasta, i gdy Mroczny Ojciec przygotowywał się do
        odejścia, wybrał Ventru, aby obciążył go opieką nad swoim ludem. Poprzez
        tę opowieść Ventrue usprawiedliwiają swoją pozycję wyższości i
        przywództwa nad innymi klanami, tak jak wierzą, że ich przodek kierował
        innymi Antediluvianami przez pewien czas. Pierwszym wielkim osiągnięciem
        Ventrue jest przypisywane Artemis, tworzenie militanckiej Sparty.
        Obawiając się śmiertelnych mas nawet w tych starożytnych czasach,
        Artemis dostrzegła obietnicę w ideach filozofa Lykurga i wspierała go,
        dążąc do uczynienia ludzi narzędziem do wykorzystania, a nie walki, i
        ostatecznie uczyniła się patronką Sparty. Wkrótce ci wampiry stali się
        doskonałym przykładem potencjału śmiertelników w jej oczach: lojalnych,
        odważnych i całkowicie oddanych doskonaleniu siebie. Wyczując rosnącą
        moc, inni Ventrue zaczęli dołączać do wojennej machiny Sparty,
        namawiając sąsiednie miasta-państwa do sojuszu z Spartą, jednocześnie
        zakładając swoje własne domeny w Związku Peloponeskim. To umożliwiło
        także wzrost miasta kupieckiego Koryntu i jego księcia Evarchusa, który
        uosabiał siłę bogactwa jako przykład dla wszystkich Ventrue do
        naśladowania. Rosnąca potęga Sparty i sojusz Brujah z Atenami
        doprowadziły do pierwszej Wojny Brujah, konfliktu, który wyznaczył scenę
        dla gorzkiej rywalizacji między tymi dwoma klanami przez tysiąclecia.
        Chociaż Brujahowie i Ventrue nigdy nie starli się bezpośrednio w
        konflikcie, inwazja Aten pod dowództwem Lysandra sprawiła, że wielu
        Brujahów i Toreadorów uważało Ventrue za szaleńców pragnących władzy,
        podczas gdy spartańscy Ventrue uznali Brujahów za niebezpiecznych
        idealistów.
        <h4>Era Rzymska</h4>
        Upadek Sparty oznaczał nadejście jednego z najwspanialszych okresów dla
        klanu - Rzymu. Wielu Ventrue osiedliło się już wcześniej w regionie i
        żyło stosunkowo spokojnie, kiedy rządzili Etruskowie. Rebelia, która
        uwolniła lud rzymski, była przypisywana Collatowi, który stał się
        pierwszym księciem miasta. Rozpoznając, że mieszkańcy Rzymu to dumni i
        przesądni ludzie, którzy woleliby wbić pal na każdego wampira niż
        rozważyć życie z nimi, a tym bardziej pod nimi, Collat nie dążył do
        rządzenia Rzymianami bezpośrednio ani uczynienia z siebie bóstwa, jak
        robili to wampiry w przeszłości, ale wpływał na wydarzenia zza kulis,
        zbierając przysługi od obywateli miasta. Ten system został później
        udoskonalony przez Camillę, potomka Collata, który zastąpił swojego sire
        i zaczął nawiązywać kontakty polityczne z patrycjuszowskimi rodzinami
        Rzymu. Zamiast używać Dyscyplin, by wymusić swoją wolę na przywódcach
        miasta, Collat rządził za pośrednictwem swoich ghuli, którzy dostarczali
        przysługi i kontakty, pozwalając mu wzbogacać się i zyskiwać potęgę,
        podczas gdy śmiertelnicy pozostawali w nieświadomości. Ta strategia
        została później szeroko przyjęta w kolejnych wiekach i służyła klanowi
        dobrze po przyjęciu Maskarady. Druga Wojna Brujah miała miejsce
        równocześnie z wojną między Rzymem a Kartaginą, gdzie Brujahowie,
        Assamici, a nawet Baali rządzili otwarcie nad śmiertelnikami, domagając
        się krwi i ofiar, jednocześnie żyjąc jak bogowie. W przeciwieństwie do
        tego, co Patrycjusze kultywowali w Rzymie, afrykańska nacja była uważana
        za legowisko infernalistów i potworów. Pomimo licznych próśb Lysandra o
        przekonanie Camilli do rozpoczęcia wojny z Kartaginą, konflikt rozpoczął
        się dopiero, gdy Brujah o imieniu Dominic prowokował Malkawianina,
        księcia Syrakuz Alchiasa. Alchias zwrócił się o pomoc do Artemis i
        przypuszczalnie tańczącego byka Arikel, i wraz z Lysandrem zaplanowali
        wojnę. Kainici unikali bezpośredniej walki w pierwszych dwóch wojnach
        punickich, ale podczas ostatniego szturmu Ventrue, Toreadorowie,
        Malkawianie i Gangrelowie Rzymu otwarcie walczyli obok Rzymian przeciwko
        ludności Kartaginy. Ostatecznie obie strony zostały bardzo osłabione,
        ale Ventrue zwyciężyli, a Brujahowie nigdy im nie wybaczyli za
        zniszczenie ich słynnego miasta. W latach, które nastąpiły, Rzym
        rozkwitał. Ventrue dzielili się swoją władzą z wieloma innymi klanami,
        które brały udział w wojnach przeciwko Kartaginie, nawiązując przyjaźnie
        z innymi Kainitami, nawet gdy Ventrue sami zaczęli spierać się między
        sobą. Większość Patrycjuszy z tego czasu działała niezależnie, a jedyną
        organizacją klanu był związek o charakterze w zdecydowanej większości
        nieefektywnej, który w końcu wyszedł z użycia. Na wzór Juliusza Cezara
        Camilla zreorganizowała Ventrue w strukturę, która powierzała władzę nad
        członkami klanu najważniejszym Ventrue w regionie. Chociaż władza nad
        młodszymi i mniej ważnymi Ventrue nie była absolutna, stworzyła środek
        rozstrzygania sporów, nawiązywania kontaktów oraz identyfikowania
        przyjaciół i wrogów klanu. Reformy te służyły klanowi dobrze, i
        Patrycjusze prosperowali przez wiele wieków, aż do rozpadu samego
        cesarstwa.
        <h4>Średniowiecze</h4>
        Po upadku Rzymu większość elity Ventrue opuściła zrujnowane miasto, aby
        założyć nowe centra władzy w innych miejscach. W okresie panowania
        dynastii Merowingów we Frankii (później Święte Cesarstwo Rzymskie),
        Ventrue zaczęli przenikać istniejący rząd jako lenni panowie,
        przypisując sobie zasługi za stworzenie i rozwinięcie średniowiecznego
        systemu feudalnego. W miarę rozwoju państwa Franków w kierunku Niemiec i
        Włoch, Ventrue zaczęli znów prosperować. Kiedy Święte Cesarstwo Rzymskie
        zostało rozproszone, Ventrue przenieśli swoje centrum władzy do Włoch.
        Jednak ponieważ Rzym dominował Lasombra (podobnie jak wiele Kościoła),
        Ventrue ustanowili centra władzy w innych miejscach we Włoszech - w
        Wenecji, Mediolanie, Genui i Florencji. Tutaj Ventrue ciągle
        przeciwstawiali się Lasombra (i ich pełnomocnikom w kościele i w Rzymie)
        w dążeniu do władzy, gdyż ich wcześniejsze wysiłki nie powiodły się.
        Udając królów i kupieckich książąt, Ventrue rozszerzyli swoje wpływy na
        obszarze Morza Śródziemnego dzięki szlakom handlowym i krucjatom, stając
        się znowu potęgą, z którą należało się liczyć.
        <br />
        <br />
        W tamtych czasach wielu Ventrue podlegało wpływom zasad rycerskości i
        osobistego honoru. Niektórzy z nich oddzielili się od głównego klanu w
        czasie założenia Kamarilli i zwrócili się ku Sabacie.
      </div>
    )
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=10WERG5HSmbNJ8mEUizKeGKP6NPiLS83L",
    title: "Brujah",
    desc: ""
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1DEaQJVl0eJgRzND3PJhV5aNYyIp2dUIp",
    title: "Gangrel",
    desc: ""
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1pmMDm_ZOgsJZX6CUza_hQdnKJ18AeQ-q",
    title: "Hecata",
    desc: ""
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1AcQmZWmqeiCxENoUg-ctbO62hqfY5Zc6",
    title: "Lasombra",
    desc: ""
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1MgGmKvjiDoyag2erl73L9iPDoxm-QtLc",
    title: "Banu Haqim",
    desc: ""
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1LCQSbBnr-2UxPJbOBRvul-hdnge7CkYx",
    title: "Malkavian",
    desc: ""
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1ZEWbYgJTfSgsLOGpFEcIaBKI9DLN5W0S",
    title: "Ministry",
    desc: ""
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1DQ22jzHjxLfDlCpXy0p3GHFkxfLIam72",
    title: "Nosferatu",
    desc: ""
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1hGyn7ZWeae2UAXMMljTgA917ZB9JJ0Qh",
    title: "Ravnos",
    desc: ""
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1HunXZEksFXm91m-hs0S8Ez9sK_7XFIfV",
    title: "Salubri",
    desc: ""
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=10WERG5HSmbNJ8mEUizKeGKP6NPiLS83L",
    title: "Thinblood",
    desc: ""
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1gPJ0fdDOa7LT4LY-PT5h0ic05G1-w80v",
    title: "Toreador",
    desc: ""
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1T93FenGLkqyIGbccGJbUZVD0Hd8z1I6V",
    title: "Tzemisce",
    desc: ""
  }
];

export default ClansBetter;
