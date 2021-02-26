const updateCartCount = (state) => {
  let cartCounter = document.querySelector('#cart-item-count');
  cartCounter.textContent = `(${state.item_count})`;
};

export default updateCartCount;
