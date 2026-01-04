document.addEventListener('DOMContentLoaded', () => {
    // Subtle Reveal on Scroll
    const reveals = document.querySelectorAll('section, .project-item, .experience-item, .expertise-item');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < windowHeight - 100) {
                el.classList.add('reveal-active');
            }
        });
    }

    // Add initial styles for reveal
    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const style = document.createElement('style');
    style.textContent = `
        .reveal-active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});
