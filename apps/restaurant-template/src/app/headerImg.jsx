import restaurantImg from './restaurantImg.jpg';
import { createTheme, Typography } from '@mui/material';

export default function HeaderImg({ title, subtitle }) {

    return (
        <section>
            <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"></link>

            <div style={{
                backgroundImage: `url(${restaurantImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>

                <div className='headImgContainer' style={{ minHeight: '550px' }}>
                    <div className='headTextContainer'>
                        <Typography variant='h3' id='title'>
                            <h1>{title}</h1>
                        </Typography>
                        <Typography variant='h4' id='subtitle'>
                            <h5>{subtitle}</h5>
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
    )
}