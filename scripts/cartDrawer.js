import { gsap } from 'gsap';
import * as cart from '@shopify/theme-cart';

const cartDrawer = () => {
  const body = document.querySelector('body');
  const cartOpen = document.querySelector('#mini-cart-drawer-open');
  const cartClose = document.querySelector('#mini-cart-drawer-close');
  const itemsWrapper = document.querySelector('.mini-cart-items__wrapper');
  const tl = gsap.timeline({ paused: true });

  // Mini Cart
  // -- Grab Data From cart.state
  cart.getState().then((state) => {
    // console.log(state);
    miniCart(state);
  });
  // -- Map over data and build innerHTML for mini-cart__wrapper
  // -- Append to mini cart
  function miniCart(state) {
    itemsWrapper.innerHTML = state.items.map((item) => {
      return `<div>
            <div class="aspect__wrapper _1x1">
              <img
                src="${item.featured_image.url}"
                alt="${item.featured_image.alt}"
                class="lazy blurUp lazy-reveal"
              />
            </div>
          </div>
          <div>
            <div class="mini-cart-drawer__title__wrapper">
              <h4 class="mini-cart-drawer__product-title">
                ${item.product_title}
              </h4>
              <p class="font-prestige --small">
                ${item.variant_title}
              </p>
              <p class="font-prestige">
                ${new Intl.NumberFormat().format(item.price)}
              </p>
            </div>          
          </div>
        </div>
      `;
    });
  }

  tl.to(body, { duration: 0, overflow: 'hidden' })
    .to('.screen', { duration: 0, minHeight: '100vh' })
    .to('.screen', {
      delay: 0.1,
      duration: 0.3,
      opacity: 1,
      ease: 'power2.out',
    })
    .to('.mini-cart-drawer__wrapper', {
      delay: 0,
      duration: 0.3,
      x: 0,
      ease: 'power2.out',
    });

  cartOpen.addEventListener('click', function () {
    tl.play();
  });
  cartClose.addEventListener('click', function () {
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  });
};

export default cartDrawer;
