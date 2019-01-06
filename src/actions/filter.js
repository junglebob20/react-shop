export const setFilter = filter => ({
  type: 'SET_FILTER',
  payload: filter,
});

export const setSearchQuery = value => ({
  type: 'SET_QUERY',
  payload: value,
});

export const setCategory = value => ({
  type: 'SET_CATEGORY',
  payload: value,
});

export const setPriceMinMax = value => ({
  type: 'SET_PRICEMINMAX',
  payload: value,
});
