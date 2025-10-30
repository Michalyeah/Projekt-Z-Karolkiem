

const body = document.body;
const header = document.querySelector("header");
const pasek = document.querySelector(".pasek");
const logo = document.getElementById("logo");
const tytul = document.getElementById("tytul");
const obrazek2 = document.getElementById("obrazek2");
const obrazek3 = document.getElementById("obrazek3");
const tekst = document.getElementById("tekst");
const tekst2 = document.getElementById("tekst2");

body.style.margin = "0";
body.style.fontFamily = "'Sansita', sans-serif";
body.style.backgroundColor = "#fff";
body.style.textAlign = "center";

header.style.backgroundColor = "maroon";
header.style.color = "white";
header.style.width = "100%";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.padding = "10px 0";

pasek.style.display = "flex";
pasek.style.alignItems = "center";
pasek.style.justifyContent = "center";

logo.style.height = "28px";
logo.style.transition = "transform 0.2s ease";
logo.addEventListener("mouseenter", () => {
    logo.style.transform = "scale(1.1)";
    logo.style.cursor = "pointer";
});
logo.addEventListener("mouseleave", () => {
    logo.style.transform = "scale(1)";
});
logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../index.html";
});


tytul.style.fontSize = "34px";
tytul.style.fontWeight = "800";
tytul.style.color = "#111";
tytul.style.marginTop = "30px";
tytul.style.marginBottom = "25px";


obrazek2.style.display = "block";
obrazek2.style.margin = "0 auto 30px auto";
obrazek2.style.width = "600px";
obrazek2.style.maxWidth = "90%";
obrazek2.style.borderRadius = "12px";
obrazek2.style.boxShadow = "0 6px 18px rgba(0,0,0,0.25)";


tekst.style.fontSize = "19px";
tekst.style.color = "#222";
tekst.style.maxWidth = "750px";
tekst.style.margin = "0 auto 40px auto";
tekst.style.lineHeight = "1.6";
tekst.style.fontWeight = "600";
tekst.style.textAlign = "center";


obrazek3.style.display = "block";
obrazek3.style.margin = "0 auto 40px auto";
obrazek3.style.width = "600px";
obrazek3.style.maxWidth = "90%";
obrazek3.style.borderRadius = "12px";
obrazek3.style.boxShadow = "0 6px 18px rgba(0,0,0,0.25)";


tekst2.style.fontSize = "19px"; 
tekst2.style.color = "#222";
tekst2.style.maxWidth = "750px";
tekst2.style.margin = "0 auto 60px auto";
tekst2.style.lineHeight = "1.6";
tekst2.style.fontWeight = "600"; 
tekst2.style.textAlign = "center";

Array.from(tekst2.querySelectorAll("p")).forEach(p => {
    p.style.marginBottom = "20px";
    p.style.fontSize = "19px";
    p.style.fontWeight = "600";
});

Array.from(tekst2.querySelectorAll("strong")).forEach(s => {
    s.style.fontWeight = "600"; 
});
