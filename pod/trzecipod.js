

const body = document.body;
const header = document.querySelector("header");
const pasek = document.querySelector(".pasek");
const logo = document.getElementById("logo");
const naglowek = document.getElementById("naglowek");
const grafika1 = document.getElementById("grafika1");
const grafika2 = document.getElementById("grafika2");
const opis = document.getElementById("opis");
const opis2 = document.getElementById("opis2");

body.style.margin = "0";
body.style.fontFamily = "'Sansita', sans-serif";
body.style.backgroundColor = "white";
body.style.color = "#111";

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
naglowek.style.fontSize = "1.6rem";
naglowek.style.fontWeight = "900";
naglowek.style.color = "black";
naglowek.style.lineHeight = "1.4";
naglowek.style.maxWidth = "900px";
naglowek.style.marginLeft = "auto";
naglowek.style.marginRight = "auto";


function stylizujGrafike(img, szerokosc = "80%") {
    img.style.display = "block";
    img.style.margin = "30px auto 40px auto";
    img.style.maxWidth = szerokosc;
    img.style.height = "auto";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.25)";
}

stylizujGrafike(grafika1, "80%");

stylizujGrafike(grafika2, "60%");


function stylizujOpis(element) {
    element.style.maxWidth = "850px";
    element.style.margin = "0 auto 40px auto";
    element.style.textAlign = "center";
    element.style.fontSize = "1.6rem";
    element.style.lineHeight = "1.8";
    element.style.fontWeight = "800";
    element.style.padding = "0 20px";
    element.style.color = "#111";
}

stylizujOpis(opis);
stylizujOpis(opis2);
