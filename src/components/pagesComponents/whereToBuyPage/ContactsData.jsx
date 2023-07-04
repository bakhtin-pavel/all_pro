import React from 'react';

import cl from './ContactsData.module.css';

const ContactsData = () => {
    return (
        <div className={cl.container}>
            <div className={cl.item}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={cl.item}></div>
            <div className={cl.item}></div>
        </div>
    )
}

export default ContactsData