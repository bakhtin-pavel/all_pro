import React from 'react';

import cl from './styles/Footer.module.css';

import address_icon from './media/images/address_icon.svg';
import phone_icon from './media/images/phone_icon.svg';
import email_icon from './media/images/email_icon.svg';
import social_icon_0 from './media/images/social_icon_0.svg';
import social_icon_1 from './media/images/social_icon_1.svg';
import social_icon_2 from './media/images/social_icon_2.svg';

import Logo from './Logo';
import ApplicationForm from './ApplicationForm';

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footerLeft}>
                <div className={cl.logoContainer}>
                    <Logo />
                </div>
                <div className={cl.contacts}>
                    <h4>Контакты</h4>
                    <div className={cl.address}>
                        <img src={address_icon} alt="address icon" />
                        <p>г. Красноярск,<br />
                            Караульная 88,<br />
                            БЦ Дубль, 10 этаж, офис 10-36</p>
                    </div>
                    <div className={cl.phone}>
                        <img src={phone_icon} alt="address icon" />
                        <a href="tel:+79135188246">+7–913–518–82–46</a>
                    </div>
                    <div className={cl.email}>
                        <img src={email_icon} alt="address icon" />
                        <a href="mailto:opt_actum@mail.ru">opt_actum@mail.ru</a>
                    </div>
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