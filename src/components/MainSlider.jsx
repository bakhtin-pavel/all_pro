import React, { useEffect, useState } from 'react';

import cl from './styles/MainSlider.module.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/MainSlider.css';

import axios from 'axios';



const MainSlider = () => {

    const [slides, setSlides] = useState([])

    async function fetchBanners() {
        const response = await axios.get('https://api.alpro13.ru/v1/banners')
        setSlides(response.data.data)
        console.log(response.data.data)
    }

    useEffect(() => {
        fetchBanners()
    }, [])

    const settings = {
        dots: true,
        fade: true,
        lazyLoad: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
            <div>
                <ul>
                    {dots}
                </ul>
            </div>
        ),
        customPaging: i => (
            <div src={i}></div>
        )
    };

    return (
        <div className={cl.sliderContainer}>
            <Slider {...settings}>
                {slides.map((slide) =>
                    <div key={slide.id} className={cl.slideImg}>
                        <img src={slide.image} alt='Изображение' />
                        <div
                            className={cl.sliderCaption}
                            dangerouslySetInnerHTML={{ __html: slide.title }}
                        >
                        </div>
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default MainSlider