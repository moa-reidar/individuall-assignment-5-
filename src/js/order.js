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
