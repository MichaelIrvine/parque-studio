const fixedPanel = () => {
  const panel = document.querySelector('.fixed-panel');
  if (document.body.contains(panel)) {
    const updatePanel = () => {
      if (window.innerHeight < panel.clientHeight) {
        panel.classList.add('unfix');
      } else {
        panel.classList.remove('unfix');
      }
    };

    updatePanel();
    window.addEventListener('resize', updatePanel);
  }
};

export default fixedPanel;
