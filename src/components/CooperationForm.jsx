import React, { useState } from 'react';

import cl from './styles/CooperationForm.module.css';
import politic_doc from './media/documents/politic.pdf';

import axios from 'axios';

import CooperationInput from './UI/input/cooperationInput/CooperationInput';

const CooperationForm = () => {

    const [application, setApplication] = useState({ name: '', phone: '', email: '', city: '', company: '' })
    const [errorCheck, setErrorCheck] = useState('')

    async function submitApplication(e) {
        e.preventDefault();

        await axios.post('https://api.alpro13.ru/v1/feedback/partnership', {
            email: application.email,
            phone: application.phone,
            username: application.name,
            city: application.city,
            company: application.company,
        })
            .then(function (response) {
                console.log(response);
                setApplication({ name: '', phone: '', email: '', city: '', company: '' });
                setErrorCheck('')
            })
            .catch(function (error) {
                console.log(error);
                setErrorCheck(error.response.data.data.message.slice(0, -1))
            });
    }

    return (
        <div className={cl.container}>
            <div className={cl.wrapper}>
                <div className={cl.headContainer}>
                    <h2>Заполнить заявку</h2>
                </div>
                <form className={cl.form} onSubmit={submitApplication}>
                    <CooperationInput
                        value={application.company}
                        onChange={e => setApplication({ ...application, company: e.target.value })}
                        type='text'
                        placeholder='Компания'
                    />
                    <CooperationInput
                        value={application.city}
                        onChange={e => setApplication({ ...application, city: e.target.value })}
                        type='text'
                        placeholder='Город'
                    />
                    <CooperationInput
                        value={application.name}
                        onChange={e => setApplication({ ...application, name: e.target.value })}
                        type='text'
                        placeholder='Ваше имя'
                    />
                    <CooperationInput
                        value={application.phone}
                        onChange={e => setApplication({ ...application, phone: e.target.value })}
                        type='tel'
                        placeholder='Телефон'
                    />
                    <CooperationInput
                        value={application.email}
                        onChange={e => setApplication({ ...application, email: e.target.value })}
                        type='email'
                        placeholder='E-mail'
                    />
                    <p className={cl.politic}>Нажимая кнопку Отправить, вы соглашаетесь с <a href={politic_doc} target='_blank' rel="noreferrer">политикой обработки персональных данных</a></p>
                    {errorCheck && <p className={cl.errorText}>{errorCheck}!</p>}
                    <button className={cl.submit}>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default CooperationForm