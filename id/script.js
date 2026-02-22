document.addEventListener("DOMContentLoaded", () => {
    
    // --- Lógica del Menú Mobile ---
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // --- Animación de Scroll (Intersection Observer) ---
    const cards = document.querySelectorAll(".course-card, .contact-info");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.8s ease-out";
        observer.observe(card);
    });
});