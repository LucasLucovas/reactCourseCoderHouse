import { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    useEffect(()=>{
        getProductById('1')
            .then(res =>{
                setProduct(res)
            })
            .catch(err =>{
                console.error(err)
            })
            
    },[])
  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer