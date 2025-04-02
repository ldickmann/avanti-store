// Este script manipula a funcionalidade do menu suspenso para a visualização móvel
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const dropdownContent = document.getElementById("dropdownContent");
  const containerDropdown = document.querySelector(".container-dropdown");
  const navbarMenuTitle = document.querySelector(".navbar-menu-title");

  function toggleDropdown(event) {
    event.stopPropagation();
    dropdownContent.classList.toggle("active");
    containerDropdown.classList.toggle("active");

    // Altera o ícone conforme o estado
    if (containerDropdown.classList.contains("active")) {
      menuIcon.src = "./assets/icons/menu-icon-blue.svg";
    } else {
      menuIcon.src = "./assets/icons/menu-icon.svg";
    }
  }

  menuIcon.addEventListener("click", toggleDropdown);
  navbarMenuTitle.addEventListener("click", toggleDropdown);

  document.addEventListener("click", (event) => {
    if (
      !menuIcon.contains(event.target) &&
      !navbarMenuTitle.contains(event.target) &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownContent.classList.remove("active");
      containerDropdown.classList.remove("active");
      menuIcon.src = "./assets/icons/menu-icon.svg";
    }
  });
});
