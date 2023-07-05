// import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
// import JSONPlace from './components/Jsonplace/JSONPlace'
// import Articles from './components/Articles/Articles'
// import CustomHooks from './CustomHooks/CustomHooks'
// import { mensajeConTitulo, conAumento } from './Paterns/hoc'
// import Mensaje from './Paterns/Mensaje'
// import Producto from './Paterns/Producto'
// import Login from './Paterns/Login'

function App() {

  // const NuevoComponente = mensajeConTitulo(Mensaje)
  // const NuevoProducto = conAumento(Producto)


  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>



      {/* 
      <JSONPlace/>

      <h1>Kittes blog</h1>

      <h2>News</h2>
      <Articles img={"http://placekitten.com/200/300"} title={"New Foods"}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dignissimos adipisci? Temporibus</p>
      <strong>Read time 3min</strong>
      </Articles>

      <h2>Recipes</h2>
      <Articles img={"http://placekitten.com/200/300"} title={"Some Random Title"}>
        <ul>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
      </Articles>


      <CustomHooks/>

      <NuevoComponente/>
      <NuevoProducto nombre={"Tomate"} precio={1200}/>
      <Login/> */}
    </>
  )
}

export default App
