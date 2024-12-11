// Hent referanser til sorteringsdropdown og produktlisten
const sortSelect = document.getElementById('sort');
const productList = document.querySelector('.products__list');

// Produktdata med beskrivelse og bilde
const products = [
    { id: 1, name: 'Smarttelefon X100', price: 7500, rating: 5, description: 'En kraftig og stilren smarttelefon med 128 GB lagring og 6,5" skjerm.', image: './assets/images/product1.jpg' },
    { id: 2, name: 'Laptop Pro 15', price: 12000, rating: 4, description: 'En bærbar PC med kraftig ytelse og elegant design.', image: './assets/images/product2.jpg' },
    { id: 3, name: 'Trådløse Ørepropper', price: 1500, rating: 5, description: 'Kompakte og stilrene ørepropper med fantastisk lydkvalitet.', image: './assets/images/product3.jpg' },
    { id: 4, name: 'Gaming Mus GX200', price: 799, rating: 4, description: 'Ergonomisk gaming-mus med høy presisjon.', image: './assets/images/product4.jpg' },
    { id: 5, name: '4K Skjerm UltraView', price: 6999, rating: 5, description: 'En krystallklar 4K-skjerm for arbeid og underholdning.', image: './assets/images/product5.jpg' },
    { id: 6, name: 'Bluetooth Høyttaler XBoom', price: 1199, rating: 4, description: 'En kompakt Bluetooth-høyttaler med kraftig lyd og lang batterilevetid.', image: './assets/images/product6.jpg' },
    { id: 7, name: 'Robotstøvsuger SmartVac', price: 3999, rating: 3, description: 'En smart robotstøvsuger som gjør rengjøringen enkel.', image: './assets/images/product7.jpg' },
    { id: 8, name: 'Kamera ProShot', price: 8599, rating: 5, description: 'Et profesjonelt kamera med høy oppløsning og avanserte funksjoner.', image: './assets/images/product8.jpg' },
    { id: 9, name: 'Gaming Headset Supreme', price: 1599, rating: 4, description: 'Et komfortabelt gaming-headset med surround-lyd.', image: './assets/images/product9.jpg' },
    { id: 10, name: 'Strømforsterker AudioMax', price: 3299, rating: 3, description: 'En strømforsterker for lydentusiaster.', image: './assets/images/product10.jpg' },
    { id: 11, name: 'Webkamera HD 1080p', price: 899, rating: 4, description: 'Et webkamera med skarp 1080p-video og god lydkvalitet.', image: './assets/images/product11.jpg' },
    { id: 12, name: 'Smart Termostat', price: 1299, rating: 5, description: 'En smart termostat som lar deg styre temperaturen fra mobilen.', image: './assets/images/product12.jpg' },
    { id: 13, name: 'Gaming Tastatur UltraKeys', price: 999, rating: 4, description: 'Et mekanisk gaming-tastatur med RGB-belysning.', image: './assets/images/product13.jpg' },
    { id: 14, name: 'Powerbank FastCharge', price: 699, rating: 4, description: 'En kompakt powerbank med rask lading.', image: './assets/images/product14.jpg' },
    { id: 15, name: 'Trådløs Lader Pro', price: 499, rating: 3, description: 'En praktisk trådløs lader for alle dine enheter.', image: './assets/images/product15.jpg' }
];

