import React, { useState, useRef, useEffect } from 'react';

import cl from './styles/ALPlinth.module.css';

import axios from 'axios';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderButtonNext from '../../UI/button/SliderButtonNext';
import SliderButtonPrev from '../../UI/button/SliderButtonPrev';
import DropDown from '../../UI/dropdown/DropDown';

const ALPlinth = () => {

    const [allPlinth, setAllPlinth] = useState();
    const [item, setItem] = useState();

    async function fetchAllPlinth() {
        const response = await axios.get('https://api.alpro13.ru/v1/blueprints')
        setAllPlinth(response.data.data)
        console.log(response.data.data)
    }

    useEffect(() => {
        fetchAllPlinth()
    }, [])

    useEffect(() => {
        if (allPlinth) {
            setItem(allPlinth[0])
        }
    }, [allPlinth])


    const [open, setOpen] = useState(false)
    const switchRef = useRef()
    const onClose = () => {
        setOpen(false)
    }

    const slider = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(2, item ? item.blueprints.length : 2),
        slidesToScroll: 1,
        nextArrow: <SliderButtonNext classN={cl.nextArrow} slider={slider} />,
        prevArrow: <SliderButtonPrev classN={cl.prevArrow} slider={slider} />,
    };

    return (
        <section className={cl.container}>
            <div className={cl.headWrapper}>
                <h2>Al плинтуса</h2>
            </div>
            <div className={cl.background}>
                <div className={cl.wrapper}>

                    <div className={cl.itemSwitchWrapper}>
                        <button ref={switchRef} className={cl.itemSwitch} onClick={() => {
                            setOpen(!open)
                        }}>
                            <p className={cl.itemSwitchText} style={{ fontWeight: 600 }}>{item && item.category.name}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M1.00031 5.94977L7.02539 11.9749L12.9752 6.02509" stroke="black" strokeWidth="2" />
                                <path d="M6.96582 11.9581V0.664307" stroke="black" strokeWidth="2" />
                            </svg>
                        </button>
                        <DropDown opened={open} onClose={onClose} className={cl.dropDown} parentRef={switchRef}>
                            {allPlinth && item && allPlinth.map((itemVid) =>
                                <button
                                    key={itemVid.id}
                                    className={[cl.dropDownItem, cl.itemSwitchText].join(' ')}
                                    style={itemVid.id === item.id ? { fontWeight: 600, background: '#cacaca' } : null}
                                    onClick={() => setItem(itemVid)}
                                >{itemVid.category.name}</button>
                            )}
                        </DropDown>
                    </div>

                    <div className={cl.item}>

                        <div className={cl.itemImages}>
                            <div className={cl.sliderWrapper}>
                                <Slider ref={slider} {...settings}>
                                    {item && item.blueprints.map((img) =>
                                        <div key={img}>
                                            <div className={cl.sliderItem}>
                                                <img src={img} alt="Чертёж" />
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            </div>

                            <div className={cl.imageWrapper}>
                                <img src={item ? item.model3d : ''} alt="Плинтус(объёмный)" />
                            </div>
                        </div>

                        <div className={cl.itemInfo}>
                            <h3>Al плинтуса</h3>
                            <p>{item && item.text}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ALPlinth