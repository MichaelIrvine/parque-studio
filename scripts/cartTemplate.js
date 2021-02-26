const cartTemplate = (state) => {
  const cartItemsTable = document.querySelector('.cart-items__wrapper');
  const cartSummaryTable = document.querySelector('.cart-summary__wrapper');

  console.log(state);

  if (state.items === 0) {
    // render out Empty Cart UI
  } else {
    cartItemsTable.insertAdjacentHTML(
      'afterbegin',
      state.items
        .map((item) => {
          return `<div class="items-table">
        <div class="table-row__wrapper grid__2x">
          <div class="items-table__image">
            <a href="${item}">
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
                <p class="font-prestige">${
                  item.options_with_values[0].name
                } / ${item.options_with_values[0].value}</p>
              </div>
              <div>
                <button id="${
                  item.key
                }" type="button" class="remove-cart-item" data-item-key="${
            item.key
          }">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
            <div class="grid__2x">
              <div class="cart-items-quantity__wrapper">
                <div class="decrement">
                  <button
                    class="decreaseQuantity"
                    type="button"
                    aria-label="decrease quantity"
                    onclick="cartItemDecrement(0)"
                    
                  >
                  -
                  </button>
                </div>
                <input
                  type="number"
                  name="updates[]"
                  id="updates_${item.key}"
                  value="${item.quantity}"
                  min="0"
                  class="QuantityCount font-prestige --small"
                />
                <div class="increment">
                  <button
                    class="increaseQuantity"
                    type="button"
                    aria-label="increase quantity"
                    onclick="cartItemIncrement(10)"
                    
                  >
                  +
                  </button>
                </div>
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
  }
};

export default cartTemplate;
