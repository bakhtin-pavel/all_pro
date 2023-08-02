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
        const response = await axios.get('http://95.163.229.9:8005/v1/banners')
        setSlides(response.data.data)
    }

    useEffect(() => {
        fetchBanners()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
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
                    </div>
                )}
            </Slider>
            <div className={cl.sliderCaption}>
                <div className={cl.sliderCaption_1}>скрытые плинтуса</div>
                <div className={cl.sliderCaption_2}>красивый пол<br />без лишних деталей</div>
            </div>
        </div>
    )
}

export default MainSlider