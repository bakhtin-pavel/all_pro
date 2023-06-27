import React, { useState } from 'react';

import cl from './styles/ApplicationForm.module.css';

import app_line from './media/images/application_line.svg';
import app_line_2 from './media/images/application_line_2.svg';
import app_line_m from './media/images/application_line_m.svg';
import app_line_2_m from './media/images/application_line_2_m.svg';

import ApplicationInput from './UI/input/ApplicationInput';
import { useWindowSize } from '../hooks/useWindowSize';

const ApplicationForm = ({close}) => {
    const size = useWindowSize()

    const [application, setApplication] = useState({ name: '', phone: '', email: '' })

    const addNewApplication = (e) => {
        e.preventDefault();

        const newApplication = {
            ...application,
            id: Date.now()
        };

        console.log(newApplication)

        close()
        setApplication({ name: '', phone: '', email: '' });
    };

    return (
        <div className={cl.container}>

            <h4 className={cl.black}>ЗАЯВКА</h4>
            <div className={cl.rectangle}></div>
            {size.innerWidth < 1201
                ? <>
                    <img className={cl.line_1} src={app_line_m} alt="" />
                    <img className={cl.line_2} src={app_line_2_m} alt="" />
                </>
                : <>
                    <img className={cl.line_1} src={app_line} alt="" />
                    <img className={cl.line_2} src={app_line_2} alt="" />
                </>
            }

            <form className={cl.form}>
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
                <button className={cl.submit} onClick={addNewApplication}>Отправить</button>
            </form>

        </div>
    )
}

export default ApplicationForm