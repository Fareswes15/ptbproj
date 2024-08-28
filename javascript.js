let totalPrice = 0;
let cartItems = [];

document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
       
        const planeName = this.parentElement.querySelector('.card-title').textContent;
        const planePriceText = this.parentElement.querySelector('.card-text').textContent;
        
        const planePrice = parseFloat(planePriceText.replace('Price: $', '').replace(/,/g, ''));
        
        totalPrice += planePrice;

        cartItems.push(`${planeName}: $${planePrice.toLocaleString()}`);

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('totalPrice', totalPrice);
    });
});
