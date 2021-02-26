import * as cart from '@shopify/theme-cart';
import updateCartCount from './updateCartCount';
import miniCart from './miniCart';
import cartTemplate from './cartTemplate';

const addToCart = () => {
  const variantOption = document.querySelector('#productSelect');
  let selectedVariantId = parseInt(
    variantOption.options[variantOption.selectedIndex].value
  );
  const addToCartBtn = document.querySelector('#AddToCart');
  const message = document.querySelector('.cart-message');

  variantOption.addEventListener('change', () => {
    selectedVariantId = parseInt(
      variantOption.options[variantOption.selectedIndex].value
    );
  });

  addToCartBtn.addEventListener('click', () => {
    cart
      .addItem(selectedVariantId)
      .then((item) => {
        cart.getState().then((state) => {
          updateCartCount(state);
          cartTemplate(state);
          miniCart(state);
        });
        // Update UI to reflect changes
        addToCartBtn.textContent = `Adding...`;
        addToCartBtn.disabled = true;
        setTimeout(() => {
          addToCartBtn.textContent = `Add to Cart`;
          addToCartBtn.disabled = false;
          message.textContent = `Your item has been added to the cart`;
        }, 1400);
        // Update cart counter
      })
      .catch((error) => {
        console.log(error);
        message.textContent = `Sorry, we are out of stock in that size`;
      });
  });
};

export default addToCart;
