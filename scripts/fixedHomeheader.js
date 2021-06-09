const fixedHomeHeader = () => {
  const homeHeader = document.querySelector('body.index .header__wrapper');
  const homeHero = document.querySelector(
    'body.index #shopify-section-home-hero-image'
  );

  window.addEventListener('scroll', () => {
    if (window.scrollY >= homeHero.clientHeight) {
      homeHeader.classList.add('fixed');
    } else {
      homeHeader.classList.remove('fixed');
    }
  });
};

export default fixedHomeHeader;
