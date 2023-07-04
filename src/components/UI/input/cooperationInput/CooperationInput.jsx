import React from 'react';

import cl from './CooperationInput.module.css';

const CooperationInput = (props) => {
    return (
        <input className={cl.cooperationInput} {...props} />
    );
}

export default CooperationInput