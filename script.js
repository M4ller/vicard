// ========
// Animación al hacer scroll
// Hace que las tarjetas aparezcan suavemente
// ========
document.addEventListener("DOMContentLoaded", () => {

    const tarjetas = document.querySelectorAll(".tarjeta-item");

    const observador = new IntersectionObserver(entradas => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    tarjetas.forEach(tarjeta => {
        tarjeta.style.opacity = "0";
        tarjeta.style.transform = "translateY(40px)";
        tarjeta.style.transition = "0.6s ease";
        observador.observe(tarjeta);
    });

    // ========
    // Menú hamburguesa para móvil
    // ========
    const botonMenu = document.getElementById("boton-menu");
    const menuNavegacion = document.getElementById("menu-navegacion");

    if (botonMenu && menuNavegacion) {
        botonMenu.addEventListener("click", () => {
            menuNavegacion.classList.toggle("activo");
        });
    }

});