// Cart Drawer Quantity
function cartDrawerIncrement(max) {
  document.querySelector('.QuantityCount__Drawer').value =
    parseInt(document.querySelector('.QuantityCount__Drawer').value) + 1;
  if (document.querySelector('.QuantityCount__Drawer').value >= parseInt(max)) {
    document.querySelector('.QuantityCount__Drawer').value = max;
  }
}
function cartDrawerDecrement(min) {
  document.querySelector('.QuantityCount__Drawer').value =
    parseInt(document.querySelector('.QuantityCount__Drawer').value) - 1;
  if (document.querySelector('.QuantityCount__Drawer').value <= parseInt(min)) {
    document.querySelector('.QuantityCount__Drawer').value = min;
  }
}
