import React from 'react';

import cl from './styles/ButtonInCatalog.module.css';

const ButtonInCatalog = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className={cl.button}>{children}</button>
    )
}

export default ButtonInCatalog