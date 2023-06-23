import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cl from './styles/MainSlider.module.css';
import './styles/MainSlider.css';

const MainSlider = () => {
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
                <div className={cl.sliderItem}>
                </div>
                <div className={cl.sliderItem}>
                </div>
                <div className={cl.sliderItem}>
                </div>
            </Slider>
            <div className={cl.sliderCaption}>
                <div className={cl.sliderCaption_1}>скрытые плинтуса</div>
                <div className={cl.sliderCaption_2}>красивый пол<br />без лишних деталей</div>
            </div>
        </div>
    )
}

export default MainSlider