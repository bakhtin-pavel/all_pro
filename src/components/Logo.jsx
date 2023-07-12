import React from 'react';

import logoImg from './media/images/logo.svg';

import cl from './styles/Logo.module.css';

const Logo = () => {
    return (
        <img src={logoImg} alt="All Pro (логотип)" className={cl.logo} />
    )
}

export default Logo