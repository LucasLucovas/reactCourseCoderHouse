import React, { useState } from 'react';
import { Button, TextField, InputAdornment, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Fuse from 'fuse.js';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const options = {
      includeScore: true,
      keys: ['title', 'description'],
      threshold: 0.4,
    };

    const productsRef = collection(db, 'Products');
    getDocs(productsRef)
      .then((querySnapshot) => {
        const results = querySnapshot.docs.map((doc) => doc.data());
        const fuse = new Fuse(results, options);
        const searchResults = fuse.search(newSearchTerm);
        const filteredResults = searchResults.map((result) => result.item);
        onSearch(filteredResults);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };


  const handleSearchSubmit = async (event) => {
      event.preventDefault();
    
      const productsRef = collection(db, 'Products');
      const q = query(productsRef, where('title', '>=', searchTerm.toUpperCase()));
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => doc.data());
      const filteredResults = results.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log('Search Results:', filteredResults);
      console.log('search term:', searchTerm )

      onSearch(filteredResults);
      setSearchTerm("")
  };



  return (
    <Container>
        <TextField
          label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ marginRight: 2 }}
        />
    </Container>
  );
};

export default SearchBar;
