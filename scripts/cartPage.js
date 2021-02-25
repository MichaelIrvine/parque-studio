import * as cart from '@shopify/theme-cart';
import removeItem from './removeItem';

const cartPage = () => {
  let state;
  const removeItemBtn = document.querySelectorAll('.remove-cart-item');

  // cart.getState().then((state) => (state = state));

  removeItemBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      // console.log(btn.id);
      removeItem(btn);
    });
  });
};

export default cartPage;
