import { PRODUCTS_LIST } from './constants';

const productsReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTS_LIST:
      return {
        ...action.products,
      };
    default:
      return state;
  }
};

export default productsReducer;
