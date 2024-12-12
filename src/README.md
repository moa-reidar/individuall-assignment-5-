
link github: https://github.com/moa-reidar/individuall-assignment-5-.git

link netlify: https://675a2e954b7dd2a4bd735149--glowing-arithmetic-74301b.netlify.app/

1. Planning and Structuring
I started with a clear idea to create a website for an electronics store.
The website includes three main pages:

Home Page (Home) – Introduction to the store.
Product Page (Products) – A list of products with sorting and product information.
Order Page (Order) – Displays the shopping cart and allows the user to place an order.

2. HTML
Home (index.html)
Built a welcoming page with:

A navigation menu (navbar) for navigating between pages.
A section introducing the purpose of the store.
A selection of featured products with a link to the product page.
Product Page (products.html)
Included a list of 15 products.
Each product card contains:

An image, name, price, rating, and two buttons:
"More Information" – Opens a modal with detailed information about the product.
"Add to Cart" – Adds the product to the shopping cart.
Order Page (order.html)
Displays products added to the shopping cart.
Summarizes the total price and allows users to place an order via a form.

3. CSS
I created several modular CSS files for easier maintenance:

reset.css: Removes default browser styling.
variables.css: Defines global variables for colors, spacing, and typography.
navbar.css: Styles the navigation menu.
style.css: General styles applied to the entire project.
products.css: Specific styles for the product page, including the modal.
order.css: Styles for the order page.

Design Choices
I implemented a responsive design focusing on flexibility and ease of use.
Ensured that product cards are symmetrical using fixed height and flexbox.
The modals have a centered view with a dimmed background for focus.

4. JavaScript
Common Functionality (common.js)
Handles the shopping cart using localStorage.
Updates the cart count in the navigation menu.
Product Page (products.js)
Functions for:

Rendering Products – Dynamically generates product cards based on a list.
Modals – Displays product information in a popup.
Sorting – Allows sorting products by price (ascending/descending) and rating.
Shopping Cart – Adds products to the shopping cart.
Order Page (order.js)
Functions for:

Displaying products in the cart.
Calculating the total price.
Form validation for submitting orders.

5. Functionality
Navigation Menu (navbar)
Makes it easy to navigate between pages.
Includes a cart icon that updates dynamically.
Product List
Displays all products with relevant information.
Allows sorting for easier filtering of products.
Modals
Displays extended information about a product without leaving the page.
Shopping Cart
Allows users to add products and displays the total in the navigation menu and order page.

6. Testing and Debugging
Ensured that products display correctly and modals function as intended.
Resolved issues with unsymmetrical product cards and missing buttons.
Tested saving and retrieving cart data from localStorage.

7. Result
You now have a fully functional electronics store with:

A modern and responsive design.
Dynamic handling of products and the shopping cart.
User-friendly features like modals and sorting.

8. Future Possibilities
Expanding functionality with a backend and database to store products and orders.
Adding more categories and a search function.
Further enhancing the design with animations and additional colors.