// Oppdater hero-seksjonen med en dynamisk velkomstmelding basert på tid
function updateHeroMessage() {
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const currentHour = new Date().getHours();

    let message = 'Velkommen til Elektronikkbutikken!';
    if (currentHour >= 5 && currentHour < 12) {
        message = 'God morgen! Sjekk våre fantastiske tilbud.';
    } else if (currentHour >= 12 && currentHour < 18) {
        message = 'God ettermiddag! Utforsk vårt utvalg av elektronikk.';
    } else if (currentHour >= 18 || currentHour < 5) {
        message = 'God kveld! Vi har noe for enhver smak.';
    }

    heroTitle.textContent = message;
    heroSubtitle.textContent = 'Din favorittdestinasjon for den beste elektronikken.';
}

// Enkel hero-knapp som scroller til "Utvalgte Produkter"-seksjonen
function setupHeroCTA() {
    const heroCTAButton = document.querySelector('.hero__cta');
    const featuredProductsSection = document.querySelector('.featured-products');

    if (heroCTAButton && featuredProductsSection) {
        heroCTAButton.addEventListener('click', (event) => {
            event.preventDefault();
            featuredProductsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// Initialiser home-siden, oppdater velkomstmeldingen i hero-seksjonen og legger til smooth scrolling for hero-knappen
function initHomePage() {
    updateHeroMessage(); 
    setupHeroCTA(); 
}

// Kjør initHomePage når siden lastes
document.addEventListener('DOMContentLoaded', initHomePage);
