document.addEventListener("DOMContentLoaded", () => {
  // Armazena as referências dos elementos do DOM em um objeto para facilitar o acesso
  const elements = {
    menuToggle: document.getElementById("menuToggle"),
    dropdownMenu: document.getElementById("dropdownMenu"),
    menuIcon: document.getElementById("menuIcon"),
    navbarMenuTitle: document.querySelector(".navbar-menu-title"),
    departamentoToggle: document.getElementById("departamentoToggle"),
    dropdownDepartamentos: document.getElementById("dropdownDepartamentos"),
  };

  // Caminho dos ícones
  const iconPaths = {
    menuDefault: "./assets/icons/menu-icon.svg",
    menuActive: "./assets/icons/menu-icon-blue.svg",
    arrowDefault: "./assets/icons/arrow-right.svg",
    arrowActive: "./assets/icons/arrow-right-blue.svg",
  };

  /**
   * Adiciona ou remove a classe "active" em uma lista de elementos.
   * @param {HTMLElement[]} elementsList - Lista de elementos a serem manipulados
   * @param {"add" | "remove"} action - A ação a ser realizada: "add" ou "remove"
   */
  function toggleClasses(elementsList, action = "add") {
    elementsList.forEach((el) => el?.classList[action]("active"));
  }

  /**
   * Alterna a exibição do menu principal e modifica o ícone do menu.
   * @param {boolean} show - Define se o menu deve ser exibido ou ocultado
   */
  function toggleMenu(show) {
    toggleClasses(
      [elements.dropdownMenu, elements.menuToggle, elements.navbarMenuTitle],
      show ? "add" : "remove"
    );
    elements.menuIcon.src = show ? iconPaths.menuActive : iconPaths.menuDefault;
  }

  /**
   * Alterna a exibição do submenu de departamentos.
   * @param {boolean} show - Define se o submenu deve ser exibido ou ocultado
   */
  function toggleDepartamentos(show) {
    toggleClasses(
      [elements.dropdownDepartamentos, elements.departamentoToggle],
      show ? "add" : "remove"
    );
  }

  /**
   * Aplica eventos de mouse (`mouseenter` e `mouseleave`) em um elemento.
   * @param {HTMLElement} element - Elemento alvo
   * @param {Function} onEnter - Função chamada ao passar o mouse
   * @param {Function} onLeave - Função chamada ao remover o mouse
   */
  function handleHover(element, onEnter, onLeave) {
    element.addEventListener("mouseenter", onEnter);
    element.addEventListener("mouseleave", onLeave);
  }

  // Eventos para exibir/ocultar o submenu de departamentos ao passar o mouse
  handleHover(
    elements.departamentoToggle,
    () => toggleDepartamentos(true),
    () => toggleDepartamentos(false)
  );
  handleHover(
    elements.dropdownDepartamentos,
    () => toggleDepartamentos(true),
    () => toggleDepartamentos(false)
  );

  // Eventos para exibir/ocultar o menu principal ao passar o mouse
  handleHover(
    elements.menuToggle,
    () => toggleMenu(true),
    () => toggleMenu(false)
  );
  handleHover(
    elements.dropdownMenu,
    () => toggleMenu(true),
    () => toggleMenu(false)
  );

  // Manipula a troca dos ícones de seta nos itens do menu ao passar o mouse
  document.querySelectorAll(".dropdown-item").forEach((item, index) => {
    const arrowImg = item.querySelector(".arrow-right");
    if (!arrowImg) return;

    const isFirst = index === 0;

    // Define os icones padrão e ao passar o mouse
    const baseSrc = isFirst ? iconPaths.arrowActive : iconPaths.arrowDefault;
    const hoverSrc = iconPaths.arrowActive;
    const leaveSrc = baseSrc;

    arrowImg.src = baseSrc;

    // Aplica eventos de mouse para trocar os ícones de seta
    handleHover(
      item,
      () => (arrowImg.src = hoverSrc),
      () => (arrowImg.src = leaveSrc)
    );
  });
});
