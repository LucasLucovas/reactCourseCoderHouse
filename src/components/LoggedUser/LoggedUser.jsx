import { useEffect, useState } from 'react';

//firebase imports
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

//Mui imports
import { 
         Typography,
         Button, 
         Grid,
         Card,
         Stack,
         CardContent,
         CardActions,
         Avatar,
        } 
from '@mui/material';

import { brown, teal, cyan } from '@mui/material/colors';



const color = {
  brown: brown['50'],
  teal: teal['100'],
  cyan: cyan['100'],
};

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  const words = name.split(/\s+/);
  const firstLetters = words.map(word => word[0]);
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: firstLetters.join(''),
  };
}


const LoggedUser = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderInfo = async () => {
      try {
        if (user) {
          const ordersCollection = collection(db, 'orders');
          const userOrderQuery = query(ordersCollection, where('buyer.email', '==', user.email));


          const querySnapshot = await getDocs(userOrderQuery);

          if (!querySnapshot.empty) {
            const userOrders = querySnapshot.docs.map((doc) => doc.data());
            setOrders(userOrders);
          } else {
            console.log('No se encontró información de órdenes para este usuario.');
          }
        }
      } catch (error) {
        console.error('Error al obtener detalles de las órdenes:', error);
      }
    };

    if (user) {
      fetchOrderInfo();
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

return (
  <Grid
    container
    justifyContent="center"
    alignContent="center"
    sx={{ minHeight: '100vh', backgroundColor: color.brown }}
  >
    {user ? (
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item mt={2}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 345,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <Avatar {...stringAvatar(user.displayName == null || user.displayName == undefined ? "?" : user.displayName)} />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="body1">¡Welcome, {user.displayName}!</Typography>
              <Typography variant="body2">Email: {user.email}</Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={handleLogout}
                variant="contained"
                sx={{
                  backgroundColor: color.teal,
                  fontSize: 12,
                  height: 30,
                  color: 'black',
                  '&:hover': {
                    backgroundColor: color.cyan,
                  },
                }}
              >
                Log Out
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Typography variant="body2">Orders:</Typography>
        </Grid>
        <Grid item container spacing={1}>
          {orders.map((order, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  textAlign: 'center',
                  maxWidth: 345,
                  padding: 2,
                  margin: 1,
                }}
              >
                <CardContent>
                  <Typography variant="body2">Order {index + 1}:</Typography>
                  <Typography variant="body2">Email: {order.buyer.email}</Typography>
                  <Typography variant="body2">Buyer: {order.buyer.name}</Typography>
                  <Typography variant="body2">Total: ${order.total}</Typography>
                  <Stack direction="column">
                    <Typography variant="body2">Artícles:</Typography>
                    {order.items.map((item, itemIndex) => (
                      <Stack key={itemIndex}>
                        <Typography variant="body2">Títle: {item.title}</Typography>
                        <Typography variant="body2">Quantity: {item.quantity}</Typography>
                        <Typography variant="body2">Unity price: ${item.price}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid item>
          {orders.length < 1 ? (
            <Typography variant="body2">No orders information found for this user.</Typography>
          ) : null}
        </Grid>
      </Grid>
    ) : (
      <Typography variant="body1">You have not logged in.</Typography>
    )}
  </Grid>
);
};

export default LoggedUser;