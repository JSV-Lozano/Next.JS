import FormProduct from '@components/FormProduct';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/API';

export default function Edit() {
  const [product, setProduct] = useState({});
  const [notFound , setNotFound] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    async function getProduct() {
      try {
        setNotFound(false);
        const response = await axios.get(endPoints.products.get(id));
        setProduct(response.data);
      } catch (err) {
        setNotFound(true)
        console.log(err);
      }
    }
    getProduct();
  }, [router?.isReady]);
  return (
    notFound ? <div>Product Not Found</div> : <FormProduct product={product} />
  );
}
