const initSlideshow = () => {
  let currentIndex = 0;

  const changeSlide = () => {
    const slides = document.querySelectorAll('.slide');

    slides[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add('active');
  };

  setInterval(changeSlide, 5000);
};

document.addEventListener('DOMContentLoaded', initSlideshow);
