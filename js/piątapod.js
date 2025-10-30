
const body = document.body;
const header = document.querySelector("header");
const pasek = document.querySelector(".pasek");
const logo = document.getElementById("logo");
const container = document.getElementById("container");
const naglowek = document.getElementById("naglowek");
const imageSection = document.getElementById("image-section");
const awariaImg = document.getElementById("awaria-img");
const opis = document.getElementById("opis");
const image2Section = document.getElementById("image2-section");
const drugaGrafika = document.getElementById("druga-grafika");
const opis2 = document.getElementById("opis2");

body.style.margin = "0";
body.style.fontFamily = "'Inter', sans-serif";
body.style.backgroundColor = "white";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

header.style.backgroundColor = "red";
header.style.color = "white";
header.style.width = "100%";

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
    window.location.href = "index.html";
});


container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.textAlign = "center";
container.style.marginTop = "120px";
container.style.padding = "0 20px";

naglowek.textContent = "Awaria wodociągów na osiedlu Północ – beczkowozy";
naglowek.style.fontSize = "2.8rem";
naglowek.style.fontWeight = "800";
naglowek.style.color = "black";
naglowek.style.lineHeight = "1.2";


imageSection.style.marginTop = "20px";
imageSection.style.display = "flex";
imageSection.style.flexDirection = "column";
imageSection.style.alignItems = "center";

awariaImg.style.maxWidth = "90%";
awariaImg.style.height = "auto";
awariaImg.style.borderRadius = "16px";
awariaImg.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
awariaImg.style.cursor = "default";
awariaImg.style.transition = "none";


opis.style.maxWidth = "800px";
opis.style.marginTop = "40px";
opis.style.textAlign = "center";
opis.style.fontSize = "1.1rem";
opis.style.lineHeight = "1.6";
opis.style.color = "#222";

opis.querySelectorAll("p").forEach(p => {
    p.style.marginBottom = "20px";
});


image2Section.style.marginTop = "30px";
image2Section.style.display = "flex";
image2Section.style.justifyContent = "center";

drugaGrafika.style.maxWidth = awariaImg.style.maxWidth;
drugaGrafika.style.height = "auto";
drugaGrafika.style.borderRadius = "16px";
drugaGrafika.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
drugaGrafika.style.cursor = "default";
drugaGrafika.style.transition = "none";


opis2.style.maxWidth = "800px";
opis2.style.marginTop = "40px";
opis2.style.textAlign = "center";
opis2.style.fontSize = "1.1rem";
opis2.style.lineHeight = "1.6";
opis2.style.color = "#222";
