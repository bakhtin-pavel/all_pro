import React from 'react';

import cl from './styles/ProductPlinth.module.css';
import './styles/ProductPlinth.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testSlide from '../components/media/images/testSlideProductPlinth.png';
import test from '../components/media/images/MainSlider_Img.png';

import SpecOffers from '../components/SpecOffers';
import Filter from '../components/UI/filter/Filter';
import { useNavigate } from 'react-router-dom';
import ButtonInCatalog from '../components/UI/button/ButtonInCatalog';

const ProductPlinth = () => {

    const navigate = useNavigate()

    const settings = {
        customPaging: function (i) {
            return (
                <div src={i} className={cl.dotsButton}></div>
            );
        },
        dots: true,
        dotsClass: cl.myDots,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <>
            <div className={cl.container}>
                <div className={cl.topBlock}>
                    <div id='sliderProduct' className={cl.sliderContainer}>
                        <Slider {...settings}>
                            <img src={testSlide} alt="Изображение" className={cl.slideImg} />
                            <img src={test} alt="Изображение" className={cl.slideImg} />
                            <img src={testSlide} alt="Изображение" className={cl.slideImg} />
                        </Slider>
                    </div>
                    <div className={cl.specification}>
                        <div>
                            <p className={cl.head}>Плинтус скрытого монтажа</p>
                            <div className={cl.decor}></div>
                            <p className={cl.name}>Al 13—323</p>
                        </div>
                        <div className={cl.colorAndSize}>
                            <Filter
                                nameFilter='цвет'
                                classContainer={cl.filterContainer}
                                classFilter={cl.filterType}
                                classDropdown={cl.dropDownContainer}
                            >
                                <div className={cl.dropDownItem}>синий</div>
                            </Filter>
                            <Filter
                                nameFilter='вид плинтуса'
                                classContainer={cl.filterContainer}
                                classFilter={cl.filterType}
                                classDropdown={cl.dropDownContainer}
                            >
                                <div className={cl.dropDownItem}>синий</div>
                            </Filter>
                        </div>
                        <div className={cl.buttons}>
                            <div className={cl.button}>
                                <ButtonInCatalog>скачать 3D Модель</ButtonInCatalog>
                            </div>
                            <div className={cl.button}>
                                <ButtonInCatalog onClick={() => navigate('/installation')}>монтаж плинтуса</ButtonInCatalog>
                            </div>
                        </div>
                        <p className={cl.price}>1500₽</p>
                    </div>
                </div>
                <div className={cl.info}>
                    <p>
                        Щелевой плинтус – это простое и практичное решение оформления помещений. Представляет собой длинный профиль, который имеет прорези для установки плинтуса на пол. Щелевой плинтус имеет множество преимуществ, включая простоту установки, прочность и долговечность.
                    </p>
                </div>
            </div>
            <SpecOffers />
        </>
    )
}

export default ProductPlinth