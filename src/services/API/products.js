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

const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.delete(id));
  return response.data;
};

const updateProduct = async (id,body) => {
  const config = {
    headers: {
      accept: '*/*',
      'content-type': 'application/json',
    },
  };
  const response = await axios.put(endPoints.products.update(id), body, config);
  return response.data;
};

export { createProduct, deleteProduct, updateProduct };
