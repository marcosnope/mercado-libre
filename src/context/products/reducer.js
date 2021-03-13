import { PRODUCTS_LIST } from './constants';

const productsReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTS_LIST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default productsReducer;
