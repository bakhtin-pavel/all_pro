import React from 'react';

import about_background from '../components/media/images/about_background.png';
import about_m_1 from '../components/media/images/about_m_1.bmp';
import about_m_2 from '../components/media/images/about_m_2.bmp';
import about_m_3 from '../components/media/images/about_m_3.bmp';
import about_m_4 from '../components/media/images/about_m_4.bmp';
import about_m_5 from '../components/media/images/about_m_5.bmp';
import about_m_6 from '../components/media/images/about_m_6.bmp';
import about_m_7 from '../components/media/images/about_m_7.bmp';
import about_m_8 from '../components/media/images/about_m_8.bmp';
import about_m_9 from '../components/media/images/about_m_9.bmp';

import cl from './styles/AboutUs.module.css';

import { useWindowSize } from '../hooks/useWindowSize.js';

const AboutUs = () => {
    const size = useWindowSize();

    return (
        <>
            <div className={cl.container}>
                <img className={cl.backgroundImg} src={about_background} alt="Изображение" />
                <h2 className={cl.aboutHead}>О НАС</h2>
                <div className={cl.lineHeadTop}></div>
                <div className={cl.lineHeadBottom}></div>
                <p className={cl.boldParagrath}>Alpro.{"\n"}Качество — это просто.</p>
                <div className={cl.textBlock}>
                    <p className={cl.normalParagrath}>С 2021 года компания представляет на российском строительном рынке производство под собственной торговой маркой Alprо.</p>
                    <p className={cl.normalParagrath}>В интернет-магазине представлен широкий выбор алюминиевых плинтусов и межкомнатных дверей.</p>
                    <p className={cl.normalParagrath}>Двери — это лицо интерьера, а плинтуса его детальная и своего рода уникальная, составляющая, а совершенство кроется в деталях.</p>
                    <p className={cl.normalParagrath}>В приоритете Alpro качество, вариативность, новые решения, стиль и экономия времени клиента.</p>
                    <p className={cl.normalParagrath}>Задача компании: доказать покупателю, что ремонт может и должен приносить положительные впечатления. Мы гарантируем стопроцентный результат и оправданные ожидания.</p>
                    <p className={cl.normalParagrath}>Доставка товара по всей территории Российской Федерации и стран СНГ.</p>
                </div>
            </div>
            <div className={cl.production}>
                <h2>Собственное производство</h2>
                <div className={cl.productionImg}>
                    {size.innerWidth < 1025
                        ? <div className={cl.productionImgM}>
                            <div className={cl.imgMRight}>
                                <img src={about_m_1} alt="" />
                                <img src={about_m_2} alt="" />
                                <img src={about_m_3} alt="" />
                                <img src={about_m_4} alt="" />
                                <img src={about_m_5} alt="" />
                            </div>
                            <div>
                                <img src={about_m_6} alt="" />
                                <img src={about_m_7} alt="" />
                                <img src={about_m_8} alt="" />
                                <img src={about_m_9} alt="" />
                            </div>
                        </div>
                        : <div className={cl.productionImgM}>
                            <div>
                                <img src={about_m_1} alt="" />
                                <img src={about_m_7} alt="" />
                                <img src={about_m_4} alt="" />
                            </div>
                            <div>
                                <img src={about_m_6} alt="" />
                                <img src={about_m_8} alt="" />
                                <img src={about_m_5} alt="" />
                            </div>
                            <div>
                                <img src={about_m_2} alt="" />
                                <img src={about_m_3} alt="" />
                                <img src={about_m_9} alt="" />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default AboutUs