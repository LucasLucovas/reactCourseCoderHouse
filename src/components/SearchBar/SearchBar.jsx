import React, { useState } from 'react';
import { TextField, InputAdornment, Grid, Collapse, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import Fuse from 'fuse.js';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);


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
        const results = querySnapshot.docs.map((doc) => {
          const data = doc.data()
          return {
            id: doc.id,
            ...data,
          }
        });
        const fuse = new Fuse(results, options);
        const searchResults = fuse.search(newSearchTerm);
        const filteredResults = searchResults.map((result) => result.item);
        onSearch(filteredResults);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };


  const handleSearchIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Grid container alignContent={'center'} justifyContent={'center'} mt={5}>
      <IconButton 
        onClick={handleSearchIconClick}
        sx={{
          position: 'relative',
          left: isExpanded ? -5 : 120, 
          transition: 'left 0.6s ease',
        }}
        >
        <SearchIcon />
      </IconButton>
      <Collapse in={isExpanded}>
        <TextField
          label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
              </InputAdornment>
            ),
          }}
          sx={{ marginRight: 2 }}
        />
      </Collapse>
    </Grid>
  );
};

export default SearchBar;
