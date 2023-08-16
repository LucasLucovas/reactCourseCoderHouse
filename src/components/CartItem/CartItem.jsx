

const CartItem = ({ id, title, price, quantity }) => {
  return (
    <div className="CartItem">
      <h4>{title}</h4>
      <p className="quantity">Quantity: {quantity}</p>
      <p className="price">Price: ${price}</p>
      <p className="total">Total: <span>${price * quantity}</span></p>
    </div>
  );
};

export default CartItem;