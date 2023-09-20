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
  teal: teal[600],
  indigo: indigo[400]
}




const Item = ({id, title, image, price}) => {
  return (
      <Card sx={{ maxWidth: 228, marginTop: 5}}>
          <CardMedia
            sx={{ height: 142, width: 228 }}
            image={image}
            title={title}
          />
          <CardContent sx={{ height:112 }}>
              <Typography gutterBottom variant="h6" fontSize={12} component="div">
                  {title}
              </Typography>
              <Typography variant="body2" fontSize={12} color={color.teal}>
                  ${price}
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