import { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { id } = useParams()

    useEffect(()=>{
        getProductById(id)
            .then(res =>{
                setProduct(res)
            })
            .catch(err =>{
                console.error(err)
            })
            
    },[id])
  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...product}/>
        {console.log(product)}
    </div>
  )
}

export default ItemDetailContainer