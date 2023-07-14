import React, { useState, useRef } from 'react';

import cl from './styles/Installation.module.css';

import testvideo from '../components/media/videos/testvideo.mp4';
import installImg from '../components/media/images/install_img.png';

import DropDown from '../components/UI/dropdown/DropDown';

const Installation = () => {

    const [open, setOpen] = useState(false)
    const switchRef = useRef()

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

            <div>
                <div className={cl.itemSwitchWrapper}>
                    <button ref={switchRef} className={cl.itemSwitch} onClick={(e) => {
                        e.stopPropagation()
                        setOpen(!open)
                    }}>
                        <p className={cl.itemSwitchButton}>вид плинтуса</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1.00031 5.94977L7.02539 11.9749L12.9752 6.02509" stroke="black" strokeWidth="2" />
                            <path d="M6.96582 11.9581V0.664307" stroke="black" strokeWidth="2" />
                        </svg>
                    </button>
                    <DropDown opened={open} onClose={onClose} className={cl.dropDownContainer} parentRef={switchRef}>
                        <div className={cl.dropDown}>
                            <button className={cl.dropDownItem}>Теневой плинтус скрытого монтажа L под рассеиватель</button>
                            <button className={cl.dropDownItem}>Теневой плинтус скрытого монтажа под рассеиватель</button>
                            <button className={cl.dropDownItem}>Теневой плинтус скрытого монтажа</button>
                            <button className={cl.dropDownItem}>Скрытый плинтус L</button>
                            <button className={cl.dropDownItem}>Скрытый плинтус L</button>
                            <button className={cl.dropDownItem}>Скрытый плинтус L</button>
                            <button className={cl.dropDownItem}>Скрытый плинтус L</button>
                            <button className={cl.dropDownItem}>Скрытый плинтус L</button>
                        </div>
                    </DropDown>
                </div>
            </div>

            <video src={testvideo} controls className={cl.video}></video>

            <div className={cl.imgContainer}>
                <img src={installImg} alt="" />
            </div>

            <div className={cl.guide}>
                <div className={cl.guideDecorLeft}></div>
                <div className={cl.guideDecorRight}></div>
                <h2>Советы<br />от Al Pro</h2>
                <div className={cl.guideTextBlock}>
                    <p>Для начала, нужно подготовить все необходимые материалы и инструменты, включая алюминиевый плинтус, резиновый уплотнитель, саморезы, отвертку, нож и мерной ленты.</p>
                    <p>Перед установкой необходимо очистить и выровнять стену или пол, где будет установлен плинтус. Затем нужно измерить длину каждой стены или участка пола, где нужно установить плинтус, и разрезать плинтус на соответствующие размеры, используя нож.</p>
                </div>
            </div>

        </div>
    )
}

export default Installation