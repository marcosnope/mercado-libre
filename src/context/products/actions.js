import { get } from 'api/request';
import { searchProduct } from 'api';
import { PRODUCTS_LIST, PRODUCTS_ID } from './constants';

export const productsSearch = async (dispatch, search) => {
  let status = false;
  let message = null;
  await get(searchProduct, { q: search })
    .then((json) => json.data)
    .then((data) => {
      dispatch({
        type: PRODUCTS_LIST,
        products: data,
      });
    })
    .catch((error) => {
      status = false;
      console.log(error);
    });
  return { status, message };
};

export const productsId = async (dispatch, id) => {
  let status = false;
  let message = null;
  await get(`${searchProduct}/${id}`)
    .then((json) => json.data)
    .then((data) => {
      dispatch({
        type: PRODUCTS_ID,
        product: data,
      });
    })
    .catch((error) => {
      status = false;
      console.log(error);
    });
  return { status, message };
};
