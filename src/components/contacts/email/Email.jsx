import React from 'react';

import email_icon from '../../media/images/email_icon.svg';

import cl from './Email.module.css';

const Email = () => {
    return (
        <div className={cl.email}>
            <img src={email_icon} alt="address icon" />
            <a href="mailto:opt_actum@mail.ru">opt_actum@mail.ru</a>
        </div>
    )
}

export default Email