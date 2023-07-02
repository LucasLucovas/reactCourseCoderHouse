import { useState, useEffect } from 'react'

const JSONPlace = () => {
    const [users,setUsers]= useState([]);

    //funcion de pedir datos a una api solo con fetch
    // useEffect( ()=> {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    //     .catch(error => console.log("help me", error))
    // }, [])


    //try y catch me permite manejar un error. si algo dentro del try falla el codigo continua en  el catch
    try{
        const askUsers = async () =>{ //async await le pone un freno a cada accion hasta que se complete
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUsers(data);
        }
        askUsers();
    } catch(error){
        console.log(EvalError)
    }


  return (
    <div>
        <h2>Users: JsonPlaceHolder</h2>
        <ul>
            {
                users.map(user => {
                    return (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}



export default JSONPlace