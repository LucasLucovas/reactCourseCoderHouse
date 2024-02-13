//React imports
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


//Components imports
import ItemList from '../ItemList/ItemList';
import SearchBar from '../SearchBar/SearchBar';
//Context imports
import { useProducts } from '../../context/ProductContext';

const ItemListContainer = () => {

  const { category } = useParams();
  const { products, setProducts , loading, error, categoryProducts } = useProducts();
  const [prevCategory, setPrevCategory] = useState(null);

  useEffect(() => {  
    if (category !== prevCategory) {
      categoryProducts(category);
      setPrevCategory(category);
    }
  }, [category, prevCategory, categoryProducts]);


  const handleSearch = async (searchResults) => { 
    setProducts(searchResults);
  };

  return (
    <div>
          <div>
            <SearchBar onSearch={handleSearch} />
            {!loading && !error && (
              <>
                {products.length === 0 ? (
                  <p>No products found.</p>
                ) : (
                  <ItemList products={products} />
                )}
              </>
            )}
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
          </div>
    </div>
  );
};

export default ItemListContainer;
