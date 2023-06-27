import React, { useState } from 'react'
import MainSlider from '../components/MainSlider'
import ALPlinth from '../components/pagesComponents/mainPage/ALPlinth'
import ALProInterior from '../components/pagesComponents/mainPage/ALProInterior'
import ApplicationButton from '../components/UI/button/ApplicationButton'
import MyModal from '../components/UI/modal/MyModal'
import ApplicationForm from '../components/ApplicationForm'

const Main = () => {

    const [modal, setModal] = useState(false)

    const closeModal = () => {
        setModal(false)
    }

    return (
        <>

            <MainSlider />

            <ALPlinth />

            <ALProInterior />

            <ApplicationButton onClick={() => setModal(true)} />
            <MyModal visible={modal} setVisible={setModal}>
                <ApplicationForm close={closeModal} />
            </MyModal>

        </>
    )
}

export default Main