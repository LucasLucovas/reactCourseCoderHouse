import {useState} from 'react'
import "./ItemCount.css"

const ItemCount = () => {
    const [counter, setCounter] = useState(1)

    let max= 10;

    const increment = ()=>{
        if (counter < max){
            setCounter(counter + 1)
        }
    }

    const decrement = ()=>{
        if (counter > 1){
            setCounter(counter - 1)
        }
    }

  return (
    <div className='itemCountContainer'>
        <button onClick={increment}> + </button>
        <p>{counter}</p>
        <button onClick={decrement}> - </button>
    </div>
  )
}

export default ItemCount