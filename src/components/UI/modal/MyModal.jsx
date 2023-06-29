import React from 'react'
import cl from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible, modalContent }) => {
    const rootClasses = [cl.myModal]

    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal