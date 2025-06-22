import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar produtos');
        }
        const data = await response.json();
        setProductsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { productsData, loading, error };
}; 