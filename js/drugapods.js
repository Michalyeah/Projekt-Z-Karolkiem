
const body = document.body;
const header = document.querySelector("header");
const pasek = document.querySelector(".pasek");
const logo = document.getElementById("logo");
const naglowek = document.getElementById("naglowek");
const grafika = document.getElementById("grafika");
const opis = document.getElementById("opis");

body.style.margin = "0";
body.style.backgroundColor = "white";
body.style.color = "#222";

header.style.backgroundColor = "red";
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


naglowek.style.textAlign = "center";
naglowek.style.marginTop = "40px";
naglowek.style.fontSize = "2rem";
naglowek.style.fontWeight = "900";
naglowek.style.color = "black";
naglowek.style.fontFamily = "'Arial Black', Arial, sans-serif";

grafika.style.display = "block";
grafika.style.margin = "30px auto 40px auto";
grafika.style.maxWidth = "85%";
grafika.style.height = "auto";
grafika.style.borderRadius = "10px";
grafika.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";

opis.style.maxWidth = "900px";
opis.style.margin = "0 auto 80px auto";
opis.style.textAlign = "center";
opis.style.lineHeight = "1.7";
opis.style.fontSize = "1.15rem";
opis.style.fontFamily = "'Sansita', sans-serif";
opis.style.fontWeight = "800"; 
opis.style.color = "#222";
opis.style.padding = "0 20px";
