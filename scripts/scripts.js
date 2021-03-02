// Imports for @Shopify/theme-cart
import 'unfetch/polyfill';
import 'es6-promise/auto';
import * as cart from '@shopify/theme-cart';

// Imports
import cartDrawer from './cartDrawer';
import fitChartModal from './fitChartModal';
import addToCart from './addToCart';
import productTabs from './productTabs';
import cartPage from './cartPage';
import updateCartCount from './updateCartCount';
import miniCart from './miniCart';

// Imported Functions
cartDrawer();
productTabs();

if (document.body.classList.contains('product')) {
  fitChartModal();
  addToCart();
}
if (document.body.classList.contains('cart')) {
  cartPage();
}

// Cart State and Functions
// -- On page load - grab the items in Cart State
cart.getState().then((state) => {
  updateCartCount(state);

  if (window.location.pathname !== '/cart') {
    miniCart(state);
  }
});

// Lazy Load
document.addEventListener('DOMContentLoaded', function () {
  let lazyloadImages;
  let options = {
    root: null,
    rootMargin: '0px 0px 50px 0px',
    threshold: 0.1,
  };

  if ('IntersectionObserver' in window) {
    lazyloadImages = document.querySelectorAll('.lazy');
    let imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          let image = entry.target;
          // image.srcset = image.dataset.srcset;
          image.src = image.dataset.src ? image.dataset.src : image.srcset;

          image.classList.remove('blurUp');

          observer.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    console.log('fallback');
    let lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll('.lazy');

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        let scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener('scroll', lazyload);
          window.removeEventListener('resize', lazyload);
          window.removeEventListener('orientationChange', lazyload);
        }
      }, 20);
    }

    document.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
    window.addEventListener('orientationChange', lazyload);
  }
});
