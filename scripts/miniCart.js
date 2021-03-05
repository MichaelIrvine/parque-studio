import miniCartSummary from './miniCartSummary';
import removeItemFromMiniCart from './removeMiniCartItem';
import incrementMiniCartQuantity from './incrementMiniCartQuantity';
import decrementMiniCartQuantity from './decrementMiniCartQuantity';

// Mini Cart
const miniCart = (state) => {
  const body = document.querySelector('body');
  const itemsWrapper = document.querySelector(
    '.mini-cart-items__wrapper > .items-table'
  );
  const miniCartBtns = document.querySelectorAll('.mini-cart-btns');

  if (state.items.length === 0) {
    itemsWrapper.innerHTML = `<h3>Your cart is currently empty</h3>`;
    miniCartBtns.forEach((btn) => {
      btn.disabled = true;
    });
  } else {
    // Remove cart--no-items on body to display checkout button
    body.classList.remove('cart--no-items');
    itemsWrapper.innerHTML = state.items
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
                  <p class="font-prestige">${
                    item.options_with_values[0].name
                  } / ${item.options_with_values[0].value}</p>
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
      .join('');

    miniCartSummary(state);
  }

  // functionality to update/remove items
  // -- Remove Item from Mini Cart
  const miniCartRemoveBtn = document.querySelectorAll(
    '.mini-cart-drawer__wrapper .remove-cart-item'
  );

  miniCartRemoveBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      removeItemFromMiniCart(e.currentTarget);
    });
  });

  // Increment Mini Cart Quantity
  const btnIncrement = document.querySelectorAll(
    '.mini-cart-drawer__wrapper .increaseQuantity'
  );

  btnIncrement.forEach((incBtn) => {
    incBtn.addEventListener('click', (e) => {
      incrementMiniCartQuantity(e.currentTarget);
    });
  });
  // Decrement Mini Cart Quantity
  const btnDecrement = document.querySelectorAll(
    '.mini-cart-drawer__wrapper .decreaseQuantity'
  );

  btnDecrement.forEach((decBtn) => {
    decBtn.addEventListener('click', (e) => {
      decrementMiniCartQuantity(e.currentTarget);
    });
  });
};

export default miniCart;
