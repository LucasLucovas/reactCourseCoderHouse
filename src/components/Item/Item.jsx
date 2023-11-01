//Component imports
import ItemDetail from '../ItemDetail/ItemDetail'

//Mui imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { grey, teal, cyan } from '@mui/material/colors'



const color = {
  grey: grey[100],
  teal: teal[100],
  cyan: cyan[100],
}





const Item = ({id, title, image, price}) => {
  return (
      <Card sx={{ maxWidth: 228, marginTop: 5, backgroundColor: color.grey}}>
          <CardMedia
            sx={{ height: 142, width: 228 }}
            image={image}
            title={title}
          />
          <CardContent sx={{ height:112 }}>
              <Typography gutterBottom variant="h6" fontSize={12} component="div">
                  {title}
              </Typography>
              <Typography variant="body2" fontSize={14} color={color.teal}>
                  ${price}
              </Typography>
          </CardContent>
          <CardActions>
              <ItemDetail id={id}/>
          </CardActions>
      </Card>
  )
}

export default Item