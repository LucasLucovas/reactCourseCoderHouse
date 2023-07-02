import {useState} from 'react'
import "./ItemCount.css"

const ItemCount = ({maxStock, initial, onAdd}) => {
    const [quantityCounter, setQuantityCounter] = useState(initial)



    const increment = ()=>{
        if (quantityCounter < maxStock){
            setQuantityCounter(quantityCounter + 1)
        }
    }

    const decrement = ()=>{
        if (quantityCounter > 1){
            setQuantityCounter(quantityCounter - 1)
        }
    }

  return (
    <div className='itemCountContainer'>
        <button onClick={increment}> + </button>
        <p>{quantityCounter}</p>
        <button onClick={decrement}> - </button>
        <div>
            <button className='itemButton' onClick={() => onAdd(quantityCounter)} disabled={!maxStock}>
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default ItemCount