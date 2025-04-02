// Este script manipula a funcionalidade do menu suspenso para a visualização móvel
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const menuIcon = document.getElementById("menuIcon");
  const navbarMenuTitle = document.querySelector(".navbar-menu-title");

  function toggleDropdown(event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
    navbarMenuTitle.classList.toggle("active");

    // Altera o ícone conforme o estado
    if (menuToggle.classList.contains("active")) {
      menuIcon.src = "./assets/icons/menu-icon-blue.svg";
    } else {
      menuIcon.src = "./assets/icons/menu-icon.svg";
    }
  }

  menuToggle.addEventListener("click", toggleDropdown);
  navbarMenuTitle.addEventListener("click", toggleDropdown);

  document.addEventListener("click", (event) => {
    if (
      !menuToggle.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("active");
      menuToggle.classList.remove("active");
      navbarMenuTitle.classList.remove("active");
      menuIcon.src = "./assets/icons/menu-icon.svg";
    }
  });
});
