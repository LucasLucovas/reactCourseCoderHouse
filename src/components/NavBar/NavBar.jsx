import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (

    
    <nav className='navBar'>
    <Link to={'/'}>
        <h1>Best Random Ecommerce</h1>
    </Link>
          <div className='categories'>
            <NavLink to={`/category/men's clothing`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Men's clothing</NavLink>
            <NavLink to={`/category/jewelery`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Jewelery</NavLink>
          </div>
        <CartWidget />
    </nav>

  )
}

export default NavBar