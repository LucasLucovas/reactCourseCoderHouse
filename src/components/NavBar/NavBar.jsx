import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <h1>Full Hardware</h1>

        <nav>
            <ul>
                <li>Products</li>
                <li>About</li>
                <li>Hot Sale</li>
            </ul>
        </nav>
        <CartWidget />
    </header>
  )
}

export default NavBar