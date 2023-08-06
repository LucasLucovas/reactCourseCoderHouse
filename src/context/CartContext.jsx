import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const newTotalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("The product is already in the cart");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const total = calculateTotal()

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
