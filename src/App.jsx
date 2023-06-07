import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola"/>
      <ItemCount/>
    </>
  )
}

export default App
