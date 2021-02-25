import * as cart from '@shopify/theme-cart';

const addToCart = () => {
  const variantOption = document.querySelector('#productSelect');
  let selectedVariantId = parseInt(
    variantOption.options[variantOption.selectedIndex].value
  );
  const addToCartBtn = document.querySelector('#AddToCart');

  console.log(selectedVariantId);

  variantOption.addEventListener('change', () => {
    console.log(
      'inside change event:',
      variantOption.options[variantOption.selectedIndex].value
    );
  });

  addToCartBtn.addEventListener('click', () => {
    cart.addItem(selectedVariantId).then((item) => {
      console.log(
        `An item with a quantity of ${selectedVariantId} was added to your cart:`,
        item
      );
      // Send items Id to cart
      item.id;
    });
  });
};

export default addToCart;
