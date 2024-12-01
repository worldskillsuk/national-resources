import { getCurrentPage, DEFAULT_LIMIT } from './pagination.js';
import { getSearchInput } from './search.js';
import { getOrder, getSort } from './sort.js';

export const fetchResults = async () => {
  const currentPage = getCurrentPage();
  const searchTerm = getSearchInput().value;

  const sort = getSort();
  const order = getOrder();

  const url = new URL(
    'http://localhost:3000/api/results-by-member',
    window.location.origin
  );
  url.searchParams.append('limit', DEFAULT_LIMIT);
  url.searchParams.append('page', currentPage);
  url.searchParams.append('search', searchTerm);
  url.searchParams.append('sort', sort);
  url.searchParams.append('order', order);

  const res = await fetch(url);

  return await res.json();
};

const getLoader = () => document.querySelector('#loader');

export const showLoader = () => {
  const loader = getLoader();

  loader.classList.remove('hidden');
};

export const hideLoader = () => {
  const loader = getLoader();

  setTimeout(() => {
    loader.classList.add('hidden');
  }, 250);
};
