//React imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Home from './Home/Home'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import LoggedUser from './components/LoggedUser/LoggedUser'

//Mui imports
import { CssBaseline } from '@mui/material'

//Context imports
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <>
      <CssBaseline/>
      <div className='App'>
        <BrowserRouter>
          <ProductProvider>
              <CartProvider>
                      <NavBar/>
                      <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/category/:category' element={<ItemListContainer/>}/>
                        <Route path='/item/:id' element={<ItemDetail/>}/>
                        <Route path='/cart' element={<Cart />}/>
                        <Route path='/checkout' element={<Checkout />}/>
                        <Route path='/loggeduser' element={<LoggedUser />}/>
                        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
                      </Routes>
              </CartProvider>
          </ProductProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
