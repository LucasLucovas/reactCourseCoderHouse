import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div className="empty-cart">
                <h1>Nothing in the shopping cart</h1>
                <Link to='/' className='cart-option'>Products</Link>
            </div>
        )
    }

    return (
        <div className="cart-container">
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <div className="cart-total">
                <h3>Total amount: ${total}</h3>
                <button onClick={()=> clearCart()} className='cart-clear-button'>Clear Cart</button>
            </div>
            <Link to='/checkout' className='cart-checkout-button'>Checkout</Link>
        </div>
    )
}

export default Cart