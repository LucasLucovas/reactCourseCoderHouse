import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

// MUI imports

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';
import { grey, teal, indigo } from '@mui/material/colors'

const color = {
  grey: grey[500],
  teal: teal[300],
  indigo: indigo[400]
}


const ItemDetail = ({id, title, image, category, description, price, stock}) => {

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
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={image}
            title={title}
          />
          <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                  {title}
              </Typography>
              <Typography variant="body2" color={color.teal}>
                  ${price}
              </Typography>
              <Typography mt={1} variant="body2" color={color.indigo}>
                      Category: {category}
              </Typography>

              <Typography mt={1} variant="body2" color={color.grey}>
                  {description}
              </Typography>

          </CardContent>
          <CardActions>
                {
                    quantityAdded > 0 ? (
                        <Link to={'/cart'}>Finish Shopping</Link>
                    ) : (
                        <ItemCount initial={1} maxStock={stock} onAdd={handleOnAdd}/>
                    )
                }
          </CardActions>
      </Card>
  )
}

export default ItemDetail
