import React, { useState, useEffect } from 'react';

import cl from './styles/ProductPlinth.module.css';
import './styles/ProductPlinth.css';

import models_3D from '../components/media/3DModels/3D_models.max';
import { handleDownload } from '../components/utilits/handleDownload';

import axios from 'axios';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SpecOffers from '../components/SpecOffers';
import ButtonInCatalog from '../components/UI/button/ButtonInCatalog';
import MyModal from '../components/UI/modal/MyModal';

import { Helmet } from 'react-helmet';
import { useWindowSize } from '../hooks/useWindowSize';

const ProductPlinth = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate()
    const params = useParams()

    const [item, setItem] = useState()
    const [modal, setModal] = useState(false)
    const size = useWindowSize();

    async function fetchProduct() {
        const response = await axios.get('https://api.alpro13.ru/v1/product', {
            params: {
                slug: params.slug,
            }
        })
        setItem(response.data.data)
        console.log(response.data.data)
    }

    useEffect(() => {
        fetchProduct()
    }, [pathname])



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
        adaptiveHeight: true,
    };

    return (
        <>
            <Helmet>
                <title>{`Al Pro: ${item && item.name}`}</title>
            </Helmet>
            <div className={cl.container}>
                <button className={cl.goBack} onClick={() => navigate(-1)}>
                    <svg width="22" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 76">
                            <g id="Group 70">
                                <g id="Group 3">
                                    <path id="Vector 5" d="M12.0376 2L3 11.0376L11.9246 19.9623" stroke="black" strokeWidth="3" />
                                </g>
                                <path id="Vector 8" d="M3.02489 10.9483L19.9656 10.9483" stroke="black" strokeWidth="3" />
                            </g>
                        </g>
                    </svg>
                </button>
                <div className={cl.topBlock}>
                    <div id='sliderProduct' className={cl.sliderContainer}>
                        <Slider {...settings}>
                            {item && item.bigImages.map((img, index) =>
                                index !== 0 &&
                                <img
                                    key={img}
                                    src={img}
                                    alt="Изображение"
                                    className={cl.slideImg}
                                    onClick={() => {
                                        if (size.innerWidth > 1024) {
                                            setModal(true)
                                        }
                                    }}
                                />
                            )}
                        </Slider>
                    </div>
                    <div className={cl.specification}>
                        <div>
                            <p className={cl.head}>{item && item.name}</p>
                            <div className={cl.decor}></div>
                            <p className={cl.name}>{item && item.vendor_code}</p>
                        </div>
                        <div className={cl.colorAndSize}>
                            <div>
                                <p className={cl.colSizHead}>цвет:</p>
                                <p className={cl.colSizText}>{item && item.options[1].values.map((color, index) =>
                                    `${color.name}${index < (item.options[1].values.length - 1) ? ', ' : ''}`
                                )}</p>
                            </div>
                            <div>
                                <p className={cl.colSizHead}>размер:</p>
                                <p className={cl.colSizText}>{item && item.options[2].values.map((size, index) =>
                                    `${size.name}${index < (item.options[2].values.length - 1) ? ', ' : ''}`
                                )}</p>
                            </div>
                        </div>
                        <div className={cl.buttons}>
                            <div className={cl.button}>
                                <ButtonInCatalog onClick={() => handleDownload(models_3D)}>скачать 3D Модель</ButtonInCatalog>
                            </div>
                            <div className={cl.button}>
                                <ButtonInCatalog onClick={() => navigate('/installation', { state: { vid: item.options[0].values[0].slug } })}>монтаж плинтуса</ButtonInCatalog>
                            </div>
                        </div>
                        {item && item.is_special && item.discount &&
                            <div className={cl.discountPrice}>
                                <p>-{item.discount}%</p>
                                <div></div>
                            </div>
                        }
                        <p className={cl.price}>{item && item.price}₽</p>
                    </div>
                </div>
                <div className={cl.info}>
                    <p>{item && item.description}</p>
                </div>
            </div>
            <SpecOffers />
            <MyModal visible={modal} setVisible={setModal} modalContent={cl.modalContent}>
                <div id='modalSlider'>
                    <Slider {...settings}>
                        {item && item.bigImages.map((img, index) =>
                            index !== 0 &&
                            <img
                                key={img}
                                src={img}
                                alt="Изображение"
                            />
                        )}
                    </Slider>
                </div>
                <button className={cl.closeModalButton} onClick={() => setModal(false)}></button>
            </MyModal>
        </>
    )
}

export default ProductPlinth