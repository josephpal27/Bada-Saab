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


  // ----------------------------------------------------------------------------------------------------------

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
                breakpoint: 576, 
                settings: {
                    slidesToShow: 1, 
                }
            }
        ]
    });
});


// ----------------------------------------------------------------------------------------------------------

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

 
// ----------------------------------------------------------------------------------------------------------

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


// ----------------------------------------------------------------------------------------------------------

// Functionality For Collection Card Heart Icon
document.querySelectorAll('.collection-card .card-img i').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.add('active');
    });
});

// ----------------------------------------------------------------------------------------------------------


// Functionality For Product Details Page Gallery
document.addEventListener('DOMContentLoaded', () => {
    const mainImg = document.querySelector('.gallery-main-img img');
    const topImages = document.querySelectorAll('.gallery-top .gallery-img-row img');
    const bottomImages = document.querySelectorAll('.gallery-bottom .gallery-img-row img');

    mainImg.setAttribute('src', topImages[0].getAttribute('src'));

    const updateMainImage = (src) => {
        mainImg.setAttribute('src', src);
    };

    topImages.forEach(image => {
        image.addEventListener('click', () => {
            updateMainImage(image.getAttribute('src'));
        });
    });

    bottomImages.forEach(image => {
        image.addEventListener('click', () => {
            updateMainImage(image.getAttribute('src'));
        });
    });
});

// ----------------------------------------------------------------------------------------------------------

// Functionality For Custom Size Box Toggle
let customCheckbox = document.querySelector('#custom-size input[type="checkbox"]');
let customText = document.querySelector('#custom-size span');
let customBox = document.querySelector('.custom-size-box');

customText.addEventListener('click', () => {
    customBox.classList.toggle('hide');
    if (customCheckbox.checked) {
        customCheckbox.checked = false;
    } else {
        customCheckbox.checked = true;
    }
});

customCheckbox.addEventListener('click', () => {
    customBox.classList.toggle('hide');
});


// Functionality For product Details Page Favourite Icon
let heartBtn = document.querySelector('.product-details-right .btn-row .heart-btn');
heartBtn.addEventListener('click', () => {
    heartBtn.classList.toggle('fa-regular');
    heartBtn.classList.toggle('fa-solid');
})

// ----------------------------------------------------------------------------------------------------------


// Functionality For Product Details Page Modal
let viewSizeChart = document.querySelector('#view-size-chart');
let modalCloseBtn = document.querySelector('#modal-close-btn');

viewSizeChart.addEventListener('click', () => {
    $('#sizeChartModal').modal('show');
});
modalCloseBtn.addEventListener('click', () => {
    $('#sizeChartModal').modal('hide');
});

// -------------------------------------------------------------------------------------------------------------------


// Functionality For Product Details Page Share Button
document.querySelector('.share-btn').addEventListener('click', async () => {
    const currentProductLink = window.location.href; // Get the current page URL

    // Copy the link to the clipboard
    try {
        await navigator.clipboard.writeText(currentProductLink);
        console.log('Link copied to clipboard: ' + currentProductLink);
    } catch (err) {
        console.error('Failed to copy link: ', err);
    }

    // Use Web Share API for sharing options
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Check this product!',
                text: 'Check out this amazing product:',
                url: currentProductLink,
            });
            console.log('Shared successfully!');
        } catch (err) {
            console.error('Error sharing: ', err);
            }
        } else {
            alert('Share option is not supported in this browser. The link is copied to your clipboard.');
        }
    });


    // -------------------------------------------------------------------------------------------------------------------

    








