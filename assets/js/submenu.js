document.addEventListener("DOMContentLoaded", () => {
  // Check for click events on the navbar burger icon
  document
    .querySelector(".navbar-burger")
    .addEventListener("click", function () {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      this.classList.toggle("is-active");
      document.querySelector(".navbar-menu").classList.toggle("is-active");
    });
  // Check for click events on the submenu links
  document.querySelectorAll("a.navbar-submenu-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Toggle "open" class on the target submenu
      document
        .querySelector(`#${this.getAttribute("data-target")}`)
        .classList.toggle("open");
    });
  });
});
