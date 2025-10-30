

const body = document.body;
const header = document.querySelector("header");
const pasek = document.querySelector(".pasek");
const logo = document.getElementById("logo");
const newsTitle = document.getElementById("news-title");
const newsPhoto = document.getElementById("news-photo");
const newsContent = document.getElementById("news-content");
const secondPhoto = document.getElementById("second-photo");

body.style.margin = "0";
body.style.fontFamily = "'Sansita', sans-serif";
body.style.backgroundColor = "white";
body.style.color = "#000";

header.style.backgroundColor = "red";
header.style.color = "white";
header.style.width = "100%";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";

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


newsTitle.style.textAlign = "center";
newsTitle.style.fontWeight = "900";
newsTitle.style.fontSize = "3rem";
newsTitle.style.lineHeight = "1.2";
newsTitle.style.marginTop = "40px";
newsTitle.style.maxWidth = "800px";
newsTitle.style.marginLeft = "auto";
newsTitle.style.marginRight = "auto";


function stylizujGrafike(img) {
    if (img) {
        img.style.display = "block";
        img.style.margin = "30px auto";
        img.style.maxWidth = "55%"; 
        img.style.borderRadius = "10px";
        img.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
    }
}


stylizujGrafike(newsPhoto);   
stylizujGrafike(secondPhoto); 


if (newsContent) {
    newsContent.style.maxWidth = "800px";
    newsContent.style.margin = "40px auto";
    newsContent.style.textAlign = "justify";
    newsContent.style.lineHeight = "1.8";
    newsContent.style.fontSize = "1.15rem";
    newsContent.style.fontWeight = "600";
}

const links = newsContent.querySelectorAll("a");
links.forEach(link => {
    link.style.color = "black";
    link.style.textDecoration = "none";
    link.style.fontWeight = "700";
});




const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Sansita:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const captions = document.querySelectorAll(".caption");
captions.forEach(caption => {
    caption.style.textAlign = "center";
    caption.style.fontFamily = "'Sansita', sans-serif";
    caption.style.fontWeight = "800"; 
    caption.style.fontSize = "1.1rem"; 
    caption.style.lineHeight = "1.8";
    caption.style.maxWidth = "900px";
    caption.style.margin = "25px auto";
    caption.style.color = "#111";
    caption.style.letterSpacing = "0.3px";
});
