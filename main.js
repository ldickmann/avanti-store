/* Quando o usuário clica no botão,
alterne entre ocultar e mostrar o conteúdo suspenso */
function dropdownFunction() {
  document.getElementById("dropdownAllCategories").classList.toggle("show");
}

// Fecha o menu suspenso se o usuário clicar fora dele
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
