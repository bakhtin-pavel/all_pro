import React, { useState } from 'react';

import cl from './styles/Installation.module.css';

import DropDown from '../components/UI/dropdown/DropDown';

const Installation = () => {

    const [open, setOpen] = useState(false)

    const onClose = () => {
        setOpen(false)
    }

    return (
        <div className={cl.container}>
            <h2>как устанавливать{"\n"}AL плинтус</h2>
            <div className={cl.headDecor}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={cl.itemSwitchWrapper}>
                <button className={cl.itemSwitch} onClick={(e) => {
                    e.stopPropagation()
                    setOpen(!open)
                }}>
                    <p className={cl.itemSwitchButton}>вид плинтуса</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1.00031 5.94977L7.02539 11.9749L12.9752 6.02509" stroke="black" stroke-width="2" />
                        <path d="M6.96582 11.9581V0.664307" stroke="black" stroke-width="2" />
                    </svg>
                </button>
                <DropDown opened={open} onClose={onClose} className={cl.dropDownContainer}>
                    <div className={cl.dropDown}>
                        <button className={[cl.dropDownItem, cl.itemSwitchText].join(' ')}>теневой плинтус скрытого монтажа L</button>
                        <button className={[cl.dropDownItem, cl.itemSwitchText].join(' ')}>теневой плинтус скрытого монтажа L</button>
                        <button className={[cl.dropDownItem, cl.itemSwitchText].join(' ')}>теневой плинтус скрытого монтажа L</button>
                    </div>
                </DropDown>
            </div>
        </div>
    )
}

export default Installation