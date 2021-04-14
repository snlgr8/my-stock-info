const INITIAL_STATE = {
  categories: null,
};
const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_CATEGORY':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
export default categoriesReducer;
