// ==========================================
// INICIALIZACIÓN CUANDO EL DOM ESTÁ LISTO
// ==========================================
document.addEventListener("DOMContentLoaded", () => {

    inicializarMenuMovil();
    inicializarAnimacionScroll();

});


// ==========================================
// MENÚ MÓVIL
// ==========================================
function inicializarMenuMovil() {

    const botonMenu = document.getElementById("boton-menu");
    const menuNavegacion = document.getElementById("menu-navegacion");

    if (!botonMenu || !menuNavegacion) return;

    botonMenu.addEventListener("click", () => {
        menuNavegacion.classList.toggle("activo");
    });

    // Cerrar menú al hacer click en enlace (mejor UX)
    const enlaces = menuNavegacion.querySelectorAll("a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", () => {
            menuNavegacion.classList.remove("activo");
        });
    });
}


// ==========================================
// ANIMACIÓN DE SCROLL (Intersection Observer)
// ==========================================
function inicializarAnimacionScroll() {

    const elementosAnimados = document.querySelectorAll(".info-contacto");

    if (!elementosAnimados.length) return;

    const observador = new IntersectionObserver((entradas, observador) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";
                observador.unobserve(entrada.target); // Optimización

            }

        });

    }, { threshold: 0.2 });

    elementosAnimados.forEach(elemento => {

        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(40px)";
        elemento.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";

        observador.observe(elemento);

    });
}


// ==========================================
// FUNCIÓN PARA GUARDAR CONTACTO (VCARD)
// ==========================================
function guardarContacto() {

    const contenidoVCard = `
BEGIN:VCARD
VERSION:3.0
FN:Felipe Saez Morales
TITLE:Desarrollador Full Stack
TEL:+56993132047
EMAIL:felipe.saezm@gmail.com
URL:https://vicard.cl
END:VCARD
`;

    const archivo = new Blob([contenidoVCard], { type: "text/vcard;charset=utf-8" });

    const enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = URL.createObjectURL(archivo);
    enlaceDescarga.download = "Felipe_Saez_Morales.vcf";

    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);

}