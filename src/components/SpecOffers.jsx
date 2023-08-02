import React, { useEffect, useState } from 'react';

import cl from './styles/SpecOffers.module.css';

import axios from 'axios';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderButtonNext from './UI/button/SliderButtonNext';
import SliderButtonPrev from './UI/button/SliderButtonPrev';

import { useWindowSize } from '../hooks/useWindowSize';
import SliderButtonNextV from './UI/button/SliderButtonNextV';
import SliderButtonPrevV from './UI/button/SliderButtonPrevV';

const SpecOffers = () => {

    const size = useWindowSize()

    const [items, setItems] = useState([])

    async function fetchProductsSpec() {
        const response = await axios.get('http://95.163.229.9:8005/v1/products/special')
        setItems(response.data.data)
        console.log(response.data)
    }

    useEffect(() => {
        fetchProductsSpec()
    }, [])


    useEffect(() => {
        const slideItems = document.querySelectorAll('.heightSlide');
        const slideHeights = Array.from(slideItems).map(item => item.offsetHeight);
        const maxHeight = Math.max(...slideHeights);

        slideItems.forEach(item => {
            item.style.height = `${maxHeight}px`;
        });
    }, [items]);

    const slider = React.useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(3, items ? items.length : 3),
        slidesToScroll: 1,
        nextArrow: <SliderButtonNext classN={cl.nextArrow} slider={slider} />,
        prevArrow: <SliderButtonPrev classN={cl.prevArrow} slider={slider} />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: Math.min(2, items ? items.length : 2),
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    vertical: true,
                    verticalSwiping: true,
                    slidesToShow: 3,
                    nextArrow: <SliderButtonNextV classN={cl.nextArrow} slider={slider} />,
                    prevArrow: <SliderButtonPrevV classN={cl.prevArrow} slider={slider} />,
                }
            },
        ],
    };

    return (
        <section className={cl.container}>

            <div className={cl.lineLeft}></div>
            <div className={cl.lineRight}></div>

            <div className={cl.wrapper}>
                <h2 className={cl.specHead}>специальные предложения</h2>

                {size.innerWidth < 1025 && items.length <= 3
                    ? <div className={cl.fewSlides}>
                        {items && items.map((item) =>
                            <div key={item.id} className={cl.sliderItem}>
                                <div className={cl.itemImg}>
                                    <img src={item.images[0]} alt="Изображение" />
                                </div>
                                <div className={cl.itemInfo}>
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.vendor_code}</p>
                                    </div>
                                    <div className={cl.itemInfoDecor}>
                                        <p>-{item.discount}%</p>
                                        <div className={cl.itemInfoDecor1}></div>
                                        <div className={cl.itemInfoDecor2}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    : <div className={cl.sliderWrapper}>
                        <Slider ref={slider} {...settings}>
                            {items && items.map((item) =>
                                <div key={item.id} className='heightSlide'>
                                    <div className={cl.sliderItem}>
                                        <div className={cl.itemImg}>
                                            <img src={item.images[0]} alt="Изображение" />
                                        </div>
                                        <div className={cl.itemInfo}>
                                            <div>
                                                <p>{item.name}</p>
                                                <p>{item.vendor_code}</p>
                                            </div>
                                            <div className={cl.itemInfoDecor}>
                                                <p>-{item.discount}%</p>
                                                <div className={cl.itemInfoDecor1}></div>
                                                <div className={cl.itemInfoDecor2}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                }

            </div>
        </section>
    )
}

export default SpecOffers