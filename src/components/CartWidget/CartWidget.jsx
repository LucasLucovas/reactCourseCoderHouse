import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const imgCart = "/carro.png";
    const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
        <img className='imgCart' src={imgCart} alt="Cart" />
        { totalQuantity }
    </Link>
  )
}

export default CartWidget