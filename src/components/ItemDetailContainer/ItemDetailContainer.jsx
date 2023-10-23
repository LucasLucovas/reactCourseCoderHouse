//React imports
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

//Firebase imports
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/config'

//Component imports
import ItemDetail from '../ItemDetail/ItemDetail'

//Mui imports
import { Grid, Modal, Button } from '@mui/material'
import { brown, cyan, teal } from '@mui/material/colors';

const color = {
    brown: brown[50],
    cyan: cyan[100],
    teal: teal[100],
  };


//ELIMINAR ITEMDETAILCONTAINER Y USAR DIRECTAMENTE ITEM DETAIL PARA NO GENERAR CONFLICTOS CON LAS PROPS

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
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
    <>
        <Button 
            onClick={handleOpen}
            variant="contained"
            component={Link} 
            to={`/item/${id}`}
            sx={{
                backgroundColor: color.teal, 
                color: 'black',
                '&:hover':{
                backgroundColor: color.cyan
                }
            }}
            >
            See Details
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        }}
      >
        <Grid container justifyContent={"center"} alignContent={"center"} height={'100vh'} overflow={'hidden'} bgcolor={color.brown}>
            <Grid item mb={10}>
                <ItemDetail {...product}/>
            </Grid>
        </Grid>
      </Modal>
    </>
  )
}

export default ItemDetailContainer