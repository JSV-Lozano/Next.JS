import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endPoints) => {
  const [data, setData] = useState([]);
  const [paginate, setPaginate] = useState(1);
  async function fetctData() {
    const reponse = await axios.get(endPoints);
    setData(reponse.data);
  }

  useEffect(() => {
    try {
      fetctData();
    } catch (e) {
      console.log(e);
    }
  }, [paginate]);
  return { data, paginate, setPaginate };
};

export default useFetch;
