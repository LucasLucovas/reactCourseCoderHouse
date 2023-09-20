import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../components/firebase/config';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    const fetchAllProducts = async () => {
      try {
        const productsRef = collection(db, 'Products');
        const querySnapshot = await getDocs(productsRef);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError('Error loading products. Please try again later.');
        console.error('Error loading products:', error);
        setLoading(false);
      }
    };


    const categoryProducts = async (category) => {
      try {
        setLoading(true);
        setError(null);

        const productsRef = collection(db, 'Products');
        const q = query(productsRef, where('category', '==', category));
        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError('Error querying products. Please try again later.');
        console.error('Error querying products:', error);
        setLoading(false);
      }
    };


  return (
    <ProductContext.Provider value={{ products, setProducts, loading, error, categoryProducts, fetchAllProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
