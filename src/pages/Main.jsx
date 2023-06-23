import React from 'react'
import test from '../components/media/images/test.png'
import MainSlider from '../components/MainSlider'
import ALPlinth from '../components/pagesComponents/mainPage/ALPlinth'

const Main = () => {
    return (
        <>

            <MainSlider />

            <ALPlinth />

            <div className='testDiv'>
                <img src={test} alt='' />
            </div>

        </>
    )
}

export default Main