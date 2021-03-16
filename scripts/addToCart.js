import * as cart from '@shopify/theme-cart';
import updateCartCount from './updateCartCount';
import miniCart from './miniCart';

const addToCart = () => {
  // Check if product template is 'coming-soon' page
  // Return early if yes
  if (document.body.classList.contains('coming-soon')) {
    return;
  }

  const variantOption = document.querySelector('.productSelect');
  let selectedVariantId = parseInt(
    variantOption.options[variantOption.selectedIndex].value
  );
  const addToCartBtn = document.querySelector('#AddToCart');
  const message = document.querySelector('.message');

  let varInventory =
    variantOption.options[variantOption.selectedIndex].dataset.variantInventory;

  variantOption.addEventListener('change', () => {
    selectedVariantId = parseInt(
      variantOption.options[variantOption.selectedIndex].value
    );
    // get dataset from selected option
    varInventory =
      variantOption.options[variantOption.selectedIndex].dataset
        .variantInventory;
  });

  function closeMessage() {
    if (message.classList.contains('active')) {
      message.classList.remove('active');
    }
  }

  addToCartBtn.addEventListener('click', () => {
    cart
      .addItem(selectedVariantId)
      .then((item) => {
        cart.getState().then((state) => {
          updateCartCount(state);
          miniCart(state);
        });
        console.log(item);
        // Update UI to reflect changes
        addToCartBtn.textContent = `Adding...`;
        addToCartBtn.disabled = true;
        setTimeout(() => {
          addToCartBtn.textContent = `Add to Cart`;
          addToCartBtn.disabled = false;
          message.innerHTML = `<p class="font-prestige --small">${item.handle}: ${item.options_with_values[0].name}/${item.options_with_values[0].value} has been added to the cart. <a href="/cart" class="font-prestige --small">Visit your cart</a> or <a id="close-message" class="font-prestige --small">continue shopping</a>.</p> `;

          message.classList.add('active');
          setTimeout(() => {
            message.classList.remove('active');
          }, 10000);
        }, 1400);
        // Update cart counter
      })
      .catch((error) => {
        console.log(error);
        message.classList.add('active');
        message.innerHTML = `<p class="font-prestige --small">Sorry, we are out of stock in that size</p>`;
        setTimeout(() => {
          message.classList.remove('active');
        }, 10000);
      });
  });

  message.addEventListener('click', closeMessage);
};

export default addToCart;
