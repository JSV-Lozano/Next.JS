import axios from 'axios';
import endPoints from '@services/API';

const createProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'content-type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.create, body, config);
  return response.data;
};
export { createProduct };
