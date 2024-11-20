// Sélectionne tous les liens et les contenus
const links = document.querySelectorAll(".nav ul li");
const contents = document.querySelectorAll(".hidden");
const button = document.querySelector(".nav-mobile");
const navContainer = document.querySelector(".nav");

// Ajoute un gestionnaire d'événements à chaque lien
links.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.id; // Récupère l'ID du lien cliqué
    console.log(targetId);

    // Basculer l'affichage des contenus
    contents.forEach((content) => {
      if (content.classList.contains(targetId)) {
        content.classList.toggle("active"); // Toggle le contenu correspondant
      } else {
        content.classList.remove("active"); // Cache les autres contenus
      }
    });
  });
});

button.addEventListener("click", () => {
  navContainer.classList.toggle("active2");
});
