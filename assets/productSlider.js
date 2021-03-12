$('.product-slider').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 5,
  asNavFor: '.product-slider-nav',
  vertical: true,
  centerMode: true,

  responsive: [
    {
      breakpoint: 620,
      settings: {
        vertical: false,
        slidesToShow: 1,
        centerMode: false,
        dots: true,
      },
    },
  ],
});

$('.product-slider-nav').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 6,
  asNavFor: '.product-slider',
  slidesToScroll: 1,
  focusOnSelect: true,
  vertical: true,
  responsive: [
    {
      breakpoint: 620,
      settings: {
        unslick: true,
      },
    },
  ],
});

$('.product-slider-nav--mobile').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 5,
  asNavFor: '.product-slider',
  slidesToScroll: 1,
  focusOnSelect: true,
  horizontal: true,
});
