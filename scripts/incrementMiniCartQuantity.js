import * as cart from '@shopify/theme-cart';
import miniCartSummary from './miniCartSummary';
import updateCartCount from './updateCartCount';

const incrementCartQuantity = (key) => {
  key.disabled = true;
  let incKey = key.dataset.itemKey;
  let currentVal = parseInt(key.previousElementSibling.value);
  let newVal;

  cart.updateItem(incKey, { quantity: currentVal + 1 }).then((state) => {
    miniCartSummary(state);
    updateCartCount(state);
  });

  newVal = currentVal + 1;

  key.previousElementSibling.value = newVal;

  setTimeout(() => {
    key.disabled = false;
  }, 1000);
};

export default incrementCartQuantity;
