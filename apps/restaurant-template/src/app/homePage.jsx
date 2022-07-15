import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { Items } from './items';
import { Typography } from '@mui/material';
import Navigation from './navBar';
import HeaderImg from './headerImg'
import Footer from './footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import { ImageList, ImageListItem, CardActions } from '@mui/material';
import PictureList from './pictureList.json';
import ImageCarousel from './imageCarousel';
import Reviews from './reviews';
import { Link } from 'react-router-dom';

export function HomePage() {


    return (
        <div className="App">
            <HeaderImg title='Hungry Koi' subtitle='Asian fusion found in London' />
            {/* <Items /> */}

            <div className='container'>
                <Typography id="authenticBbq">Authentic BBQ</Typography>
                <Typography id="japanesePhrase">Meshiagare</Typography>

                <Reviews review1={'Review'} review2={'Review'} review3={'Review'}/>

                <ImageCarousel slides={PictureList} />
            </div>


            <Card className="menuCard" sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="err"
                    height="140"
                    image="/assets/images/kintan1.jpeg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Want the highest quality?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/items">
                        <Button size="small">See our menu</Button>
                    </Link>
                </CardActions>
            </Card>

            <Card className="menuCard" sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="err"
                    height="140"
                    image="/assets/images/kintan1.jpeg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Fancy something sweet?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">See our desserts</Button>
                </CardActions>
            </Card>

            <Card className="menuCard" sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="err"
                    height="140"
                    image="/assets/images/kintan1.jpeg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Quench that thirst
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">See our drinks</Button>
                </CardActions>
            </Card>

            <Footer />
        </div>
    );
}

export default HomePage