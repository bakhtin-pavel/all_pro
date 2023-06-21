import React from 'react'
import test from '../components/media/images/test.png'
import MainSlider from '../components/MainSlider'

const Main = () => {
    return (
        <>
            <MainSlider />
            <div className='testDiv'>
                <img src={test} alt='' />
            </div>
        </>
    )
}

export default Main