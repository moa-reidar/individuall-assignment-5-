// Oppdater handlekurv-antall i navbaren. Henter handlekurv fra localStorage, og oppdater antall varer
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []; 
    cartCountElement.textContent = cartItems.length; 
}

// Legg til produkt i handlekurv og Henter handlekurv fra localStorage
function addToCart(productId, productName, productPrice) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];  

    // Legg til nytt produkt
    cartItems.push({
        id: productId,
        name: productName,
        price: productPrice
    });

    // Lagre oppdatert handlekurv i localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Oppdater handlekurv-antall i navbaren
    updateCartCount();

    // Viser en bekreftelse
    alert(`${productName} er lagt til i handlekurven!`);
}

// Initialiser felles funksjoner, og  Oppdater handlekurv-antall når siden lastes
function initCommon() {
    updateCartCount();  
}

// Kjør initCommon når skriptet lastes
document.addEventListener('DOMContentLoaded', initCommon);
