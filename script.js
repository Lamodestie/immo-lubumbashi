
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    const searchBtn = document.querySelector(".search-btn");
    const contactBtn = document.querySelector(".contact-btn");

    searchBtn.addEventListener("click", () => {
        alert("Fonction de recherche en cours de développement.");
    });

    contactBtn.addEventListener("click", () => {
        alert("Contactez-nous à : modestemohila78@gmail.com");
    });
});
