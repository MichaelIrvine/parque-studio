import { gsap } from 'gsap';

const menuDrawer = () => {
  const body = document.querySelector('body');
  const menuOpen = document.querySelector('.mobile-menu-btn');
  const menuClose = document.querySelector('#menu-drawer-close');
  const screen = document.querySelector('#menu-screen');
  const menuTl = gsap.timeline({ paused: true });

  menuTl
    .to(body, { duration: 0, overflow: 'hidden' })
    .to(screen, { duration: 0, minHeight: '100vh' })
    .to(screen, {
      delay: 0.1,
      duration: 0.3,
      opacity: 1,
      ease: 'power2.out',
    })
    .to('.mobile-nav', {
      delay: 0,
      duration: 0.3,
      x: 0,
      ease: 'power2.out',
    });

  menuOpen.addEventListener('click', function () {
    screen.setAttribute('data-screen', 'menu');
    menuTl.play();
  });
  menuClose.addEventListener('click', function () {
    screen.setAttribute('data-screen', 'disabled');
    if (menuTl.reversed()) {
      menuTl.play();
    } else {
      menuTl.reverse();
    }
  });

  // check data-attr is Shop
  // Close Shop drawer if data-attr is Shop
  screen.addEventListener('click', () => {
    if (screen.getAttribute('data-screen') === 'menu') {
      screen.setAttribute('data-screen', 'disabled');
      if (menuTl.reversed()) {
        menuTl.play();
      } else {
        menuTl.reverse();
      }
    }
  });
};

export default menuDrawer;
