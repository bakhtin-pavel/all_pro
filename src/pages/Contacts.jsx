import React from 'react';

import cl from './styles/Contacts.module.css';

const Contacts = () => {
    const contactsLink = [cl.contactsTexts, cl.contactsLink].join(' ')

    return (
        <>
            <div className={cl.headContainer}>
                <h2>контакты</h2>
                <div className={cl.headLine}></div>
            </div>

            <div className={cl.contactsContainer}>
                <div className={cl.addressAndRec}>
                    <p className={cl.contactsHeaders}>Адрес</p>
                    <p className={cl.contactsTexts}>г. Красноярск, Караульная 88,
                        БЦ Дубль, 10 этаж, офис 10-36</p>
                    <div className={cl.decor}></div>
                </div>
                <div className={cl.contacts}>
                    <p className={cl.contactsHeaders}>Контакты</p>
                    <a className={contactsLink} href="tel:+79135188246">+7–913–518–82–46</a>
                    <a className={contactsLink} href="mailto:opt_actum@mail.ru">opt_actum@mail.ru</a>
                    <div className={cl.decor}></div>
                </div>
                <div className={cl.addressAndRec}>
                    <p className={cl.contactsHeaders}>Реквизиты</p>
                    <p className={cl.contactsTexts}>г. Красноярск, Караульная 88,
                        БЦ Дубль, 10 этаж, офис 10-36</p>
                    <div className={cl.decor}></div>
                </div>
            </div>

            <section className={cl.cooperation}>
                <h2 className={cl.cooperationHead}>Приглашение{"\n"}к сотрудничеству</h2>
                <div className={cl.cooperationBlock}>
                    <p className={cl.coopBlockHead}>Уважаемые партнёры и дизайнеры!</p>
                    <div></div>
                    <p className={cl.coopBlockText}>Мы рады пригласить вас наш партнёрский проект, который позволит нашим компаниям расширить возможности
                        в сфере дизайна интерьеров.
                        {"\n"}{"\n"}Мы готовы предоставить вам наш ассортимент продукции, который поможет вам создать уникальные интерьерные проекты для ваших клиентов. Наши дизайнеры всегда на связи и будут рады консультировать вас по любым вопросам.
                        {"\n"}{"\n"}Наша компания уже имеет опыт сотрудничества с крупнейшими дизайнерскими бюро, и мы готовы расширить наши возможности в этой сфере. Мы уверены, что совместное сотрудничество поможет нам достичь новых высот в нашей деятельности.
                        {"\n"}{"\n"}Спасибо, что выбрали нашу компанию в качестве потенциального партнера. Мы с нетерпением ждем вашей заявки!
                        {"\n"}{"\n"}С уважением, Компания «Al Pro»</p>
                </div>
                <div className={cl.cooperationDecor}></div>
            </section>

        </>
    )
}

export default Contacts