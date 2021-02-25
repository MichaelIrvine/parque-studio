import * as cart from '@shopify/theme-cart';

const removeItem = (key) => {
  const itemKey = key.id;

  // console.log(itemKey);
  cart
    .removeItem(itemKey)
    .then(console.log(`removing ${itemKey} item from cart`));
};

export default removeItem;
