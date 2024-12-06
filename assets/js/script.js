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


// Functionality For Product Details Page Gallery
document.addEventListener('DOMContentLoaded', () => {
    const mainImg = document.querySelector('.gallery-main-img img'); // Main image element
    const topImages = document.querySelectorAll('.gallery-top .gallery-img-row img'); // Top row images
    const bottomImages = document.querySelectorAll('.gallery-bottom .gallery-img-row img'); // Bottom row images

    // Set the main image to the first image in the top row initially
    mainImg.setAttribute('src', topImages[0].getAttribute('src'));

    // Function to update the main image by setting its src attribute
    const updateMainImage = (src) => {
        mainImg.setAttribute('src', src);
    };

    // Add event listeners for the top images
    topImages.forEach(image => {
        image.addEventListener('click', () => {
            updateMainImage(image.getAttribute('src')); // Update the main image when a top row image is clicked
        });
    });

    // Add event listeners for the bottom images
    bottomImages.forEach(image => {
        image.addEventListener('click', () => {
            updateMainImage(image.getAttribute('src')); // Update the main image when a bottom row image is clicked
        });
    });
});




