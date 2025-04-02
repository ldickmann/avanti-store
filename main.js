// Este script manipula a funcionalidade do menu dropdowns.
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const menuIcon = document.getElementById("menuIcon");
  const navbarMenuTitle = document.querySelector(".navbar-menu-title");

  /**
   * Exibe o menu suspenso ativando seus elementos.
   *
   * - Adiciona a classe "active" ao dropdownMenu para mostrar o menu suspenso.
   * - Adiciona a classe "active" ao menuToggle para indicar o estado alternado.
   * - Adiciona a classe "active" ao navbarMenuTitle para destacar o título da barra de navegação.
   * - Altera a fonte do menuIcon para exibir o ícone de menu azul.
   */
  function showDropdown() {
    dropdownMenu.classList.add("active");
    menuToggle.classList.add("active");
    navbarMenuTitle.classList.add("active");
    menuIcon.src = "./assets/icons/menu-icon-blue.svg";
  }

  /**
   * Oculta o menu suspenso.
   *
   * Esta função remove a classe "ativa" dos elementos do menu suspenso, alternância de menu e título do menu da barra de navegação
   * para garantir que o menu suspenso fique oculto e redefine a fonte do ícone do menu para a imagem padrão.
   */
  function hideDropdown() {
    dropdownMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    navbarMenuTitle.classList.remove("active");
    menuIcon.src = "./assets/icons/menu-icon.svg";
  }

  // Exibe o dropdown ao passar o mouse sobre o menu.
  menuToggle.addEventListener("mouseenter", showDropdown);
  menuToggle.addEventListener("mouseleave", hideDropdown);
  dropdownMenu.addEventListener("mouseenter", showDropdown);
  dropdownMenu.addEventListener("mouseleave", hideDropdown);

  // Manipula a troca do icone de seta ao passar o mouse
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  dropdownItems.forEach((item) => {
    const arrowImg = item.querySelector(".arrow-right");
    if (arrowImg) {
      item.addEventListener("mouseenter", () => {
        arrowImg.src = "./assets/icons/arrow-right-blue.svg";
      });
      item.addEventListener("mouseleave", () => {
        arrowImg.src = "./assets/icons/arrow-right.svg";
      });
    }
  });
});
