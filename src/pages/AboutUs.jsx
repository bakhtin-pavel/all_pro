import React from 'react';

import about_background from '../components/media/images/about_background.png';

import cl from './styles/AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={cl.container}>
            <img className={cl.backgroundImg} src={about_background} alt="Изображение" />
            <h2 className={cl.aboutHead}>О НАС</h2>
            <div className={cl.lineHeadTop}></div>
            <div className={cl.lineHeadBottom}></div>
            <div className={cl.textBlock}>
                <p className={cl.boldParagrath}>Наша компания специализируется на производстве скрытых плинтусов использует высококачественные материалы и современное оборудование.</p>
                <p className={cl.normalParagrath}><span>Мы гарантируем</span>, что наши плинтусы будут идеально сочетаться с любым интерьером и прослужат вам долгие годы.</p>
                <p className={cl.normalParagrath}><span>Преимущества </span>скрытых плинтусов очевидны: они делают интерьер более современным и эстетичным, не занимают много места, а также упрощают очистку помещения, на скрытом плинтусе не копится пыль.</p>
            </div>
        </div>
    )
}

export default AboutUs