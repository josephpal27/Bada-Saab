// Banner Slider Functionality
$(document).ready(function () {
    $('.banner-slider').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      fade: false,
      pauseOnHover: false,
      cssEase: 'linear',
      prevArrow: '<button class="slick-prev" aria-label="Previous"></button>',
      nextArrow: '<button class="slick-next" aria-label="Next"></button>',
    });
  });


  // New Arrivals Slider Functionality
  $(document).ready(function () {
    $('.new-arrival-slider').slick({
        slidesToShow: 4,   
        slidesToScroll: 1,  
        dots: false,   
        arrows: true,    
        infinite: true,    
        autoplay: true,  
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


// Signature Slider Functionality
$(document).ready(function () {
  $('.signature-slider').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    fade: false,
    pauseOnHover: false,
    // cssEase: 'linear',
    // speed: 1000,
    prevArrow: '<button class="slick-prev"></button>',
    nextArrow: '<button class="slick-next"></button>', 
  });
});
 

  // Festive Edit Slider Functionality
  $(document).ready(function () {
    $('.festive-slider').slick({
        slidesToShow: 4,   
        slidesToScroll: 1,  
        dots: false,   
        arrows: true,    
        infinite: true,    
        autoplay: true,  
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
  

// Functionality For Collection Page Product Range Input
const rangeInput = document.getElementById('price-range');
const priceDisplay = document.querySelector('.range-price h5');

rangeInput.min = 0;
rangeInput.max = 10000;
rangeInput.step = 1;
rangeInput.value = 0;

rangeInput.addEventListener('input', () => {
    priceDisplay.textContent = rangeInput.value; 
});


// Functionality For Collection Card Heart Icon
document.querySelectorAll('.collection-card .card-img i').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.add('active');
    });
});

