import { PRODUCTS_LIST, PRODUCTS_ID } from './constants';

const productsReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTS_LIST:
      return {
        ...action.products,
      };
    case PRODUCTS_ID:
      return {
        ...state,
        productId: { ...action.product },
      };
    default:
      return state;
  }
};

export default productsReducer;
