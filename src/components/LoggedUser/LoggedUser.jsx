import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

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
            // Si se encontraron resultados, agrega cada orden a la matriz
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
    <Box>
      {user ? (
        <div>
          <Typography variant="body1">¡Bienvenido, {user.displayName}!</Typography>
          <Typography variant="body2">Email: {user.email}</Typography>
          {orders.length > 0 ? (
            <div>
              <Typography variant="body2">Órdenes:</Typography>
              {orders.map((order, index) => (
                <div key={index}>
                  <Typography variant="body2">Orden {index + 1}:</Typography>
                  <Typography variant="body2">Email del Comprador: {order.buyer.email}</Typography>
                  <Typography variant="body2">Nombre del Comprador: {order.buyer.name}</Typography>
                  <Typography variant="body2">Total: ${order.total}</Typography>
                  <Typography variant="body2">Artículos:</Typography>
                  <ul>
                    {order.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Typography variant="body2">
                          Título: {item.title}, Cantidad: {item.quantity}, Precio: ${item.price}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <Typography variant="body2">No se encontró información de órdenes para este usuario.</Typography>
          )}
          <Button onClick={handleLogout} variant="contained" color="primary">
            Cerrar Sesión
          </Button>
        </div>
      ) : (
        <Typography variant="body1">No has iniciado sesión.</Typography>
      )}
    </Box>
  );
};

export default LoggedUser;
