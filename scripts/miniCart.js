// Mini Cart
const miniCart = (state) => {
  const body = document.querySelector('body');
  const itemsWrapper = document.querySelector('.mini-cart-items__wrapper');
  const totalsWrapper = document.querySelector('.mini-cart-total__wrapper');

  if (state.items.length === 0) {
    itemsWrapper.innerHTML = `<h3>Your cart is currently empty</h3>`;
  } else {
    // Remove cart--no-items on body to display checkout button
    body.classList.remove('cart--no-items');
    itemsWrapper.innerHTML = state.items
      .map((item) => {
        return `<div class="items-row">
            <div class="aspect__wrapper _1x1">
              <img
                src="${item.featured_image.url}"
                alt="${item.featured_image.alt}"
                class="lazy blurUp lazy-reveal"
              />
            </div>
            <div class="mini-cart-drawer__title__wrapper">
              <h4 class="mini-cart-drawer__product-title">
                ${item.product_title}
              </h4>
              <p class="font-prestige --small">
                ${item.options_with_values[0].name} / ${item.variant_title}
              </p>
              <p class="font-prestige">
                $${new Intl.NumberFormat('en-US', {
                  minimumFractionDigits: 2,
                }).format(item.price / 100)}
              </p>
            </div>          
          </div>
        </div>
      `;
      })
      .join('');

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
  }
};

export default miniCart;
