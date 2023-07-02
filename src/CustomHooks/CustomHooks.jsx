import { useCounter } from "./useCounter.js"
import { useFetch } from "./useFetch.js"

const CustomHooks = () => {
    const {counter, counterUp, counterDown} = useCounter(1,10)
    const data = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
        <h2>CustomHooks: Counter</h2> 
        <button onClick={counterDown}>Substract</button>
        <strong>{counter}</strong>
        <button onClick={counterUp}>Add</button>

        <hr />

        <h2>Fetch Data</h2>
        {data && data.map((user)=> <p key={user.id}>{user.name}</p>)}
    </div>
  )
}

export default CustomHooks