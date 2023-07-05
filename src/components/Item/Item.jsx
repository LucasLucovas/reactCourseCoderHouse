import './item.css'
import { Link } from 'react-router-dom'

const Item = ({id, title, image, price, stock}) => {
  return (

    <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">Price: ${price}</p>
            <p className="card-description">Stock: {stock}</p>
            <Link to={`/item/${id}`} className="card-button">See Details</Link>
        </div>
    </div>

  )
}

export default Item