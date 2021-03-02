const miniCartSummary = (state) => {
  const totalsWrapper = document.querySelector('.mini-cart-total__wrapper');

  // Sub total and total prices
  totalsWrapper.innerHTML = `
  <div class="subtotal__col-01">
    <p class="font-prestige --small">Subtotal:</p>
    <p class="font-prestige --small">Taxes:</p>
    <div class="total-price">
      <p class="font-prestige">
        Total:
      </p>
    </div>
  </div>
  <div class="subtotal__col-02">
    <p class="font-prestige --small">
    $${new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
    }).format(state.items_subtotal_price / 100)} CAD
    </p>
    <p class="font-prestige --small">—</p>
    <div class="total-price">
      <p class="font-prestige">
      $${new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
      }).format(state.total_price / 100)} CAD
      </p>
    </div>
  </div>
  `;
};

export default miniCartSummary;
