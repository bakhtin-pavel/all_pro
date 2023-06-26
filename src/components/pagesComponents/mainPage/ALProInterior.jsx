import React from 'react';

import cl from './styles/ALProInterior.module.css';

import allpro_0 from '../../media/images/allprointerior_0.png';
import allpro_1 from '../../media/images/allprointerior_1.png';
import allpro_2 from '../../media/images/allprointerior_2.png';
import allpro_3 from '../../media/images/allprointerior_3.png';
import allpro_0_m from '../../media/images/allprointerior_0_mobile.png';
import allpro_1_m from '../../media/images/allprointerior_1_mobile.png';
import allpro_2_m from '../../media/images/allprointerior_2_mobile.png';
import allpro_3_m from '../../media/images/allprointerior_3_mobile.png';

import { useWindowSize } from '../../../hooks/useWindowSize';

const ALProInterior = () => {

    const size = useWindowSize()

    return (
        <section className={cl.container}>
            <div className={cl.rectangle}></div>
            <h2>Al pro в интерьере</h2>
            <div className={cl.wrapper}>
                {size.innerWidth > 1024
                    ? <>
                        <img className={cl.box1} src={allpro_0} alt="AL Pro Interior" />
                        <img className={cl.box2} src={allpro_1} alt="AL Pro Interior" />
                        <img className={cl.box3} src={allpro_2} alt="AL Pro Interior" />
                        <img className={cl.box4} src={allpro_3} alt="AL Pro Interior" />
                    </>
                    : <>
                        <img className={cl.box1} src={allpro_0_m} alt="AL Pro Interior" />
                        <img className={cl.box2} src={allpro_1_m} alt="AL Pro Interior" />
                        <img className={cl.box3} src={allpro_2_m} alt="AL Pro Interior" />
                        <img className={cl.box4} src={allpro_3_m} alt="AL Pro Interior" />
                    </>
                }
            </div>
        </section>
    )
}

export default ALProInterior