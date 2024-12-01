export const DEFAULT_LIMIT = 10;
export const DEFAULT_PAGE = 1;

let currentPage = DEFAULT_PAGE;
let totalPages = 1;

export const getCurrentPage = () => currentPage;
export const setCurrentPage = (page) => {
  currentPage = page;
};

export const getTotalPages = () => totalPages;
export const setTotalPages = (pages) => {
  totalPages = pages;
};

export const getPreviousButton = () => document.querySelector('#prev-btn');
export const getNextButton = () => document.querySelector('#next-btn');
export const getPageSelector = () => document.querySelector('#page-selector');
export const getIndicator = () => document.querySelector('#total-pages');

export const updatePaginationControls = (metadata) => {
  currentPage = metadata.currentPage;
  totalPages = metadata.totalPages;

  const pageSelector = getPageSelector();
  pageSelector.innerHTML = ''; // Clear existing options

  const indicator = getIndicator();
  indicator.textContent = totalPages;

  for (let i = 1; i <= totalPages; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;

    if (i === currentPage) {
      option.selected = true;
    }

    pageSelector.appendChild(option);
  }

  getPreviousButton().disabled = currentPage === 1;
  getNextButton().disabled = currentPage === totalPages;
};
