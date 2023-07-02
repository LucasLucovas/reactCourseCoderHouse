import './item.css'

const Item = ({id, title, image, price, stock}) => {
  return (

    <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">Price: ${price}</p>
            <p className="card-description">Stock: {stock}</p>
            <button className="card-button">See Details</button>
        </div>
    </div>

  )
}

export default Item