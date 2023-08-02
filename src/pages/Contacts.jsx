import React, { useState, useEffect } from 'react';

import cl from './styles/Contacts.module.css';
import contacts_top from '../components/media/images/contacts_top.png';
import contacts_bot from '../components/media/images/contacts_bot.png';

import axios from 'axios';

import CooperationForm from '../components/CooperationForm';

const Contacts = () => {
    const contactsLink = [cl.contactsTexts, cl.contactsLink].join(' ')

    const [items, setItems] = useState()

    async function fetchContacts() {
        const response = await axios.get('http://95.163.229.9:8005/v1/contacts')
        setItems(response.data.data)
        console.log(response.data.data)
    }

    useEffect(() => {
        fetchContacts()
    }, [])

    return (
        <>
            <div className={cl.headContainer}>
                <h2>контакты</h2>
                <div className={cl.headLine}></div>
            </div>

            <div className={cl.contactsContainer}>
                <div className={cl.contactsWrapper}>
                    <div className={cl.addressAndRec}>
                        <p className={cl.contactsHeaders}>Адрес</p>
                        <p className={cl.contactsTexts}>{items && items[1].value}</p>
                        <div className={cl.decor}></div>
                    </div>
                    <div className={cl.contacts}>
                        <p className={cl.contactsHeaders}>Контакты</p>
                        <a className={contactsLink} href={`tel:${items && items[3].value}`}>{items && items[3].value}</a>
                        <a className={contactsLink} href={`mailto:${items && items[2].value}`}>{items && items[2].value}</a>
                        <div className={cl.decor}></div>
                    </div>
                    <div className={cl.rec}>
                        <p className={cl.contactsHeaders}>Реквизиты</p>
                        <p className={cl.contactsTexts}>{items && items[0].value}</p>
                        <div className={cl.decor}></div>
                    </div>
                </div>
                <div className={cl.contactsTopImg}>
                    <img src={contacts_top} alt="Изображение" />
                </div>
            </div>

            <div className={cl.coopContainer}>
                <section className={cl.cooperation}>
                    <h2 className={cl.cooperationHead}>Приглашение{"\n"}к сотрудничеству</h2>
                    <div className={cl.cooperationBlock}>
                        <p className={cl.coopBlockHead}>Уважаемые партнёры и дизайнеры!</p>
                        <p className={cl.coopBlockText}>Мы рады пригласить вас наш партнёрский проект, который позволит нашим компаниям расширить возможности
                            в сфере дизайна интерьеров.
                            {"\n"}{"\n"}Мы готовы предоставить вам наш ассортимент продукции, который поможет вам создать уникальные интерьерные проекты для ваших клиентов. Наши дизайнеры всегда на связи и будут рады консультировать вас по любым вопросам.
                            {"\n"}{"\n"}Наша компания уже имеет опыт сотрудничества с крупнейшими дизайнерскими бюро, и мы готовы расширить наши возможности в этой сфере. Мы уверены, что совместное сотрудничество поможет нам достичь новых высот в нашей деятельности.
                            {"\n"}{"\n"}Спасибо, что выбрали нашу компанию в качестве потенциального партнера. Мы с нетерпением ждем вашей заявки!
                            {"\n"}{"\n"}С уважением, Компания «Al Pro»</p>
                    </div>
                </section>
                <div>
                    <CooperationForm />
                </div>
            </div>

            <img className={cl.contactsBotImg} src={contacts_bot} alt="Изображение" />

        </>
    )
}

export default Contacts