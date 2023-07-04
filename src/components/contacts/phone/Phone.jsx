import React from 'react';

import phone_icon from '../../media/images/phone_icon.svg';

import cl from './Phone.module.css';

const Phone = () => {
    return (
        <div className={cl.phone}>
            <img src={phone_icon} alt="address icon" />
            <a href="tel:+79135188246">+7–913–518–82–46</a>
        </div>
    )
}

export default Phone