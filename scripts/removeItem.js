import * as cart from '@shopify/theme-cart';
import cartSummary from './cartSummary';
import updateCartCount from './updateCartCount';
import { gsap } from 'gsap';

const removeItemFromCart = (key) => {
  const itemKey = key.dataset.itemKey;

  cart.removeItem(itemKey).then((state) => {
    let itemToRemove = document.getElementById(itemKey);
    const cartTl = gsap.timeline({ paused: true });

    cartSummary(state);
    updateCartCount(state);

    // Update UI to reflect removed item
    cartTl
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

    cartTl.play();

    setTimeout(() => {
      // Remove item from DOM
      itemToRemove.remove();
    }, 510);
  });
};

export default removeItemFromCart;
