import React from 'react';

import address_icon from '../../media/images/address_icon.svg';

import cl from './Address.module.css';

const Address = () => {
    return (
        <div className={cl.address}>
            <img src={address_icon} alt="address icon" />
            <p>г. Красноярск,<br />
                Караульная 88,<br />
                БЦ Дубль, 10 этаж, офис 10-36</p>
        </div>
    )
}

export default Address