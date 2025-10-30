

const body = document.body;
const header = document.querySelector("header");
const pasek = document.querySelector(".pasek");
const logo = document.getElementById("logo");
const naglowek = document.getElementById("naglowek");
const obrazek = document.getElementById("inkubator");
const opis = document.getElementById("opis");
const drugieZdjecie = document.getElementById("drugie-zdjecie");
const opis2 = document.getElementById("opis2");

body.style.margin = "0";
body.style.fontFamily = "'Sansita', sans-serif";
body.style.textAlign = "center";
body.style.backgroundColor = "white";
body.style.color = "black";

header.style.backgroundColor = "red";
header.style.width = "100%";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.padding = "10px 0 5px 0";

pasek.style.display = "flex";
pasek.style.alignItems = "center";
pasek.style.justifyContent = "center";

logo.style.height = "27px";
logo.style.transition = "transform 0.2s ease";
logo.style.cursor = "pointer";

logo.addEventListener("mouseenter", () => {
    logo.style.transform = "scale(1.1)";
});
logo.addEventListener("mouseleave", () => {
    logo.style.transform = "scale(1)";
});
logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
});

naglowek.style.fontSize = "2.4rem";
naglowek.style.fontWeight = "900";
naglowek.style.color = "black";
naglowek.style.margin = "15px 0 20px 0";

obrazek.style.maxWidth = "60%";
obrazek.style.height = "auto";
obrazek.style.borderRadius = "10px";
obrazek.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
obrazek.style.display = "block";
obrazek.style.margin = "0 auto 30px auto";

opis.style.maxWidth = "70%";
opis.style.margin = "0 auto 40px auto";
opis.style.textAlign = "center";
opis.style.fontSize = "1.1rem";
opis.style.lineHeight = "1.8";
opis.style.fontWeight = "700";
opis.style.textDecoration = "none";

drugieZdjecie.style.maxWidth = obrazek.style.maxWidth;
drugieZdjecie.style.height = "auto";
drugieZdjecie.style.borderRadius = "10px";
drugieZdjecie.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
drugieZdjecie.style.display = "block";
drugieZdjecie.style.margin = "0 auto 30px auto";

opis2.style.maxWidth = "70%";
opis2.style.margin = "0 auto 50px auto";
opis2.style.textAlign = "center";
opis2.style.fontSize = "1.1rem";
opis2.style.lineHeight = "1.8";
opis2.style.fontWeight = "700";
opis2.style.textDecoration = "none";
