import { useQuery } from '@apollo/client';
import { getItems } from '../queries/getItems';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export function Items() {

  const { loading, error, data } = useQuery(getItems);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error 😭</p>;
  const set = data.allSets
  console.log(set)
  return (
    <div className='App'>
      <Typography variant='h2' id='itemTitle'>Check out our main courses</Typography>
    <div id="itemList">
      {data.allSets.map(item => {
        return (
          <Card id="itemCard">
            <CardContent>
              <CardMedia
                component="img"
                height="140"
                alt="err"
                src={item.image}>
              </CardMedia>
              <Typography variant='h6'>
                <p>{item.name}</p>
              </Typography>
              <Typography>
                <p>{item.description}</p>
                <p>Allergens: {item.allergens}</p>
                <p>£{item.price}</p>
              </Typography>
            </CardContent>
            <Button>Add to basket</Button>
          </Card>
        )
      })}
    </div>
    </div>
  )
}