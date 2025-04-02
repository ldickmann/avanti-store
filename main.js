document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const dropdownContent = document.getElementById("dropdownContent");

  menuIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownContent.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (
      !menuIcon.contains(event.target) &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownContent.classList.remove("active");
    }
  });
});
