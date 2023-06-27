import React from 'react';

import cl from './styles/ApplicationButton.module.css';

const ApplicationButton = ({ onClick }) => {
    return (
        <button className={cl.appButton} onClick={onClick}>
            Заявка
            <div className={cl.backFon}></div>
        </button>
    )
}

export default ApplicationButton