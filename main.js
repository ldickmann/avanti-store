// Este script manipula a funcionalidade do menu dropdowns.
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const menuIcon = document.getElementById("menuIcon");
  const navbarMenuTitle = document.querySelector(".navbar-menu-title");

  function showDropdown() {
    dropdownMenu.classList.add("active");
    menuToggle.classList.add("active");
    navbarMenuTitle.classList.add("active");
    menuIcon.src = "./assets/icons/menu-icon-blue.svg";
  }

  function hideDropdown() {
    dropdownMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    navbarMenuTitle.classList.remove("active");
    menuIcon.src = "./assets/icons/menu-icon.svg";
  }

  // Exibe o dropdown ao passar o mouse sobre o menu ou o próprio dropdown
  menuToggle.addEventListener("mouseenter", showDropdown);
  menuToggle.addEventListener("mouseleave", hideDropdown);
  dropdownMenu.addEventListener("mouseenter", showDropdown);
  dropdownMenu.addEventListener("mouseleave", hideDropdown);
});
