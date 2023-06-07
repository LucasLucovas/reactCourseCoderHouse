import React from 'react'

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