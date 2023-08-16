import {useState} from 'react'


// Mui imports
import Button from '@mui/material/Button';
import { Grid, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { indigo } from '@mui/material/colors';

const color ={
    indigo: indigo[500]
}

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
    <Grid container spacing={4}>
        <Grid flexDirection={'row'} item>
            <IconButton size='small' onClick={increment}>
                <AddIcon />
            </IconButton>
            <Typography m={1} fontSize={15} color={color.indigo} variant='div'>{quantityCounter}</Typography>
            <IconButton size='small' onClick={decrement}>
                <RemoveIcon/>
            </IconButton>
        </Grid>
        <Grid item>
            <div>
                <Button size='small' variant='contained' onClick={() => onAdd(quantityCounter)} disabled={!maxStock}>
                    Add to Cart
                </Button>
            </div>
        </Grid>
    </Grid>
  )
}

export default ItemCount