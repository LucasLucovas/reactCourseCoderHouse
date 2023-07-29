import React, { useContext, useState } from 'react';
import { db } from '../firebase/config';
import { CartContext } from '../../context/CartContext';
import { Timestamp, collection, addDoc, writeBatch, doc, getDoc } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, clearCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const total = calculateTotal();

      if (typeof total !== 'number' || isNaN(total) || total <= 0) {
        console.error('Error creating order: Invalid total value.');
        setLoading(false);
        return;
      }

      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const productsRef = collection(db, 'Products');

      const outOfStock = [];
      for (const product of cart) {
        const { id, quantity } = product;
        const productDocRef = doc(productsRef, id);

        const productDocSnapshot = await getDoc(productDocRef);
        const productData = productDocSnapshot.data();

        if (!productData || productData.stock < quantity) {
          outOfStock.push(product);
        } else {
          batch.update(productDocRef, {
            stock: productData.stock - quantity,
          });
        }
      }

      if (outOfStock.length > 0) {
        console.error('Some products are out of stock or their quantity is not sufficient.');
        setLoading(false);
        return;
      }

      await batch.commit();

      const ordersRef = collection(db, 'orders');
      const newOrderRef = await addDoc(ordersRef, objOrder);

      clearCart();

      setOrderId(newOrderRef.id);

    } catch (error) {
      console.error('Error creating order:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Generating order</h1>;
  }

  if (orderId) {
    return <h1>The id of your order is: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
