/**
 * Selects the scroll-to-top button.
 */
const getScrollToTopButton = () => {
  return document.querySelector("#scroll-to-top");
};

/**
 * Scrolls to the top of the page.
 */
const scrollToTop = () => {
  window.scrollTo({ top: 0 });
};

/**
 * Controls the visibility of the scroll-to-top button.
 */
const showOrHideScrollToTopButton = () => {
  const hero = document.querySelector("#hero");

  const { top } = hero.getBoundingClientRect();
  const heroPosition = top + window.scrollY;

  const scrollToTopButton = getScrollToTopButton();

  if (window.scrollY > heroPosition) {
    scrollToTopButton.classList.add("visible");
  } else {
    scrollToTopButton.classList.remove("visible");
  }
};

/**
 * Sets up the scroll-to-top button so that it can be used.
 */
const setUpScroll = () => {
  const scrollToTopButton = getScrollToTopButton();

  // Allow clicking the scroll-to-top button
  scrollToTopButton.addEventListener("click", scrollToTop);

  // Control the visibility of the scroll-to-top button
  window.addEventListener("scroll", showOrHideScrollToTopButton);
};

document.addEventListener("DOMContentLoaded", setUpScroll);
