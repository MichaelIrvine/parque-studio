import * as cart from '@shopify/theme-cart';
import cartTemplate from './cartTemplate';
import removeItemFromCart from './removeItem';

const cartPage = () => {
  window.Cart = cart;

  cart.getState().then((state) => {
    cartTemplate(state);
  });

  const removeItemBtn = document.querySelectorAll('.remove-cart-item');

  removeItemBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      removeItemFromCart(btn);
    });
  });
};

export default cartPage;
