// Cart Item Quantity
const q = document.querySelector('.QuantityCount');

function cartItemIncrement(max) {
  q.value = parseInt(q.value) + 1;
  if (q.value >= parseInt(max)) {
    q.value = max;
  }
}
function cartItemDecrement(min) {
  q.value = parseInt(q.value) - 1;
  if (q.value <= parseInt(min)) {
    q.value = min;
  }
}
