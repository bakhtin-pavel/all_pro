import React, { useState } from 'react';

import cl from './styles/ApplicationForm.module.css';
import politic_doc from './media/documents/politic.pdf';

import axios from 'axios';

import ApplicationInput from './UI/input/ApplicationInput';

const ApplicationForm = ({ close, visible }) => {

    const [application, setApplication] = useState({ name: '', phone: '', email: '' })
    const [errorCheck, setErrorCheck] = useState('')

    async function submitApplication(e) {
        e.preventDefault();

        await axios.post('http://95.163.229.9:8005/v1/feedback', {
            email: application.email,
            phone: application.phone,
            username: application.name,
        })
            .then(function (response) {
                console.log(response);
                close()
                setApplication({ name: '', phone: '', email: '' });
                setErrorCheck('')
            })
            .catch(function (error) {
                console.log(error);
                setErrorCheck(error.response.data.data.message.slice(0, -1))
            });
    }

    const closeButton = {
        display: 'none'
    };

    return (
        <div className={cl.container}>

            <button onClick={() => { close() }} style={visible ? null : closeButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.375 20L20 19.375L10.625 9.99998L20 0.625001L19.375 2.91632e-06L10 9.37498L0.625021 0L2.07568e-05 0.625001L9.375 9.99998L0 19.375L0.624998 20L10 10.625L19.375 20Z" fill="white" />
                </svg>
            </button>

            <h4 className={cl.black}>ЗАЯВКА</h4>
            <div className={cl.rectangle}></div>
            <div className={cl.decor1}></div>
            <div className={cl.decor2}></div>

            <form className={cl.form} onSubmit={submitApplication}>
                <ApplicationInput
                    value={application.name}
                    onChange={e => setApplication({ ...application, name: e.target.value })}
                    type='text'
                    placeholder='ФИО'
                />
                <ApplicationInput
                    value={application.phone}
                    onChange={e => setApplication({ ...application, phone: e.target.value })}
                    type='tel'
                    placeholder='Телефон'
                />
                <ApplicationInput
                    value={application.email}
                    onChange={e => setApplication({ ...application, email: e.target.value })}
                    type='email'
                    placeholder='E-mail'
                />
                <p className={cl.politic}>Нажимая кнопку Отправить, вы соглашаетесь с <a href={politic_doc} target='_blank' rel="noreferrer">политикой обработки персональных данных</a></p>
                {errorCheck && <p className={cl.errorText}>{errorCheck}!</p>}
                <button type='submit' className={cl.submit}>Отправить<div></div></button>
            </form>

        </div>
    )
}

export default ApplicationForm