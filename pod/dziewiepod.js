

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
body.style.color = "#111";


header.style.backgroundColor = "red"; 
header.style.color = "white";
header.style.width = "100%";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.padding = "10px 0";
header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.25)";


pasek.style.display = "flex";
pasek.style.alignItems = "center";
pasek.style.justifyContent = "center";


logo.style.height = "30px";
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
    window.location.href = "index.html";
});


tytul.style.fontSize = "36px";
tytul.style.fontWeight = "900";
tytul.style.color = "#111";
tytul.style.marginTop = "35px";
tytul.style.marginBottom = "25px";
tytul.style.letterSpacing = "0.5px";


obrazek2.style.display = "block";
obrazek2.style.margin = "0 auto 30px auto";
obrazek2.style.width = "600px";
obrazek2.style.maxWidth = "90%";
obrazek2.style.borderRadius = "14px";
obrazek2.style.boxShadow = "0 6px 18px rgba(0,0,0,0.25)";


tekst.style.fontSize = "20px";
tekst.style.color = "#222";
tekst.style.maxWidth = "780px";
tekst.style.margin = "0 auto 40px auto";
tekst.style.lineHeight = "1.7";
tekst.style.fontWeight = "600";
tekst.style.textAlign = "center";
tekst.style.padding = "0 15px";


obrazek3.style.display = "block";
obrazek3.style.margin = "0 auto 40px auto";
obrazek3.style.width = "600px";
obrazek3.style.maxWidth = "90%";
obrazek3.style.borderRadius = "14px";
obrazek3.style.boxShadow = "0 6px 18px rgba(0,0,0,0.25)";


tekst2.style.fontSize = "20px";
tekst2.style.color = "#222";
tekst2.style.maxWidth = "780px";
tekst2.style.margin = "0 auto 70px auto";
tekst2.style.lineHeight = "1.7";
tekst2.style.fontWeight = "600";
tekst2.style.textAlign = "center";
tekst2.style.padding = "0 15px";


Array.from(tekst2.querySelectorAll("p")).forEach(p => {
    p.style.marginBottom = "25px";
    p.style.fontSize = "20px";
    p.style.fontWeight = "600";
});


Array.from(document.querySelectorAll("strong")).forEach(s => {
    s.style.fontWeight = "700";
    s.style.textDecoration = "none";
    s.style.color = "#111";
});
