import React from 'react';

import cl from './styles/SpecOffers.module.css';

const SpecOffers = () => {
    return (
        <section className={cl.container}>
            <div className={cl.lineLeft}></div>
            <div className={cl.lineRight}></div>
            <div className={cl.wrapper}>
                <h2 className={cl.specHead}>специальные предложения</h2>
            </div>
        </section>
    )
}

export default SpecOffers