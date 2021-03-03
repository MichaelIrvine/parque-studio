import * as cart from '@shopify/theme-cart';
import cartSummary from './cartSummary';
import cartTemplate from './cartTemplate';
import incrementCartQuantity from './incrementCartQuantity';
import decrementCartQuantity from './decrementCartQuantity';
import removeItemFromCart from './removeItem';

const cartPage = () => {
  cart
    .getState()
    .then((state) => {
      // Load Cart
      cartTemplate(state);
      cartSummary(state);

      // Remove Item Button
      const removeItemBtn = document.querySelectorAll('.remove-cart-item');
      removeItemBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          removeItemFromCart(e.currentTarget);
        });
      });

      // Increment Cart Quantity
      const btnIncrement = document.querySelectorAll('.increaseQuantity');

      btnIncrement.forEach((incBtn) => {
        incBtn.addEventListener('click', (e) => {
          incrementCartQuantity(e.currentTarget, state);
        });
      });
      // Decrement Cart Quantity
      const btnDecrement = document.querySelectorAll('.decreaseQuantity');

      btnDecrement.forEach((decBtn) => {
        decBtn.addEventListener('click', (e) => {
          decrementCartQuantity(e.currentTarget);
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default cartPage;
