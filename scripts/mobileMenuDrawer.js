import { gsap } from 'gsap';

const menuDrawer = () => {
  const body = document.querySelector('body');
  const menuOpen = document.querySelector('.mobile-menu-btn');
  const menuClose = document.querySelector('#menu-drawer-close');
  const tl = gsap.timeline({ paused: true });

  tl.to(body, { duration: 0, overflow: 'hidden' })
    .to('.screen', { duration: 0, minHeight: '100vh' })
    .to('.screen', {
      delay: 0.1,
      duration: 0.3,
      opacity: 1,
      ease: 'power2.out',
    })
    .to('.main-nav', {
      delay: 0,
      duration: 0.3,
      x: 0,
      ease: 'power2.out',
    });

  menuOpen.addEventListener('click', function () {
    tl.play();
  });
  menuClose.addEventListener('click', function () {
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  });
};

export default menuDrawer;
