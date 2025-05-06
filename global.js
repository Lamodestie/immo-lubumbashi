
document.addEventListener("DOMContentLoaded", () => {
  const contactButtons = document.querySelectorAll(".btn-contact");

  contactButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "https://wa.me/243991700878";
    });
  });

  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      // Ajoute un effet de clic ou de transition si nécessaire
      link.style.color = "#1e90ff";
      setTimeout(() => {
        link.style.color = "";
      }, 300);
    });
  });
});
