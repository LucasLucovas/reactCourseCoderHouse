import { useState } from "react";

//useCounter: creamos nuestro propio hook para contar productos




export const useCounter = (initValue, maxValue)=>{
    const [counter,setCounter]= useState(initValue)

    const counterUp = () =>{
        if(counter < maxValue){
            setCounter(counter + 1)
        }
    }
    const counterDown = () =>{
        if(counter > initValue){
            setCounter(counter - 1)
        }
    }

    return {counter, counterUp, counterDown}
}