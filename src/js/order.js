// Referanser til DOM-elementer
const cartItemsContainer = document.querySelector('.cart-summary__items');
const totalPriceElement = document.getElementById('cart-total');

// Hent handlekurv fra localStorage
function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Vis produkter i handlekurven og tømmer eksisterende innhold
function renderCartItems() {
    const cartItems = getCartItems();
    cartItemsContainer.innerHTML = ''; 
    let totalPrice = 0;

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Handlekurven er tom.</p>';
        totalPriceElement.textContent = '0 NOK';
        return;
    }

    // Gå gjennom produktene i handlekurven og viser dem
    cartItems.forEach(item => {
        totalPrice += item.price;

        cartItemsContainer.innerHTML += `
            <div class="cart-summary__item">
                <p class="cart-summary__item-name">${item.name}</p>
                <p class="cart-summary__item-price">${item.price} NOK</p>
            </div>
        `;
    });

    // Oppdater totalpris
    totalPriceElement.textContent = `${totalPrice} NOK`;
}

// Valider skjemaet
function validateForm(event) {
    event.preventDefault(); // Forhindrer standard oppførsel
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !address || !email) {
        alert('Vennligst fyll ut alle feltene i skjemaet.');
        return;
    }

    // Fullfør bestilling
    completeOrder(name, address, email);
}

// Fullfør bestilling og Tømmer handlekurv
function completeOrder(name, address, email) {
    
    localStorage.removeItem('cart');

    // Bekreftelse og naviger til startsiden
    alert(`Takk for din bestilling, ${name}!\nProduktene vil bli sendt til:\n${address}`);
    window.location.href = './index.html'; 
}

// Initialiser bestillingssiden, viser handlekurven, legger til skjema-validering 
function initOrderPage() {
    renderCartItems(); 
    orderForm.addEventListener('submit', validateForm); 
}

// Kjør initOrderPage når siden lastes
document.addEventListener('DOMContentLoaded', initOrderPage);

