/**
 * Allows users to control the visibility of the navigation menu on smaller screens.
 */
const setUpNavToggle = () => {
  const toggle = document.querySelector("#top-navigation-toggle");
  const nav = document.querySelector("#top-navigation");

  toggle.addEventListener("click", () => {
    if (!nav.classList.contains("active")) {
      nav.classList.add("active");
      toggle.classList.add("active");
    } else {
      nav.classList.remove("active");
      toggle.classList.remove("active");
    }
  });
};

/**
 * Makes the navigation menu stick to the top of the screen on scroll.
 */
const makeNavSticky = () => {
  const header = document.querySelector("#top-header");

  if (window.scrollY > 50) {
    // Change this value to the point you want the shadow to appear
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

/**
 * Prepares the nav for sticking to the top of the screen.
 */
const setUpStickyNav = () => {
  window.addEventListener("scroll", makeNavSticky);
};

const initNav = () => {
  setUpNavToggle();
  setUpStickyNav();
};

document.addEventListener("DOMContentLoaded", initNav);
