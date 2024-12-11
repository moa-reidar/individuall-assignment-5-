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
