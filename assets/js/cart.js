  
    // Functionality For Cart Head Total Product Count & Empty Cart Toggle
    let totalProduct = document.getElementById('total-products');
    let item = document.getElementById('item');
    let emptyCart = document.querySelector('.empty-cart');
    let cart = document.querySelector('.cart-body');

    function calculateTotalProducts(){
        if (totalProduct.innerText > 1) {
            item.innerText = ' Items';
        } else {
            item.innerText = ' Item';
        }
    }

    calculateTotalProducts();

    function emptyCartToggle() {
        if (totalProduct.innerText == 0) {
            emptyCart.classList.remove('hide');
            cart.classList.add('hide');
        } else {
            emptyCart.classList.add('hide');
            cart.classList.remove('hide');
        }
    }

    emptyCartToggle();


  //  ----------------------------------------------------------------------------------------------------------
  
  // Functionality For Cart Page Product List Close Button
  let products = document.querySelectorAll('.cart-product');
  let closeBtns = document.querySelectorAll('.cart-product .close-btn img');
  
  closeBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
          products[index].classList.add('hide');
      });
  });

//   ----------------------------------------------------------------------------------------------------------

  // Suggested Products Slider Functionality
  $(document).ready(function () {
    $('.suggested-products-slider').slick({
        slidesToShow: 4,   
        slidesToScroll: 4,  
        dots: false,   
        arrows: true,    
        infinite: true,    
        autoplay: false,  
        autoplaySpeed: 3000,
        pauseOnHover: false,
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',  
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2, 
                    slidesToScroll: 2, 
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1, 
                }
            }
        ]
    });
});
  

// ----------------------------------------------------------------------------------------------------------

// Functionality For Price Update
document.addEventListener('DOMContentLoaded', () => {
    const cartProducts = document.querySelectorAll('.cart-product'); // Select all cart products
    const subtotalElement = document.querySelector('.cart-summary .summary span span'); // Subtotal span
    const totalElement = document.querySelector('#total span span'); // Order total span

    // Function to calculate the subtotal and total
    function calculateTotal() {
        let subtotal = 0;

        cartProducts.forEach(cartProduct => {
            const quantitySelect = cartProduct.querySelector('select[name="quantity"]');
            const priceSpan = cartProduct.querySelector('#price');
            
            // Extract the base price from the original HTML structure
            const basePrice = parseFloat(priceSpan.getAttribute('data-original-price')) || 
                              parseFloat(priceSpan.textContent.replace(/,/g, '').trim()); 

            if (!isNaN(basePrice)) {
                const quantity = parseInt(quantitySelect.value); // Get the selected quantity
                const totalPrice = basePrice * quantity; // Calculate total price for this product

                priceSpan.textContent = totalPrice.toLocaleString('en-IN'); // Update price display
                subtotal += totalPrice; // Add to subtotal
            }
        });

        // Update subtotal and total in the summary
        subtotalElement.textContent = subtotal.toLocaleString('en-IN');
        totalElement.textContent = subtotal.toLocaleString('en-IN');
    }

    // Attach change event listeners to all quantity dropdowns
    cartProducts.forEach(cartProduct => {
        const quantitySelect = cartProduct.querySelector('select[name="quantity"]');

        // Store the original price on first run
        const priceSpan = cartProduct.querySelector('#price');
        priceSpan.setAttribute('data-original-price', priceSpan.textContent.replace(/,/g, '').trim());

        // Add event listener to recalculate total on quantity change
        quantitySelect.addEventListener('change', calculateTotal);
    });

    // Initial calculation on page load
    calculateTotal();
});




