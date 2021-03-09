$('.product-slider')[0].slick.setPosition();
$('.product-slider').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 5,
  asNavFor: '.product-slider-nav',
  vertical: true,
  centerMode: true,
});
$('.product-slider-nav')[0].slick.setPosition();
$('.product-slider-nav').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 6,
  asNavFor: '.product-slider',
  slidesToScroll: 1,
  focusOnSelect: true,
  vertical: true,
});
