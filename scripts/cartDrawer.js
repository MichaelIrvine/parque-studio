const cartDrawer = () => {
  const body = document.querySelector('body');
  const cartOpen = document.querySelector('#cart-drawer-open');
  const cartClose = document.querySelector('#cart-drawer-close');

  function openCart() {
    // set body overflow
    body.style.overFlow = 'hidden';
    // open cart-screen
    // open cart
    document.querySelector('.cart-drawer').classList.add('open');
  }
  function closeCart() {
    document.querySelector('.cart-drawer').classList.remove('open');
  }

  cartOpen.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
};

export default cartDrawer;
