import { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(()=>{
        getProductById(itemId)
            .then(res =>{
                setProduct(res)
            })
            .catch(err =>{
                console.error(err)
            })
            
    },[itemId])
  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer