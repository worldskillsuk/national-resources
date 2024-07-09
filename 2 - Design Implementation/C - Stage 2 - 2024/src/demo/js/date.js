/**
 * Sets the current date in the footer.
 */
const initDate = () => {
  const currentDate = new Date();

  const copyrightYearEl = document.querySelector("#copyright-year");

  copyrightYearEl.textContent = currentDate.getFullYear();
  copyrightYearEl.setAttribute("datetime", currentDate.getFullYear());
};

document.addEventListener("DOMContentLoaded", initDate);
