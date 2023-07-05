import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({id, title, image, category, description, price, stock}) => {
  return (

    <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">Price: ${price}</p>
            <p className="card-description">Category: {category}</p>
            <p className="card-description">Description: {description}</p>
            <ItemCount initial={1} maxStock={stock} onAdd={(quantity) => console.log('Added Quantity', quantity)}/>
        </div>
    </div>

  )
}

export default ItemDetail