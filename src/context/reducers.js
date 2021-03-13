import productsReducer from './products/reducer';

export const indexReducer = ({ products }, action) => ({
  products: productsReducer(products, action),
});
