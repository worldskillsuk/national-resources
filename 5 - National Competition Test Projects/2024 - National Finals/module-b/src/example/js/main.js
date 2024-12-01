import { fetchResults, showLoader, hideLoader } from './fetch.js';
import { updateTable } from './table.js';
import {
  updatePaginationControls,
  getCurrentPage,
  setCurrentPage,
  getTotalPages,
  getNextButton,
  getPreviousButton,
  getPageSelector,
} from './pagination.js';
import { getSearchInput } from './search.js';
import { getSortArrows, setOrder, setSort } from './sort.js';

const debounce = (func, delay) => {
  let timeoutId;

  return (...args) => {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const load = async () => {
  showLoader();

  try {
    const { results, metadata } = await fetchResults();

    updateTable(results);
    updatePaginationControls(metadata);
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
};

const handlePreviousButtonClicked = () => {
  const currentPage = getCurrentPage();

  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);

    load();
  }
};

const handleNextButtonClicked = () => {
  const currentPage = getCurrentPage();
  const totalPages = getTotalPages();

  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);

    load();
  }
};

const handlePageSelectorChanged = (event) => {
  const value = parseInt(event.target.value, 10);

  setCurrentPage(value);

  load();
};

const handleSearchSelectorChanged = () => {
  load();
};

const debouncedHandleSearchSelectorChanged = debounce(
  handleSearchSelectorChanged,
  500
);

const handleSort = (event) => {
  const column = event.target.getAttribute('data-column');
  const order = event.target.getAttribute('data-order');

  // Toggle active class on sort arrows
  getSortArrows().forEach((arrow) => arrow.classList.remove('active'));

  event.target.classList.add('active');

  console.log({ column, order });

  setSort(column);
  setOrder(order);

  // Load data with sorting
  load();
};

const init = () => {
  load();

  getPreviousButton().addEventListener('click', handlePreviousButtonClicked);
  getNextButton().addEventListener('click', handleNextButtonClicked);
  getPageSelector().addEventListener('change', handlePageSelectorChanged);

  getSearchInput().addEventListener(
    'input',
    debouncedHandleSearchSelectorChanged
  );

  getSortArrows().forEach((arrow) => {
    arrow.addEventListener('click', handleSort);
  });
};

document.addEventListener('DOMContentLoaded', init);
