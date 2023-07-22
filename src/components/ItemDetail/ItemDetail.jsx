import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({id, title, image, category, description, price, stock}) => {

  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) =>{
    setQuantityAdded(quantity)

    const item = {
      id, title, price
    }

    addItem(item, quantity)
  } 

  return (

    <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">Price: ${price}</p>
            <p className="card-description">Category: {category}</p>
            <p className="card-description">Description: {description}</p>
            {
                quantityAdded > 0 ? (
                    <Link to={'/cart'} className='Option'>Finish Shopping</Link>
                ) : (
                    <ItemCount initial={1} maxStock={stock} onAdd={handleOnAdd}/>
                )
            }
        </div>
    </div>
  )
}

export default ItemDetail