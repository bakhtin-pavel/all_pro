import React, { useState } from 'react';

import cl from './styles/ALPlinth.module.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderButtonNext from '../../UI/button/SliderButtonNext';
import SliderButtonPrev from '../../UI/button/SliderButtonPrev';
import DropDown from '../../UI/dropdown/DropDown';

import itemImg from '../../media/images/plint_img.png';
import plint0 from '../../media/images/plint_0.png';
import plint1 from '../../media/images/plint_1.png';
import plint2 from '../../media/images/plint_2.png';
import plint3 from '../../media/images/plint_3.png';

const ALPlinth = () => {

    const sliderImages = [plint0, plint1, plint2, plint3]


    const [open, setOpen] = useState(false)

    const onClose = () => {
        setOpen(false)
    }


    const slider = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SliderButtonNext classN={cl.nextArrow} slider={slider} />,
        prevArrow: <SliderButtonPrev classN={cl.prevArrow} slider={slider} />,
    };

    return (
        <section className={cl.container}>
            <h2>Al плинтуса</h2>
            <div className={cl.wrapper}>

                <div className={cl.itemSwitchWrapper}>
                    <button className={cl.itemSwitch} onClick={(e) => {
                        e.stopPropagation()
                        setOpen(!open)
                    }}>
                        <p className={[cl.itemSwitchTextPlace, cl.itemSwitchText].join(' ')}>теневой плинтус скрытого монтажа L под рассеиватель</p>
                        <div className={cl.itemSwitchIcon}></div>
                    </button>
                    <DropDown opened={open} onClose={onClose} className={cl.dropDownContainer}>
                        <div className={cl.dropDown}>
                            <button className={[cl.dropDownItem, cl.itemSwitchText].join(' ')}>теневой плинтус скрытого монтажа L</button>
                            <button className={[cl.dropDownItem, cl.itemSwitchText].join(' ')}>теневой плинтус скрытого монтажа L</button>
                            <button className={[cl.dropDownItem, cl.itemSwitchText].join(' ')}>теневой плинтус скрытого монтажа L</button>
                        </div>
                    </DropDown>
                </div>

                <div className={cl.item}>

                    <div className={cl.itemImages}>
                        <Slider ref={slider} {...settings}>
                            {sliderImages.map((img) =>
                                <div className={cl.sliderItem}>
                                    <img src={img} alt="" />
                                </div>
                            )}
                        </Slider>

                        <div className={cl.imageWrapper}>
                            <img src={itemImg} alt="Плинтус(объёмный)" />
                        </div>
                    </div>

                    <div className={cl.itemInfo}>
                        <h3>Al плинтуса</h3>
                        <p>это простое и практичное решение для оформления помещенияэто простое и практичное решение для оформления помещенияэто простое и практичное решение для оформления помещенияэто простое и практичное решение для оформления помещенияэто простое и практичное решение для оформления помещенияэто простое и практичное решение для оформления помещенияэто простое и практичное решение для оформления помещенияэто простое </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ALPlinth