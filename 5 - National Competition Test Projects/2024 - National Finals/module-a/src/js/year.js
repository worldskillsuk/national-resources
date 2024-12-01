const getYearElement = () => document.querySelector('#copyright-year');

const updateDate = () => {
  const date = new Date();
  const year = date.getFullYear();

  const element = getYearElement();

  element.textContent = year;
};

document.addEventListener('DOMContentLoaded', updateDate);
