import { Link } from 'react-router-dom'

//Mui imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey, teal, indigo } from '@mui/material/colors'

const color = {
  grey: grey[500],
  teal: teal[300],
  indigo: indigo[400]
}




const Item = ({id, title, image, price, stock}) => {
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
                  Stock: {stock}
              </Typography>
          </CardContent>
          <CardActions>
              <Button variant='outlined' component={Link} to={`/item/${id}`}>
                  See Details
              </Button>
          </CardActions>
      </Card>
  )
}

export default Item