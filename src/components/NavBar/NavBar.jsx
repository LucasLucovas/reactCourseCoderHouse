import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container} from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';
import { grey, indigo, teal } from '@mui/material/colors'


const color = {
  grey: grey[600],
  teal: teal[100],
  teal1: teal[300],
  indigo: indigo[100]
}

const NavBar = () => {

  return (
    <AppBar position="sticky" sx={{ backgroundColor: color.teal }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, color: 'common.black', textDecoration: 'none' }}>
              Best Random Ecommerce
          </Typography>
          <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
            <Button component={RouterLink} to="/category/men's clothing" sx={{ color: 'common.black', textDecoration: 'none'}}>
              Men's clothing
            </Button>
            <Button component={RouterLink} to="/category/jewelery" sx={{ color: 'common.black', textDecoration: 'none'}}>
              Jewelry
            </Button>
            <Button component={RouterLink} to="/category/electronics" sx={{ color: 'common.black', textDecoration: 'none'}}>
              Electronics
            </Button>
            <Button component={RouterLink} to="/category/women's clothing" sx={{ color: 'common.black', textDecoration: 'none'}}>
              Women's Clothing
            </Button>
            <Button component={RouterLink} variant='outlined'  to="/login" 
              sx={{
                  color: 'common.black',
                  textDecoration: 'none', 
                  borderColor: color.teal1,
                  '&:hover':{
                    borderColor: color.indigo,
                  },
                  marginLeft: 1,
                 }}>
              Login
            </Button>
            <Button component={RouterLink} variant='outlined' to="/signup" 
              sx={{
                color: 'common.black',
                 textDecoration: 'none', 
                 borderColor: color.teal1,
                 '&:hover':{
                  borderColor: color.indigo,
                 },
                 marginLeft: 1,
                }}>
              Signup
            </Button>
            <Button component={RouterLink} to="/loggeduser" sx={{ color: 'common.black', textDecoration: 'none'}}>
              Logged User
            </Button>
          </div>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
