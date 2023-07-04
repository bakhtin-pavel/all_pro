import React from 'react';

import cl from './styles/WhereToBuy.module.css';

import ContactsData from '../components/pagesComponents/whereToBuyPage/ContactsData';

const WhereToBuy = () => {
    return (
        <section>

            <div className={cl.headContainer}>
                <h2>Где купить</h2>
                <div className={cl.headDecor}></div>
            </div>

            <ContactsData />

        </section>
    )
}

export default WhereToBuy