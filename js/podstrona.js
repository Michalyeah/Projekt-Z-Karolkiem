const body = document.body;
const header = document.querySelector("header");
const pasek = document.querySelector(".pasek");
const logo = document.getElementById("logo");
const tytul = document.getElementById("tytul");
const grafika = document.getElementById("grafika");
const grafika2 = document.getElementById("grafika2");
const teksty = document.querySelectorAll("#tekst");

body.style.margin = "0";
body.style.fontFamily = "'Sansita', sans-serif";
body.style.backgroundColor = "#fff";
body.style.textAlign = "center";
body.style.lineHeight = "1.8";
body.style.color = "#000";

header.style.backgroundColor = "maroon";
header.style.width = "100%";
header.style.position = "fixed";
header.style.top = "0";
header.style.left = "0";
header.style.zIndex = "1000";

pasek.style.display = "flex";
pasek.style.alignItems = "center";
pasek.style.justifyContent = "center";
pasek.style.padding = "10px 0";

logo.style.height = "27px";
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

tytul.style.marginTop = "80px";
tytul.style.fontSize = "2.3rem";
tytul.style.fontWeight = "900";
tytul.style.color = "#000";

const ustawStylGrafiki = (img) => {
  img.style.display = "block";
  img.style.margin = "25px auto";
  img.style.maxWidth = "55%";
  img.style.height = "auto";
  img.style.borderRadius = "10px";
  img.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
  img.style.pointerEvents = "none"; 
};

ustawStylGrafiki(grafika);
ustawStylGrafiki(grafika2);

teksty.forEach(p => {
  p.style.maxWidth = "900px";
  p.style.margin = "40px auto";
  p.style.fontSize = "1.25rem";
  p.style.textAlign = "justify";
  p.style.fontWeight = "800";
});
