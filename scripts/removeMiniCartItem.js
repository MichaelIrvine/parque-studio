import * as cart from '@shopify/theme-cart';
import miniCartSummary from './miniCartSummary';
import updateCartCount from './updateCartCount';
import { gsap } from 'gsap';

const removeItemFromMiniCart = (key) => {
  const itemKey = key.dataset.itemKey;

  cart.removeItem(itemKey).then((state) => {
    let itemToRemove = document.getElementById(itemKey);
    const miniCartTl = gsap.timeline({ paused: true });

    miniCartSummary(state);
    updateCartCount(state);

    // Update UI to reflect removed item
    miniCartTl
      .to(itemToRemove, {
        delay: 0,
        duration: 0.3,
        opacity: 0,
        ease: 'power2.out',
      })
      .to(itemToRemove, {
        delay: 0,
        duration: 0.2,
        height: 0,
      });

    miniCartTl.play();

    setTimeout(() => {
      // Remove item from DOM
      itemToRemove.remove();
    }, 510);
  });
};

export default removeItemFromMiniCart;
