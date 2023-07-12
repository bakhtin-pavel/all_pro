import React, { useRef, useState } from 'react';

import cl from './Filter.module.css';

import DropDown from '../dropdown/DropDown';

const Filter = ({ nameFilter }) => {

    const [open, setOpen] = useState(false)
    const buttonRef = useRef()

    const onClose = () => {
        setOpen(false)
    }

    return (
        <div className={cl.container}>

            <button ref={buttonRef} className={cl.filterType} onClick={(e) => {
                // e.stopPropagation()
                setOpen(!open)
            }}>
                {nameFilter}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.00031 5.94977L7.02539 11.9749L12.9752 6.02509" stroke="black" strokeWidth="2" />
                    <path d="M6.96582 11.9581V0.664307" stroke="black" strokeWidth="2" />
                </svg>
            </button>

            <DropDown opened={open} onClose={onClose} className={cl.dropDownContainer} parentRef={buttonRef}>
                <div className={cl.filterItem}>
                    <input type="checkbox" id="name" className={cl.customCheckbox} />
                    <label htmlFor="name">Теневой плинтус скрытого монтажа L под рассеиватель </label>
                </div>
                <div className={cl.filterItem}>
                    <input type="checkbox" id="name1" className={cl.customCheckbox} />
                    <label htmlFor="name1">Теневой плинтус скрытого монтажа L под рассеиватель </label>
                </div>
                <div className={cl.filterItem}>
                    <input type="checkbox" id="name" className={cl.customCheckbox} />
                    <label htmlFor="name">Теневой плинтус скрытого</label>
                </div>
                <div className={cl.filterItem}>
                    <input type="checkbox" id="name" className={cl.customCheckbox} />
                    <label htmlFor="name">Теневой плинтус скрытого монтажа L под рассеиватель </label>
                </div>
                <div className={cl.filterItem}>
                    <input type="checkbox" id="name" className={cl.customCheckbox} />
                    <label htmlFor="name">Теневой плинтус скрытого монтажа L под рассеиватель </label>
                </div>
                <div className={cl.filterItem}>
                    <input type="checkbox" id="name" className={cl.customCheckbox} />
                    <label htmlFor="name">Теневой плинтус скрытого монтажа L под рассеиватель </label>
                </div>
                <div className={cl.filterItem}>
                    <input type="checkbox" id="name" className={cl.customCheckbox} />
                    <label htmlFor="name">Теневой плинтус скрытого монтажа L под рассеиватель </label>
                </div>
                <div className={cl.filterItem}>
                    <input type="checkbox" id="name" className={cl.customCheckbox} />
                    <label htmlFor="name">Теневой плинтус скрытого монтажа L под рассеиватель </label>
                </div>
            </DropDown>

        </div>
    )
}

export default Filter