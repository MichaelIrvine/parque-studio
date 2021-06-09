$(window).on('load resize orientationchange', function () {
  $('.product-slider').each(function () {
    var $carousel = $(this);
    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile
    if ($(window).width() > 620) {
      if ($carousel.hasClass('slick-initialized')) {
        $carousel.slick('unslick');
      }
    } else {
      if (!$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
          dots: true,
        });
      }
    }
  });
});

// $('.product-slider').slick({
//   infinite: false,
//   arrows: false,
//   // slidesToShow: 10,
//   // asNavFor: '.product-slider-nav',
//   vertical: true,
//   centerMode: true,

//   responsive: [
//     {
//       breakpoint: 620,
//       settings: {
//         vertical: false,
//         slidesToShow: 1,
//         centerMode: false,
//         dots: true,
//       },
//     },
//   ],
// });

// $(function () {
//   const mQ = window.matchMedia('(620px)');

//   if (mQ.matches) {
//     $('.product-slider').slick({
//       slidesToShow: 1,
//       centerMode: false,
//       dots: true,
//     });
//   }
// });

// $('.product-slider-nav').slick({
//   infinite: true,
//   arrows: false,
//   slidesToShow: 6,
//   asNavFor: '.product-slider',
//   slidesToScroll: 1,
//   focusOnSelect: true,
//   vertical: true,
//   responsive: [
//     {
//       breakpoint: 620,
//       settings: {
//         unslick: true,
//       },
//     },
//   ],
// });

// $('.product-slider-nav--mobile').slick({
//   infinite: true,
//   arrows: false,
//   slidesToShow: 5,
//   asNavFor: '.product-slider',
//   slidesToScroll: 1,
//   focusOnSelect: true,
//   horizontal: true,
// });
