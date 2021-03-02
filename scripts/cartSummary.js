const cartSummary = (state) => {
  const cartSummaryTable = document.querySelector('.cart-summary__wrapper');
  // Cart Summary
  const subTotal = cartSummaryTable.querySelector('#cart-sub-total');
  subTotal.textContent = `$${new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
  }).format(state.items_subtotal_price / 100)} CAD`;

  const total = cartSummaryTable.querySelector('#cart-total');
  total.textContent = `$${new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
  }).format(state.total_price / 100)} CAD`;

  cartSummaryTable.querySelector(
    '#cart-tax'
  ).textContent = `Calculated at Checkout`;
  cartSummaryTable.querySelector(
    '#cart-shipping'
  ).textContent = `Calculated at Checkout`;
};

export default cartSummary;
