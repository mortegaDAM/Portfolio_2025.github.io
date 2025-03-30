document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // Alterna la clase "active"
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active"); // Oculta el menú si se hace clic fuera
        }
    });
});