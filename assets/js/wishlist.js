
// Functionality For Wishlist Head Total Product Count
let totalProduct = document.querySelector('.wishlist-head #total-products');
let totalProductItem = document.querySelector('.wishlist-head #item');

function calculateProducts(){
    if (totalProduct.innerText > 1) {
        totalProductItem.innerText = ' Items';
    } else {
        totalProductItem.innerText = ' Item';
    }
}

calculateProducts();

// ----------------------------------------------------------------------------------------------------------

// Functionality For Wishlist Products Remove Buttom
let wishlistCards = document.querySelectorAll('.wishlist-card');
let wishlistRemoveBtns = document.querySelectorAll('.wishlist-card .remove-btn i');

wishlistRemoveBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        wishlistCards[index].classList.add('hide');
    })
})

