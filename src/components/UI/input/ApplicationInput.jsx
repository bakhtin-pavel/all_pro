import React from 'react';

import cl from './ApplicationInput.module.css';

const ApplicationInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={cl.applicationInput} {...props} />
    );
});

export default ApplicationInput