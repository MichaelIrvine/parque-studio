import * as cart from '@shopify/theme-cart';
import updateCartCount from './updateCartCount';
import miniCart from './miniCart';

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
        console.log(item);
        cart.getState().then((state) => {
          updateCartCount(state);
          miniCart(state);
        });
        // Update UI to reflect changes
        addToCartBtn.textContent = `Adding...`;
        addToCartBtn.disabled = true;
        setTimeout(() => {
          addToCartBtn.textContent = `Add to Cart`;
          addToCartBtn.disabled = false;
          message.innerHTML = `<p class="font-prestige --small">${item.handle} has been added to the cart. <a href="/cart" class="font-prestige --small">Visit your cart</a> or continue shopping.</p> `;
        }, 1400);
        // Update cart counter
      })
      .catch((error) => {
        console.log(error);
        message.innerHTML = `<p class="font-prestige --small">Sorry, we are out of stock in that size</p>`;
      });
  });
};

export default addToCart;
