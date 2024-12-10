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
  