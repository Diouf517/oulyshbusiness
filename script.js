// Liste des images de la galerie
const images = [
    {src: "images/event1.jpg", caption: "Décoration mariage"},
    {src: "images/event2.jpg", caption: "Décoration anniversaire"},
    {src: "images/event3.jpg", caption: "Décoration entreprise"},
    {src: "images/event4.jpg", caption: "Décoration salon"}
];

let currentIndex = 0;
let zoomLevel = 1;

// ✅ Ouvrir la lightbox
function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "flex";
    setTimeout(() => lightbox.classList.add("show"), 50);
    updateLightbox();
}

// ✅ Fermer la lightbox avec fade-out
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("show");
    setTimeout(() => {
        lightbox.style.display = "none";
    }, 500);
}

// ✅ Changer d’image
function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateLightbox();
}

// ✅ Mettre à jour l’image, la légende et le bouton Télécharger
function updateLightbox() {
    const img = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
    const downloadBtn = document.getElementById("download-btn");

    img.classList.remove("show");
    img.src = images[currentIndex].src;
    caption.innerText = images[currentIndex].caption;
    downloadBtn.href = images[currentIndex].src;

    zoomLevel = 1;
    img.style.transform = "scale(1)";

    setTimeout(() => img.classList.add("show"), 50);
}

// ✅ Fonction Zoom
function zoomImage(direction) {
    const img = document.getElementById("lightbox-img");
    zoomLevel += direction * 0.2;
    if (zoomLevel < 0.5) zoomLevel = 0.5;
    if (zoomLevel > 2) zoomLevel = 2;
    img.style.transform = `scale(${zoomLevel})`;
}

// ✅ Navigation au clavier
document.addEventListener("keydown", function(event) {
    const lightbox = document.getElementById("lightbox");
    const isVisible = window.getComputedStyle(lightbox).display !== "none";

    if (isVisible) {
        if (event.key === "ArrowLeft") {
            changeImage(-1);
        } else if (event.key === "ArrowRight") {
            changeImage(1);
        } else if (event.key === "Escape") {
            closeLightbox();
        }
    }
});

// ✅ Menu burger
function toggleMenu() {
    const menu = document.getElementById("menu"); // Vérifie que ton nav a bien id="menu"
    menu.classList.toggle("show");
}
