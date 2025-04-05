/* Quando o usuário passa o mouse sobre o botão, o dropdown é exibido.
 * Quando o mouse sai do botão ou do dropdown, o dropdown é ocultado após um pequeno atraso.
 */
let hideTimeout; // Variável para armazenar o timeout

function showDropdown() {
  clearTimeout(hideTimeout); // Limpa o timeout se o mouse entrar novamente
  document.getElementById("dropdownAllCategories").classList.add("show");
}

function hideDropdown() {
  hideTimeout = setTimeout(function () {
    document.getElementById("dropdownAllCategories").classList.remove("show");
  }, 100); // Tempo de espera antes de ocultar o dropdown em milissegundos
}

var dropbtn = document.querySelector(".dropbtn");
var dropdown = document.getElementById("dropdownAllCategories");

// Adiciona os eventos de mouseenter e mouseleave ao botão e ao dropdown
dropbtn.addEventListener("mouseenter", showDropdown);
dropbtn.addEventListener("mouseleave", hideDropdown);

// Adiciona os eventos de mouseenter e mouseleave ao dropdown
dropdown.addEventListener("mouseenter", showDropdown);
dropdown.addEventListener("mouseleave", hideDropdown);
