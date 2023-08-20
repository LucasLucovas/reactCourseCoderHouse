import Item from '../Item/Item'
import { Grid } from '@mui/material'

const ItemList = ({products}) => {
  return (
    <Grid container spacing={2} alignContent={'center'} justifyContent={'center'} sx={{backgroundColor: 'white'}}>
        {products.map(prod => <Grid item><Item key={prod.id} {...prod}/></Grid>)}
    </Grid>
  )
}

export default ItemList