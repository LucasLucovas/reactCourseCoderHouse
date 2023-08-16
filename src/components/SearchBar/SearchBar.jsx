import React, { useState } from 'react';
import { Button, TextField, InputAdornment, Container, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Item from '../Item/Item';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    const productsRef = collection(db, 'Products');
    const q = query(productsRef, where('title', '>=', searchTerm));
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => doc.data());

    setSearchResults(results);
    setSearchTerm('');
  };

  const renderSearchResults = () => {
    return searchResults.map((product) => (
      <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        <Item
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          stock={product.stock}
        />
      </Grid>
    ));
  };

  return (
    <Container>
      <form onSubmit={handleSearchSubmit}>
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
        <Button type="submit" variant="contained" sx={{ backgroundColor: 'common.white', color: 'primary.main' }}>
          Search
        </Button>
      </form>
      <Grid container spacing={2}>
        {renderSearchResults()}
      </Grid>
    </Container>
  );
};

export default SearchBar;
