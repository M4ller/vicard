// ========
// Animación simple al hacer scroll
// Hace que los cursos aparezcan suavemente
// ========
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".course-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.6s ease";
        observer.observe(card);
    });

});
