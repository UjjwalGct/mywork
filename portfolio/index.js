



document.addEventListener("DOMContentLoaded", function () {
  const navToggler = document.querySelector("[data-nav-toggler]");

  
  const navbar = document.querySelector("[data-navbar]"); // Ensure your `<nav>` has `data-navbar`

  navToggler.addEventListener("click", function () {

      navbar.classList.toggle("active");
                                               // Ensure `.active` is styled properly in CSS
  });
});


