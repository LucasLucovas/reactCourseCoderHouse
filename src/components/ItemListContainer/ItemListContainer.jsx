import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import SearchBar from '../SearchBar/SearchBar';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Button, Grid  } from '@mui/material';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();
  const [showAllProducts, setShowAllProducts] = useState(true);

  const fetchData = async () => {
    try {
      let response;

      if (category) {
        const categoryQuery = query(collection(db, 'Products'), where('category', '==', category));
        response = await getDocs(categoryQuery);
      } else {
        const allProductsQuery = collection(db, 'Products');
        response = await getDocs(allProductsQuery);
      }

      const productsAdapted = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productsAdapted);
      setError(null);
    } catch (error) {
      setError('Error loading products. Please try again later.');
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();

  }, [category]);

  const handleSearch = async (searchResults) => { 
    setProducts(searchResults);
    setShowAllProducts(false);
  };

  return (
    <div>
      <h2>{greeting}</h2>
          <SearchBar onSearch={handleSearch} />
          {!showAllProducts && (
            <Button
              variant="outlined"
              onClick={() => {
                setShowAllProducts(true);
                fetchData();
              }}
            >
              Show All Products
            </Button>
          )}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
