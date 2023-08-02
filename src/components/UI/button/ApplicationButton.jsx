import React, { useEffect, useRef, useState } from 'react';

import cl from './styles/ApplicationButton.module.css';

import { useWindowSize } from '../../../hooks/useWindowSize'

const ApplicationButton = ({ onClick }) => {

    const appButtonRef = useRef()

    const [changed, setChanged] = useState(false)

    const size = useWindowSize()

    useEffect(() => {

        if (size.innerWidth < 1025) return;

        const perehod = (size.innerHeight / 5) - 102

        const updatePosition = () => {

            const scrollY = window.scrollY

            if (scrollY > perehod) {
                !changed && setChanged(true)
            } else {
                changed && setChanged(false)
            }

        }

        window.addEventListener('scroll', updatePosition);
        updatePosition()
        return () => window.removeEventListener('scroll', updatePosition);
    })

    return (
        <button ref={appButtonRef} className={changed ? cl.appButtonChange : cl.appButton} onClick={onClick}>
            Заявка
            <div className={cl.backFon}></div>
        </button>
    )
}

export default ApplicationButton