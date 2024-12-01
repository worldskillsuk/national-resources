const VALID_SORT_CODES = [
  'member',
  'gold',
  'silver',
  'bronze',
  'mfe',
  'medallionForExcellence',
  'total',
];

const VALID_ORDER_CODES = ['asc', 'desc'];

const getValueFromSort = (result, sort) => {
  switch (sort) {
    case 'member':
      return result.member.name;
    case 'gold':
      return result.awards.gold;
    case 'silver':
      return result.awards.silver;
    case 'bronze':
      return result.awards.bronze;
    case 'mfe':
    case 'medallionForExcellence':
      return result.awards.medallionForExcellence;
    case 'total':
      return (
        result.awards.gold +
        result.awards.silver +
        result.awards.bronze +
        result.awards.medallionForExcellence
      );
    default:
      return null;
  }
};

const paginate = (query, data) => {
  const { limit = 10, page = 1, search = '', sort = '', order = 'asc' } = query;

  let limitInt = parseInt(limit, 10);

  const limitIsValid = !isNaN(limitInt) && limitInt > 0;

  if (!limitIsValid) {
    limitInt = 10;
  }

  let currentPage = parseInt(page, 10);

  const currentPageIsValid = !isNaN(currentPage) && currentPage > 0;

  if (!currentPageIsValid) {
    currentPage = 1;
  }

  const searchIsValid = typeof search === 'string';

  let filtered = data;

  if (searchIsValid) {
    filtered = data.filter((result) => {
      return result.member.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  const sortIsValid =
    typeof sort === 'string' && VALID_SORT_CODES.includes(sort.toLowerCase());

  const orderIsValid =
    typeof order === 'string' &&
    VALID_ORDER_CODES.includes(order.toLowerCase());

  console.log({ sort, order, sortIsValid, orderIsValid });

  if (sortIsValid && orderIsValid) {
    filtered = filtered.sort((a, b) => {
      const orderInt = order.toLowerCase() === 'asc' ? 1 : -1;

      const aValue = getValueFromSort(a, sort);
      const bValue = getValueFromSort(b, sort);

      if (aValue < bValue) {
        return -1 * orderInt;
      }

      if (aValue > bValue) {
        return 1 * orderInt;
      }

      return 0;
    });
  }

  const startIndex = (currentPage - 1) * limitInt;
  const endIndex = currentPage * limitInt;

  const results = filtered.slice(startIndex, endIndex);

  const totalResults = filtered.length;
  const totalPages = Math.ceil(totalResults / limitInt);

  const nextPage = currentPage < totalPages ? currentPage + 1 : null;
  const previousPage = currentPage > 1 ? currentPage - 1 : null;

  const metadata = {
    currentPage,
    nextPage,
    previousPage,
    limit,
    totalResults,
    totalPages,
  };

  return {
    results,
    metadata,
  };
};

module.exports = {
  paginate,
};
