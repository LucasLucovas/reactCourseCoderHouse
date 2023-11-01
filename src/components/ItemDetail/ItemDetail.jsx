//React imports
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

//Firebase imports
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/config'

//Context import
import { CartContext } from '../../context/CartContext'

//Components import
import ItemCount from '../ItemCount/ItemCount'

// MUI imports
import {
         Modal, 
         Typography, 
         Button, 
         CardMedia, 
         CardContent, 
         CardActions, 
         Card } 
         from '@mui/material';

import { grey, teal, indigo, brown, cyan } from '@mui/material/colors'

const color = {
  grey: grey[500],
  teal: teal[300],
  tealbutton: teal[100],
  indigo: indigo[400],
  brown: brown[50],
  cyan: cyan[100],
}


const ItemDetail = ({id}) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  
  useEffect(() => {
    setLoading(true);
      const docRef = doc(db, 'Products', id);
  
      getDoc(docRef)
        .then(response => {
          const data = response.data();
          const productAdapted = { id: response.id, ...data };
  
          setProduct(productAdapted);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
  }, [id]);
  
  const [quantityAdded, setQuantityAdded] = useState(0)
  
  const { addItem } = useContext(CartContext)

  


  const handleOnAdd = (quantity) =>{
    setQuantityAdded(quantity)

    const item = {
      id, title, price
    }

    addItem(item, quantity)
  } 

  return (
    <>
        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{
            backgroundColor: color.tealbutton,
            color: 'black',
            '&:hover': {
              backgroundColor: color.cyan,
            },
          }}
        >
          Ver detalles
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
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={product ? product.image : ''}
              title={product ? product.title : ''}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {product ? product.title : ''}
                </Typography>
                <Typography variant="body2" color={color.teal}>
                    ${product ? product.price : ''}
                </Typography>
                <Typography mt={1}  variant="body2">
                    Stock: {product ? product.stock : ''}
                </Typography>
                <Typography mt={1} variant="body2" color={color.indigo}>
                        Category: {product ? product.category : ''}
                </Typography>

                <Typography mt={1} variant="body2" color={color.grey}>
                    {product ? product.description : ''}
                </Typography>

            </CardContent>
            <CardActions>
                  {
                      quantityAdded > 0 ? (
                          <Link to={'/cart'}>Finish Shopping</Link>
                      ) : (
                          <ItemCount initial={1} maxStock={product.stock} onAdd={handleOnAdd}/>
                      )
                  }
            </CardActions>
        </Card>
      </Modal>
      
    </>
  )
}

export default ItemDetail
