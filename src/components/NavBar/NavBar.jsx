//React imports
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

//MUI imports
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  SwipeableDrawer,
  Button,
  Hidden,
  Grid
} from '@mui/material';

import { grey, indigo, teal } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';


//components
import CartWidget from '../CartWidget/CartWidget';
import Signup from '../SignUp/SignUp';
import Login from '../Login/Login';


const color = {
  grey: grey[600],
  teal: teal[100],
  teal1: teal[500],
  indigo: indigo[100],
};

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const mobileMenu = (
    <SwipeableDrawer
      disableSwipeToOpen='true'
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Grid 
        container 
        flexDirection={'column'} 
        sx={{backgroundColor: color.teal}}
        height={"100%"} 
        >
        <Grid item ml={1} sx={{borderBottom: 1}}>
          <Button sx={{justifyContent: 'left', color: 'black'}} component={RouterLink} to="/">
            Home
          </Button>
        </Grid>
        <Grid item ml={1} mt={1} sx={{borderBottom: 1}}>
          <Button sx={{justifyContent: 'left', color: 'black'}} component={RouterLink} to="/loggeduser">
            You
          </Button>
        </Grid>
        <Grid item ml={1} mt={1} sx={{borderBottom: 1}}>
            <Login/>
            <Signup/>
        </Grid>

        <Grid item ml={1} mt={1} sx={{borderBottom: 1}}>
          <Button sx={{justifyContent: 'left', color: 'black'}} component={RouterLink} to="/category/men's clothing">
            Men's clothing
          </Button>
        </Grid>
        <Grid item ml={1} mt={1} sx={{borderBottom: 1}}>
          <Button sx={{justifyContent: 'left', color: 'black'}} component={RouterLink} to="/category/jewelery">
            Jewelry
          </Button>
        </Grid>
        <Grid item ml={1} mt={1} sx={{borderBottom: 1}}>
          <Button sx={{justifyContent: 'left', color: 'black'}} component={RouterLink} to="/category/electronics">
            Electronics
          </Button>
        </Grid>
        <Grid item ml={1} mt={1} sx={{borderBottom: 1}}>
          <Button sx={{justifyContent: 'left', color: 'black'}} component={RouterLink} to="/category/women's clothing">
            Women's Clothing
          </Button>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  );
  return (
    <AppBar 
      position='relative' 
      sx={{ 
            backgroundColor: color.teal, 
            width: '100%',
            }}
            >
        <Toolbar sx={{ padding: 0, margin:0 }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems:'center',
              flexGrow: 1,
              justifyContent:'left',
              color: 'common.black',
              textDecoration: 'none',
            }}
          >
            <img style={{width: 70, height: 70}} src={'/LogoLDL.png'} alt="ecommerce logo" />
          </Typography>
          <Hidden mdUp>
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{color: 'common.black'}}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <div sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={RouterLink}
                to="/category/men's clothing"
                sx={{ 
                  color: 'common.black', 
                  textDecoration: 'none',
                  borderRadius: 0,
                  '&:focus': {
                    borderBottom: '1px solid black',
                    },
                  }}
              >
                Men's clothing
              </Button>
              <Button
                component={RouterLink}
                to="/category/jewelery"
                sx={{ 
                  color: 'common.black', 
                  textDecoration: 'none',
                  borderRadius: 0,
                  '&:focus': {
                    borderBottom: '1px solid black',
                    },
                  }}
              >
                Jewelry
              </Button>
              <Button
                component={RouterLink}
                to="/category/electronics"
                sx={{ 
                  color: 'common.black', 
                  textDecoration: 'none',
                  borderRadius: 0,
                  '&:focus': {
                    borderBottom: '1px solid black',
                    },
                  }}
              >
                Electronics
              </Button>
              <Button
                component={RouterLink}
                to="/category/women's clothing"
                sx={{ 
                  color: 'common.black', 
                  textDecoration: 'none',
                  borderRadius: 0,
                  '&:focus': {
                    borderBottom: '1px solid black',
                    },
                  }}
              >
                Women's Clothing
              </Button>

              <Login/>
              <Signup/>
              <Button
                component={RouterLink}
                to="/loggeduser"
                sx={{ 
                  color: 'common.black', 
                  textDecoration: 'none',
                  borderRadius: 0,
                  '&:focus': {
                    borderBottom: '1px solid black',
                    },
                  }}
              >
                You
              </Button>
            </div>
          </Hidden>
          <CartWidget />
          {mobileMenu}
        </Toolbar>
    </AppBar>
  );
};

export default NavBar;
