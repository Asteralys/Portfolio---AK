document.addEventListener('DOMContentLoaded', () => {

    // ======================================================
    // 1. EFFET SPOTLIGHT (Le halo qui suit la souris)
    // ======================================================
    const spotlight = document.querySelector('#spotlight');
    
    if (spotlight) {
        document.addEventListener('mousemove', (e) => {
            // requestAnimationFrame permet de ne pas surcharger le navigateur
            // en attendant le prochain rafraîchissement d'écran pour dessiner
            requestAnimationFrame(() => {
                spotlight.style.setProperty('--x', e.clientX + 'px');
                spotlight.style.setProperty('--y', e.clientY + 'px');
            });
        }, { passive: true }); // Optimisation de performance
    }


    // ======================================================
    // 2. EFFET TYPEWRITER (Machine à écrire)
    // ======================================================
    const typewriterElement = document.querySelector('.typewriter');
    const textToType = "Master - Architecte Systèmes d'Information";
    let index = 0;

    function type() {
        // Si l'élément existe et qu'il reste des lettres à écrire
        if (typewriterElement && index < textToType.length) {
            typewriterElement.textContent += textToType.charAt(index);
            index++;
            // Vitesse de frappe (80ms entre chaque lettre)
            setTimeout(type, 80);
        }
    }
    
    // Lancement de l'effet après un petit délai (500ms)
    if (typewriterElement) {
        typewriterElement.textContent = '';
        setTimeout(type, 500);
    }


    // ======================================================
    // 3. FORMULAIRE DE CONTACT (Envoi sans rechargement - AJAX)
    // ======================================================
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    async function handleSubmit(event) {
        event.preventDefault(); // Empêche la page de se recharger
        
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        
        // Feedback visuel immédiat pour l'utilisateur
        btn.textContent = "Envoi en cours...";
        btn.disabled = true;

        const data = new FormData(event.target);

        try {
            // Envoi des données à Formspree
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            // Si l'envoi est un succès (Code 200)
            if (response.ok) {
                status.textContent = "Merci ! Votre message a bien été envoyé.";
                status.style.color = 'var(--accent-main)'; // Vert
                form.reset(); // Vide les champs
            } else {
                // Si Formspree renvoie une erreur
                const responseData = await response.json();
                if (responseData.errors) {
                    status.textContent = responseData.errors.map(e => e.message).join(', ');
                } else {
                    status.textContent = "Oops! Il y a eu un problème lors de l'envoi.";
                }
                status.style.color = '#ff4d4d'; // Rouge
            }
        } catch (error) {
            // Si erreur réseau (pas d'internet, etc.)
            status.textContent = "Oops! Erreur réseau, vérifiez votre connexion.";
            status.style.color = '#ff4d4d';
        } finally {
            // Dans tous les cas, on remet le bouton normal après 3 secondes
            btn.textContent = "Envoyé !";
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        }
    }

    if (form) {
        form.addEventListener("submit", handleSubmit);
    }


    // ======================================================
    // 4. BOUTON RETOUR EN HAUT (Back to Top)
    // ======================================================
    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
        // Détecter le scroll pour afficher/cacher le bouton
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }, { passive: true });

        // Action au clic : remonter doucement
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});