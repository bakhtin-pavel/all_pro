import React, { useState } from 'react';

import cl from './styles/Main.module.css';

import MainSlider from '../components/MainSlider';
import ALPlinth from '../components/pagesComponents/mainPage/ALPlinth';
import ALProInterior from '../components/pagesComponents/mainPage/ALProInterior';
import ApplicationButton from '../components/UI/button/ApplicationButton';
import MyModal from '../components/UI/modal/MyModal';
import ApplicationForm from '../components/ApplicationForm';
import SpecOffers from '../components/SpecOffers';
import { Helmet } from 'react-helmet';

const Main = () => {

    const [modal, setModal] = useState(false)

    const closeModal = () => {
        setModal(false)
    }

    return (
        <>

            <Helmet>
                <title>Al Pro</title>
            </Helmet>

            <MainSlider />

            <ALPlinth />

            <SpecOffers />

            <ALProInterior />

            <ApplicationButton onClick={() => setModal(true)} />
            <MyModal visible={modal} setVisible={setModal} modalContent={cl.modalContent}>
                <ApplicationForm close={closeModal} visible={modal} />
            </MyModal>

        </>
    )
}

export default Main