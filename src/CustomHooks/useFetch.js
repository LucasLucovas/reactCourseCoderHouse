import { useState, useEffect } from "react";


export const useFetch = (url) =>{
    const [data, setData]= useState(null)

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(dataRes => setData(dataRes))
        .catch(err => console.log(err))
    },[url])

    return data;
}