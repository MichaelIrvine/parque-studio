import { gsap } from 'gsap';

const fitChartModal = () => {
  const body = document.querySelector('body');
  const fitModalOpen = document.querySelector('#fit-chart-toggle');
  const fitModalClose = document.querySelector('#close-fit-size-modal');

  const fitChartTl = gsap.timeline({ paused: true });

  fitChartTl
    .to(body, { duration: 0, overflow: 'hidden' })
    .to('.screen', {
      duration: 0,
      minHeight: '100vh',
    })
    .to('.screen', {
      delay: 0.1,
      duration: 0.3,
      opacity: 1,
      ease: 'power2.out',
    })
    .to('#fit-size-modal', {
      delay: 0.3,
      duration: 0.2,
      opacity: 1,
      ease: 'power2.out',
    });

  fitModalOpen.addEventListener('click', function () {
    fitChartTl.play();
  });
  fitModalClose.addEventListener('click', function () {
    if (fitChartTl.reversed()) {
      fitChartTl.play();
    } else {
      fitChartTl.reverse();
    }
  });
};

export default fitChartModal;
