const productTabs = () => {
  //Credit: https://codepen.io/rafaelavlucas/pen/MLKGba

  // tabs

  const tabLinks = document.querySelectorAll('.tablinks');
  const tabContent = document.querySelectorAll('.tabcontent');

  tabLinks.forEach(function (el) {
    el.addEventListener('click', openTabs);
  });

  function openTabs(el) {
    let tabTarget = el.currentTarget;
    let tab = tabTarget.dataset.tab;

    tabContent.forEach(function (el) {
      el.classList.remove('active');
    });

    tabLinks.forEach(function (el) {
      el.classList.remove('active');
    });

    document.querySelector('#' + tab).classList.add('active');

    tabTarget.classList.add('active');
  }
};

export default productTabs;
