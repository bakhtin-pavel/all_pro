import React from 'react';

import cl from './ApplicationInput.module.css';

const ApplicationInput = ((props) => {
    return (
        <input className={cl.applicationInput} {...props} />
    );
});

export default ApplicationInput