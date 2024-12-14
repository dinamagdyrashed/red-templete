
document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelector('.bars');
    const navLinks = document.querySelector('.nav-links');
    bars.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
    window.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !bars.contains(e.target)) {
            navLinks.classList.remove('show');
        }
    });
});