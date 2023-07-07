import React from 'react';

import cl from './styles/Footer.module.css';

import social_icon_0 from './media/images/social_icon_0.svg';
import social_icon_1 from './media/images/social_icon_1.svg';
import social_icon_2 from './media/images/social_icon_2.svg';

import Logo from './Logo';
import ApplicationForm from './ApplicationForm';
import Address from './contacts/address/Address';
import Phone from './contacts/phone/Phone';
import Email from './contacts/email/Email';

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footerLeft}>
                <div className={cl.logoContainer}>
                    <Logo />
                </div>
                <div className={cl.contacts}>
                    <h4>Контакты</h4>
                    <Address colorIcon='white' />
                    <Phone colorIcon='white' />
                    <Email colorIcon='white' />
                </div>
                <div className={cl.social}>
                    <h4>Социальные сети</h4>
                    <div>
                        <a href="#s">
                            <img src={social_icon_0} alt="Социальная сеть" />
                        </a>
                        <a href="#s">
                            <img src={social_icon_1} alt="Одноклассники" />
                        </a>
                        <a href="#s">
                            <img src={social_icon_2} alt="ВКонтакте" />
                        </a>
                    </div>
                </div>
            </div>
            <ApplicationForm />
        </footer>
    )
}

export default Footer