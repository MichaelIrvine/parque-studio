import { gsap } from 'gsap';

const cartDrawer = () => {
  const body = document.querySelector('body');
  const cartOpen = document.querySelector('#cart-drawer-open');
  const cartClose = document.querySelector('#cart-drawer-close');

  const tl = gsap.timeline({ paused: true });

  tl.to(body, { duration: 0, overflow: 'hidden' })
    .to('.screen', { duration: 0, minHeight: '100vh' })
    .to('.screen', {
      delay: 0.1,
      duration: 0.3,
      opacity: 1,
      ease: 'power2.out',
    })
    .to('.cart-drawer__wrapper', {
      delay: 0,
      duration: 0.3,
      x: 0,
      ease: 'power2.out',
    });

  cartOpen.addEventListener('click', function () {
    tl.play();
  });
  cartClose.addEventListener('click', function () {
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  });
};

export default cartDrawer;
