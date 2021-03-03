import * as cart from '@shopify/theme-cart';
import cartSummary from './cartSummary';
import updateCartCount from './updateCartCount';

const decrementCartQuantity = (key) => {
  key.disabled = true;
  let decKey = key.dataset.itemKey;
  let currentVal = parseInt(key.nextElementSibling.value);
  let newVal;

  if (currentVal > 1) {
    cart.updateItem(decKey, { quantity: currentVal - 1 }).then((state) => {
      cartSummary(state);
      updateCartCount(state);
    });

    newVal = currentVal - 1;

    key.nextElementSibling.value = newVal;
  }
  setTimeout(() => {
    key.disabled = false;
  }, 1000);
};

export default decrementCartQuantity;
