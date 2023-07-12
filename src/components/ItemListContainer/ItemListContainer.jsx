import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  
  const { category } = useParams()

  useEffect(()=>{
    const asyncFunc = category ? getProductsByCategory : getProducts

      asyncFunc(category)
        .then(res => {
          setProducts(res)
        })
        .catch(error => {
           console.error(error);
        })

  },[category])

  return (
    <div>
        <h2>{greeting}</h2>
        {console.log(products)}
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer