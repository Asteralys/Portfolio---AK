document.addEventListener('DOMContentLoaded', () => {

    // --- Spotlight Effect ---
    const spotlight = document.querySelector('#spotlight');
    if (spotlight) {
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                spotlight.style.setProperty('--x', e.clientX + 'px');
                spotlight.style.setProperty('--y', e.clientY + 'px');
            });
        });
    }

    // --- Typewriter Effect ---
    const typewriterElement = document.querySelector('.typewriter');
    const textToType = "Master - Architecte Systèmes d'Information";
    let index = 0;

    function type() {
        if (typewriterElement && index < textToType.length) {
            typewriterElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 100);
        } else if (typewriterElement) {
            typewriterElement.parentElement.classList.add('typing-done');
        }
    }
    
    if (typewriterElement) {
        typewriterElement.textContent = '';
        type();
    }

    // --- AJAX Form Submission for Formspree ---
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                status.textContent = "Merci pour votre message !";
                status.style.color = 'var(--accent-main)';
                form.reset();
            } else {
                const responseData = await response.json();
                status.textContent = responseData.errors ? responseData.errors.map(e => e.message).join(', ') : "Oops! Il y a eu un problème.";
                status.style.color = '#ff4d4d';
            }
        } catch (error) {
            status.textContent = "Oops! Erreur réseau.";
            status.style.color = '#ff4d4d';
        }
    }

    if (form) {
        form.addEventListener("submit", handleSubmit);
    }

    // --- Back-to-Top Button ---
    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
