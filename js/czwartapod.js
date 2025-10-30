

const body = document.body;
const header = document.querySelector("header");
const pasek = document.querySelector(".pasek");
const logo = document.getElementById("logo");
const naglowek = document.getElementById("naglowek");
const grafika1 = document.getElementById("grafika1");
const grafika2 = document.getElementById("grafika2");
const tekst = document.getElementById("tekst");
const cytat = document.getElementById("cytat");


body.style.margin = "0";
body.style.fontFamily = "'Sansita', sans-serif";
body.style.backgroundColor = "#f5f5f5";
body.style.textAlign = "center";
body.style.color = "#111";

header.style.backgroundColor = "maroon";
header.style.width = "100%";
pasek.style.display = "flex";
pasek.style.justifyContent = "center";
pasek.style.alignItems = "center";
pasek.style.padding = "10px 0";

logo.style.height = "27px";
logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../index.html";
});


const main = document.querySelector("main");
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignItems = "center";
main.style.marginTop = "60px";

naglowek.textContent = "Targi pracy w hali sportowej – 40 wystawców";
naglowek.style.fontSize = "3rem";
naglowek.style.fontWeight = "900";
naglowek.style.margin = "20px 0 30px 0";
naglowek.style.lineHeight = "1.2";

[grafika1, grafika2].forEach(grafika => {
    grafika.style.width = "70%";
    grafika.style.maxWidth = "900px";
    grafika.style.borderRadius = "10px";
    grafika.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    grafika.style.display = "block";
    grafika.style.margin = "40px auto";
    grafika.style.transition = "none";
    grafika.style.cursor = "default";
});



tekst.innerHTML = `
<p>Dobra organizacja, ładna pogoda i mnóstwo wystawców spowodowało, że na targi do hali sportowej przybyło mnóstwo osób. Z zainteresowaniem podchodziły do kolejnych stanowisk zapoznając się z ofertami pracy.</p>

<p>Głównym celem zorganizowanych targów pracy było wyjście naprzeciw oczekiwaniom społecznym, ponieważ Szydłowiec wciąż boryka się ze sporym bezrobociem. Na 36 stoiskach wystawienniczych oferowanych było blisko 700 wolnych stanowisk. Te zawody, które najbardziej interesowały mieszkańców gminy i powiatu szydłowieckiego to: spawacz, stolarz, mechanik samochodowy, operator CNC, pracownik produkcji, biurowy, sprzedawca kasjer, opiekunka dziecięca, magazynier, elektryk, kierowca, tokarz.</p>

<p>Potrzeby kadrowe prezentowały firmy z Szydłowca, powiatu szydłowieckiego, oraz z miast regionu radomskiego i województwa świętokrzyskiego, a także Powiatowy Urząd Pracy w Szydłowcu i Wojewódzki Urząd Pracy w Warszawie Filia w Radomiu. Odwiedzający targi mieli również okazję zapoznać się z bogatą ofertą edukacyjną oraz szkoleniową. Z firm, które oferowały się były między innymi: Toolmex Truc, Manor House, Randstad, Komenda Powiatowa Policji z Szydłowca, czy Wojskowa Komenda Uzupełnień z Radomia.</p>

<p>Zainteresowaniem cieszył się także program „Mieszkasz w Szydłowcu - kupujesz w Szydłowcu”, do którego można było przystąpić w trakcie targów wyrabiając darmą kartę upoważniającą do zniżek w punktach partnerskich. Najbardziej niezdecydowani mogli uzyskać darmowe porady od doradcy zawodowego.</p>
`;

tekst.style.maxWidth = "800px";
tekst.style.textAlign = "center";
tekst.style.fontSize = "1.15rem";
tekst.style.fontWeight = "700";
tekst.style.lineHeight = "1.7";
tekst.style.marginBottom = "40px";



cytat.innerHTML = `
<p>Przyszedłem na targi, ponieważ jestem bezrobotny od kilku miesięcy i chcę znaleźć coś od nowa. Jest tu wiele ofert odpowiadających moim kwalifikacjom, dlatego wchodzę do hali ze sporym optymizmem. Zobaczymy, czy uda się coś znaleźć – mówił nam pan Henryk z żoną Aliną. Na targach w hali Szkoły Podstawowej numer 2 imienia Jana Pawła II spotkaliśmy również dwudziestoletnią Anię.</p>
`;

cytat.style.maxWidth = "800px";
cytat.style.textAlign = "center";
cytat.style.fontSize = "1.15rem";
cytat.style.fontWeight = "700";
cytat.style.lineHeight = "1.7";
cytat.style.margin = "20px auto 60px auto";
