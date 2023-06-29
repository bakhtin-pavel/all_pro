import React, { useState } from 'react'
import MainSlider from '../components/MainSlider'
import ALPlinth from '../components/pagesComponents/mainPage/ALPlinth'
import ALProInterior from '../components/pagesComponents/mainPage/ALProInterior'
import ApplicationButton from '../components/UI/button/ApplicationButton'
import MyModal from '../components/UI/modal/MyModal'
import ApplicationForm from '../components/ApplicationForm'

import cl from './styles/Main.module.css'
import SpecOffers from '../components/SpecOffers'

const Main = () => {

    const [modal, setModal] = useState(false)

    const closeModal = () => {
        setModal(false)
    }

    return (
        <>

            <MainSlider />

            <ALPlinth />

            <SpecOffers />

            <ALProInterior />

            <ApplicationButton onClick={() => setModal(true)} />
            <MyModal visible={modal} setVisible={setModal} modalContent={cl.modalContent}>
                <ApplicationForm close={closeModal} />
            </MyModal>

        </>
    )
}

export default Main