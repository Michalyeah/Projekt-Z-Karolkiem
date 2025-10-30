console.log("JS działa");

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

header.style.backgroundColor = "maroon";
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

logo.addEventListener("mouseenter", () => { logo.style.transform = "scale(1.1)"; });
logo.addEventListener("mouseleave", () => { logo.style.transform = "scale(1)"; });
logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../index.html";
});

naglowek.style.fontSize = "2.4rem";
naglowek.style.fontWeight = "900";
naglowek.style.color = "black";
naglowek.style.margin = "15px 0 20px 0";

[obrazek, drugieZdjecie].forEach(img => {
    img.style.maxWidth = "60%";
    img.style.height = "auto";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    img.style.display = "block";
    img.style.margin = "0 auto 30px auto";
});

[opis, opis2].forEach(sec => {
    sec.style.maxWidth = "70%";
    sec.style.margin = "0 auto 40px auto";
    sec.style.textAlign = "center";
    sec.style.fontSize = "1.1rem";
    sec.style.lineHeight = "1.8";
    sec.style.fontWeight = "700";
});
