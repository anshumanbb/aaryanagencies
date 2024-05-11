import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Productcard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          
          image ="https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/0e8d9e28f4a043509d285198a34a369d.jpg"
          alt="Amlokind-AT"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Amlokind-AT
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1 strip of 15 tablets
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            MRP- ₹49.50
          </Typography>
          <Typography variant="h6" color="">
            GET @ ₹30
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
      
        <Button size="small" color="primary">
        
          Add to Cart {<AddShoppingCartIcon/>}
        
        </Button>
        
      </CardActions>
    </Card>
  );
}