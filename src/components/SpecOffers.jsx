import React from 'react';

import cl from './styles/SpecOffers.module.css';

import specImg_0 from './media/images/specImg_0.png';
import specImg_1 from './media/images/specImg_1.png';
import specImg_0_m from './media/images/specImg_0_m.png';
import specImg_1_m from './media/images/specImg_1_m.png';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderButtonNext from './UI/button/SliderButtonNext';
import SliderButtonPrev from './UI/button/SliderButtonPrev';

import { useWindowSize } from '../hooks/useWindowSize';

const SpecOffers = () => {

    const size = useWindowSize()

    const slider = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: true,
                    verticalSwiping: false,
                }
            },
        ],
        nextArrow: <SliderButtonNext classN={cl.nextArrow} slider={slider} />,
        prevArrow: <SliderButtonPrev classN={cl.prevArrow} slider={slider} />,
    };

    return (
        <section className={cl.container}>

            <div className={cl.lineLeft}></div>
            <div className={cl.lineRight}></div>

            <div className={cl.wrapper}>
                <h2 className={cl.specHead}>специальные предложения</h2>

                <div className={cl.sliderWrapper}>
                    <Slider ref={slider} {...settings}>

                        <div>
                            <div className={cl.sliderItem}>
                                <div className={cl.itemImg}>
                                    {size.innerWidth > 1024
                                        ? <>
                                            <img src={specImg_0} alt="Изображение" />
                                        </>
                                        : <>
                                            <img src={specImg_0_m} alt="Изображение" />
                                        </>
                                    }
                                </div>
                                <div className={cl.itemName}>Теневой плинтус<br />скрытого монтажа</div>
                            </div>
                        </div>

                        <div>
                            <div className={cl.sliderItem}>
                                <div className={cl.itemImg}>
                                    {size.innerWidth > 1024
                                        ? <>
                                            <img src={specImg_1} alt="Изображение" />
                                        </>
                                        : <>
                                            <img src={specImg_1_m} alt="Изображение" />
                                        </>
                                    }
                                </div>
                                <div className={cl.itemName}>Теневой плинтус<br />скрытого монтажа</div>
                            </div>
                        </div>

                        <div>
                            <div className={cl.sliderItem}>
                                <div className={cl.itemImg}>
                                    {size.innerWidth > 1024
                                        ? <>
                                            <img src={specImg_0} alt="Изображение" />
                                        </>
                                        : <>
                                            <img src={specImg_0_m} alt="Изображение" />
                                        </>
                                    }
                                </div>
                                <div className={cl.itemName}>Теневой плинтус<br />скрытого монтажа</div>
                            </div>
                        </div>

                        <div>
                            <div className={cl.sliderItem}>
                                <div className={cl.itemImg}>
                                    {size.innerWidth > 1024
                                        ? <>
                                            <img src={specImg_1} alt="Изображение" />
                                        </>
                                        : <>
                                            <img src={specImg_1_m} alt="Изображение" />
                                        </>
                                    }
                                </div>
                                <div className={cl.itemName}>Теневой плинтус<br />скрытого монтажа</div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default SpecOffers