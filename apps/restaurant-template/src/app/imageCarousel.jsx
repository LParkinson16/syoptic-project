import { useState, useEffect } from "react";
import PictureList from './pictureList.json';
import { Card } from "@mui/material";
import '../styles.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function ImageCarousel({ slides }) {

    const [current, setCurrent] = useState(0);
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const length = slides.length

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide()
        }, 3000);
    });

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    return (
        <div>
            <section className='slider'>
                {/* <KeyboardArrowLeftIcon className='leftArrow' onClick={nextSlide}>prev</KeyboardArrowLeftIcon>
                <KeyboardArrowRightIcon className='rightArrow' onClick={prevSlide}>next</KeyboardArrowRightIcon> */}
                <div className="imageSlide">
                    {PictureList.map((slide, index) => {
                        return (
                            <div id={index === current ? 'slide active' : 'slide'} >
                                {index === current && (<img src={`/assets/${slide.image}?w=164&h=164&fit=crop&auto=format`} alt='err' />)}
                            </div>
                        )
                    })}
                </div>

            </section>
        </div>
    )
}