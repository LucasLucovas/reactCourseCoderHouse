import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { Grid } from '@mui/material'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(()=>{
        setLoading(true)

        const docRef = doc(db, 'Products', id)

        getDoc(docRef)
            .then(response =>{
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
            
    }, [id])
  return (
      <Grid container justifyContent={"center"} alignContent={"center"} height={'100vh'} overflow={'hidden'} bgcolor={'beige'}>
        <Grid item mb={10}>
            <ItemDetail {...product}/>
        </Grid>
      </Grid>
  )
}

export default ItemDetailContainer