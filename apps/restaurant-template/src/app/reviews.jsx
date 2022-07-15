import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Typography } from '@mui/material';

export default function Reviews({ review1, review2, review3 }) {


    return (
        <div id="reviews">
            <div id="stars">
                <StarIcon fontSize={'large'} />
                <StarIcon fontSize={'large'} />
                <StarIcon fontSize={'large'} />
                <StarIcon fontSize={'large'} />
                <StarIcon fontSize={'large'} />
            </div>

            <div >
                <Typography id="review1">{review1}</Typography>
                <Typography id="review2">{review2}</Typography>
                <Typography id="review3">{review3}</Typography>
            </div>


            {/* <ImageList className='imageList' sx={{ width: 700, height: 650 }} cols={3} rowHeight={164}>
                    {PictureList.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`/assets/${item.image}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`/assets/${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.id}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList> */}
        </div>
    )
}