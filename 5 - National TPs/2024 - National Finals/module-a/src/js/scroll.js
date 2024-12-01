/**
 * Adds a class to the header when the user scrolls down.
 */
const initScroll = () => {
  const header = document.querySelector('header');

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
};

document.addEventListener('DOMContentLoaded', initScroll);
