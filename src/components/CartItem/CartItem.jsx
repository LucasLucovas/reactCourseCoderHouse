import React from 'react';
import './CartItem.css';

const CartItem = ({ id, title, price, quantity }) => {
  return (
    <div className="CartItem">
      <h4>{title}</h4>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price}</p>
      <p>Total: ${price * quantity}</p>
    </div>
  );
};

export default CartItem;
