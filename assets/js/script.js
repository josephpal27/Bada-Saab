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
  

// Functionality For Footer Section
// let footIconBox = document.querySelectorAll('.footer-icon-row .footer-icon');
// let footIcon = document.querySelectorAll('.footer-icon-row .footer-icon i');

// footIconBox.forEach((box, i) => {
//     box.addEventListener('mouseenter', () => {
//         footIcon[i].style.color = '#634c1b';
//     })
//     box.addEventListener('mouseleave', () => {
//         footIcon[i].style.color = '#fff';
//     })
// })