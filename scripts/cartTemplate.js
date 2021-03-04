import cartSummary from './cartSummary';

const cartTemplate = (state, inventory) => {
  const cartItemsTable = document.querySelector(
    '.cart-items__wrapper > .items-table'
  );
  const loader = document.querySelector('.ajax-loader');

  console.log(inventory);

  if (state.items.length === 0) {
    if (loader) {
      loader.remove();
    }
    // render out Empty Cart UI
    cartItemsTable.insertAdjacentHTML(
      'afterbegin',
      '<h4>Your cart is currently empty</h4>'
    );
  } else {
    if (loader) {
      loader.remove();
    }
    cartItemsTable.insertAdjacentHTML(
      'afterbegin',
      state.items
        .map((item) => {
          return `
          <div id="${item.key}" class="table-row__wrapper grid__2x">
            <div class="items-table__image">
              <a href="${item.url}">
                <img
                  src="${item.featured_image.url}"
                  alt="${item.featured_image.alt}"
                  class="lazy blurUp lazy-reveal"
                />
              </a>
            </div>
            <div class="items-tables__details">
              <div class="grid__2x">
                <div>
                  <a href="${item.url}">
                    <h4 style="text-transform: uppercase;">
                      ${item.handle}
                    </h4>
                  </a>
                  <p class="font-prestige">
                  ${item.options_with_values[0].name} 
                  / 
                  ${item.options_with_values[0].value}</p>
                </div>
                <div>
                  <button type="button" 
                  class="remove-cart-item" 
                  data-item-key="${item.key}">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
              <div class="grid__2x">
                <div class="cart-items-quantity__wrapper">
                  <button
                    class="decreaseQuantity"
                    type="button"
                    aria-label="decrease quantity"
                    data-item-key="${item.key}"
                  >-</button>
                  <input
                    type="number"
                    name="updates[]"
                    id="updates_${item.key}"
                    value="${item.quantity}"
                    min="1"
                    pattern="[0-9]*"
                    class="QuantityCount font-prestige --small"
                  />
                  <button
                    class="increaseQuantity"
                    type="button"
                    aria-label="increase quantity"
                    data-item-key="${item.key}"
                  >+</button>
                </div>
                <div>
                $${new Intl.NumberFormat('en-US', {
                  minimumFractionDigits: 2,
                }).format(item.price / 100)}
                </div>
              </div>
            </div>
          </div>
      `;
        })
        .join('')
    );

    cartSummary(state);
  }
};

export default cartTemplate;
