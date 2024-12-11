// Oppdater handlekurv-antall i navbaren. Henter handlekurv fra localStorage, og oppdater antall varer
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []; 
    cartCountElement.textContent = cartItems.length; 
}
