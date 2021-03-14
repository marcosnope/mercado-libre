import axios from 'axios';

/** Petición GET estandar con axios */
export const get = async (urlRequest, params) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const sendParams = { ...params };
  const response = await axios({
    headers,
    url: urlRequest,
    method: 'GET',
    params: sendParams,
  });
  return response;
};
