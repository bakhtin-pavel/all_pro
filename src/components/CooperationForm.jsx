import React from 'react';

import cl from './styles/CooperationForm.module.css';

import CooperationInput from './UI/input/cooperationInput/CooperationInput';

const CooperationForm = () => {
    return (
        <div className={cl.container}>
            <div className={cl.wrapper}>
                <div className={cl.headContainer}>
                    <h2>Заполнить заявку</h2>
                </div>
                <form className={cl.form}>
                    <CooperationInput
                        //value={application.name}
                        type='text'
                        placeholder='Компания'
                    />
                    <CooperationInput
                        //value={application.name}
                        type='text'
                        placeholder='Город'
                    />
                    <CooperationInput
                        //value={application.name}
                        type='text'
                        placeholder='Ваше имя'
                    />
                    <CooperationInput
                        //value={application.phone}
                        type='tel'
                        placeholder='Телефон'
                    />
                    <CooperationInput
                        //value={application.email}
                        type='email'
                        placeholder='E-mail'
                    />
                    <p className={cl.politic}>Нажимая кнопку Отправить, вы соглашаетесь с <a href="#s">политикой обработки персональных данных</a></p>
                    <button className={cl.submit}>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default CooperationForm