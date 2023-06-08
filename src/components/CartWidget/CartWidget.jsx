import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
    const imgCart = "/carro.png";
  return (
    <div>
        <img className='imgCart' src={imgCart} alt="Cart" />
        <p>10</p>
    </div>
  )
}

export default CartWidget