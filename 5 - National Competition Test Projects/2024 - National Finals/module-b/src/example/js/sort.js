export const getSortArrows = () => document.querySelectorAll('.sort-arrow');

let sort = 'member';
let order = 'asc';

export const getSort = () => sort;

export const setSort = (s) => {
  sort = s;
};

export const getOrder = () => order;

export const setOrder = (o) => {
  order = o;
};
