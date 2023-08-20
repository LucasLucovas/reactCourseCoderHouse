import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import { Box, CssBaseline } from '@mui/material'

function App() {

  return (
    <Box height='100vh'>
      <CssBaseline/>
      <div className='App'>
        <BrowserRouter>
            <CartProvider>
                    <NavBar/>
                    <Routes>
                      <Route path='/' element={<ItemListContainer/>}/>
                      <Route path='/category/:category' element={<ItemListContainer/>}/>
                      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                      <Route path='/cart' element={<Cart />}/>
                      <Route path='/checkout' element={<Checkout />}/>
                      <Route path='/login' element={<Login />}/>
                      <Route path='/signup' element={<SignUp />}/>
                      <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
                    </Routes>
            </CartProvider>
        </BrowserRouter>
      </div>
    </Box>
  )
}

export default App
