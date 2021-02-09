const csFadeSection = () => {
  const sectionScreen = document.querySelector(".section-1__screen");
  console.log(sectionScreen);
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      sectionScreen.classList.add('darken');
    } else {
      sectionScreen.classList.remove('darken');
    }
  });
};

csFadeSection();