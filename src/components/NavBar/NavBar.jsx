import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container} from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, color: 'common.white', textDecoration: 'none' }}>
            Best Random Ecommerce
          </Typography>
          <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
            <Button component={RouterLink} to="/category/men's clothing" sx={{ color: 'common.white', textDecoration: 'none'}}>
              Men's clothing
            </Button>
            <Button component={RouterLink} to="/category/jewelery" sx={{ color: 'common.white', textDecoration: 'none'}}>
              Jewelry
            </Button>
            <Button component={RouterLink} to="/category/electronics" sx={{ color: 'common.white', textDecoration: 'none'}}>
              Electronics
            </Button>
            <Button component={RouterLink} to="/category/women's clothing" sx={{ color: 'common.white', textDecoration: 'none'}}>
              Women's Clothing
            </Button>
          </div>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
