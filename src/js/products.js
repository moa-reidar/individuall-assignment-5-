// Hent referanser til sorteringsdropdown og produktlisten
const sortSelect = document.getElementById('sort');
const productList = document.querySelector('.products__list');

// Produktdata med beskrivelse og bilde
const products = [
    { id: 1, name: 'Smarttelefon X100', price: 7500, rating: 5, description: 'En kraftig og stilren smarttelefon med 128 GB lagring og 6,5" skjerm.', image: './assets/image/product1.jpg' },
    { id: 2, name: 'Laptop Pro 15', price: 12000, rating: 4, description: 'En bærbar PC med kraftig ytelse og elegant design.', image: './assets/image/product2.jpg' },
    { id: 3, name: 'Trådløse Ørepropper', price: 1500, rating: 5, description: 'Kompakte og stilrene ørepropper med fantastisk lydkvalitet.', image: './assets/image/product3.jpg' },
    { id: 4, name: 'Gaming Mus GX200', price: 799, rating: 4, description: 'Ergonomisk gaming-mus med høy presisjon.', image: './assets/image/product4.jpg' },
    { id: 5, name: '4K Skjerm UltraView', price: 6999, rating: 5, description: 'En krystallklar 4K-skjerm for arbeid og underholdning.', image: './assets/image/product5.jpg' },
    { id: 6, name: 'Bluetooth Høyttaler XBoom', price: 1199, rating: 4, description: 'En kompakt Bluetooth-høyttaler med kraftig lyd og lang batterilevetid.', image: './assets/image/product6.jpg' },
    { id: 7, name: 'Robotstøvsuger SmartVac', price: 3999, rating: 3, description: 'En smart robotstøvsuger som gjør rengjøringen enkel.', image: './assets/image/product7.jpg' },
    { id: 8, name: 'Kamera ProShot', price: 8599, rating: 5, description: 'Et profesjonelt kamera med høy oppløsning og avanserte funksjoner.', image: './assets/image/product8.jpg' },
    { id: 9, name: 'Gaming Headset Supreme', price: 1599, rating: 4, description: 'Et komfortabelt gaming-headset med surround-lyd.', image: './assets/image/product9.jpg' },
    { id: 10, name: 'Strømforsterker AudioMax', price: 3299, rating: 3, description: 'En strømforsterker for lydentusiaster.', image: './assets/image/product10.jpg' },
    { id: 11, name: 'Webkamera HD 1080p', price: 899, rating: 4, description: 'Et webkamera med skarp 1080p-video og god lydkvalitet.', image: './assets/image/product11.jpg' },
    { id: 12, name: 'Smart Termostat', price: 1299, rating: 5, description: 'En smart termostat som lar deg styre temperaturen fra mobilen.', image: './assets/image/product12.jpg' },
    { id: 13, name: 'Gaming Tastatur UltraKeys', price: 999, rating: 4, description: 'Et mekanisk gaming-tastatur med RGB-belysning.', image: './assets/image/product13.jpg' },
    { id: 14, name: 'Powerbank FastCharge', price: 699, rating: 4, description: 'En kompakt powerbank med rask lading.', image: './assets/image/product14.jpg' },
    { id: 15, name: 'Trådløs Lader Pro', price: 499, rating: 3, description: 'En praktisk trådløs lader for alle dine enheter.', image: './assets/image/product15.jpg' }
];

// Render produkter til DOM og tømmer produktlisten 
function renderProducts(productsToRender) {
    productList.innerHTML = ''; 

    productsToRender.forEach(product => {
       
         // Opprett produktkortets hovedcontainer
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.id = `product-${product.id}`;

        // Opprett produktbilde
        const productImage = document.createElement('img');
        productImage.classList.add('product-card__image');
        productImage.src = product.image;
        productImage.alt = product.name;

        // Opprett produktinnhold-container
        const productContent = document.createElement('div');
        productContent.classList.add('product-card__content');

        // Opprett produktnavn
        const productTitle = document.createElement('h2');
        productTitle.classList.add('product-card__title');
        productTitle.textContent = product.name;

        // Opprett produktpris
        const productPrice = document.createElement('p');
        productPrice.classList.add('product-card__price');
        productPrice.textContent = `Pris: ${product.price} NOK`;

        // Opprett produktvurdering
        const productRating = document.createElement('p');
        productRating.classList.add('product-card__rating');
        productRating.textContent = `Rating: ${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}`;

        // Opprett "Mer informasjon"-knapp
        const infoButton = document.createElement('button');
        infoButton.classList.add('product-card__button');
        infoButton.textContent = 'Mer informasjon';
        infoButton.addEventListener('click', () => openModal(product.id));

        // Opprett "Legg til i handlekurv"-knapp
        const cartButton = document.createElement('button');
        cartButton.classList.add('product-card__button', 'product-card__button--cart');
        cartButton.textContent = 'Legg til i handlekurv';
        cartButton.addEventListener('click', () => addToCart(product.id, product.name, product.price));

        // Bygger produktkortet
        productContent.appendChild(productTitle);
        productContent.appendChild(productPrice);
        productContent.appendChild(productRating);
        productContent.appendChild(infoButton);
        productContent.appendChild(cartButton);
        productCard.appendChild(productImage);
        productCard.appendChild(productContent);

        // Legger produktkortet til produktlisten
        productList.appendChild(productCard);
    });
}

// Sorteringslogikk. første billigst til dyrest. andre dyrest til billigst. tredje best rating
function sortProducts() {
    const sortValue = sortSelect.value;
    let sortedProducts = [...products];

    if (sortValue === 'price-asc') {
        sortedProducts.sort((a, b) => a.price - b.price); 
    } else if (sortValue === 'price-desc') {
        sortedProducts.sort((a, b) => b.price - a.price); 
    } else if (sortValue === 'rating') {
        sortedProducts.sort((a, b) => b.rating - a.rating); 
    }

    renderProducts(sortedProducts);
}

// Åpne modal med produktinformasjon
function openModal(productId) {
    const modal = document.getElementById('product-modal');
    const product = products.find(p => p.id === productId);

    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-image').alt = product.name;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-price').textContent = `Pris: ${product.price} NOK`;

    modal.style.display = 'flex';
}

// Lukk modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
}


// Legger til produkt i handlekurv
function addToCart(productId, productName, productPrice) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.push({
        id: productId,
        name: productName,
        price: productPrice
    });

    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartCount();

    alert(`${productName} er lagt til i handlekurven!`);
}

// Oppdater antall produkter i handlekurv-ikonet
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cartItems.length;
    document.getElementById('cart-count').textContent = cartCount;
}

// Initialiser produktsiden
function initProductsPage() {
    renderProducts(products);
    sortSelect.addEventListener('change', sortProducts);
    updateCartCount();
}

// Kjør initProductsPage når siden lastes
document.addEventListener('DOMContentLoaded', initProductsPage);

