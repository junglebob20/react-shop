const initialState = {
  searchQuery: '',
  filterBy: 'all',
  category: '',
  price: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    case 'SET_FILTER':
      return {
        ...state,
        filterBy: action.payload,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    case 'SET_PRICEMINMAX':
      return {
        ...state,
        price:action.payload
      }
    default:
      return state;
  }
};
