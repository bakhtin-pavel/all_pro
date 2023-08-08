import React, { useState, useRef, useEffect } from 'react';

import cl from './styles/Installation.module.css';
import install_static_img1 from '../components/media/images/install_static_img1.png';
import install_static_img2 from '../components/media/images/install_static_img2.png';
import install_static_img3 from '../components/media/images/install_static_img3.png';

import axios from 'axios';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import DropDown from '../components/UI/dropdown/DropDown';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Installation = () => {

    const locatioon = useLocation();
    const needVid = locatioon.state ? locatioon.state.vid : null;

    const [items, setItems] = useState();
    const [item, setItem] = useState();

    async function fetchInstallations() {
        const response = await axios.get('https://api.alpro13.ru/v1/installation');
        setItems(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        fetchInstallations()
    }, [])

    useEffect(() => {
        if (items) {
            if (needVid) {
                const needItem = items.find(item => item.category.slug === needVid);
                needItem ? setItem(needItem) : setItem(items[0])
            }
            else {
                setItem(items[0])
            }
        }
    }, [items, needVid])

    const [open, setOpen] = useState(false);
    const switchRef = useRef();
    const onClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Helmet>
                <title>Al Pro: Установка</title>
            </Helmet>
            <div className={cl.container}>

                <h2>как устанавливать{"\n"}AL плинтус</h2>
                <div className={cl.headDecor}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div>
                    <div className={cl.itemSwitchWrapper}>
                        <button ref={switchRef} className={cl.itemSwitch} onClick={() => {
                            setOpen(!open)
                        }}>
                            <p className={cl.itemSwitchButton}>вид плинтуса</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M1.00031 5.94977L7.02539 11.9749L12.9752 6.02509" stroke="black" strokeWidth="2" />
                                <path d="M6.96582 11.9581V0.664307" stroke="black" strokeWidth="2" />
                            </svg>
                        </button>
                        <DropDown opened={open} onClose={onClose} className={cl.dropDown} parentRef={switchRef}>
                            {items && item && items.map((itemVid) =>
                                <button
                                    key={itemVid.id}
                                    className={cl.dropDownItem}
                                    style={itemVid.id === item.id ? { fontWeight: 600, background: '#F0F0F0' } : null}
                                    onClick={() => setItem(itemVid)}
                                >{itemVid.category.name}</button>
                            )}
                        </DropDown>
                    </div>
                </div>

                <SwitchTransition mode='out-in'>
                    <CSSTransition
                        key={item ? item.file : 0}
                        timeout={300}
                        classNames={{
                            enter: cl.videoEnter,
                            enterActive: cl.videoEnterActive,
                            exit: cl.videoExit,
                            exitActive: cl.videoExitActive,
                        }}
                    >
                        <video
                            src={item ? item.file : ''}
                            controls
                            className={cl.video}
                        ></video>
                    </CSSTransition>
                </SwitchTransition>

                <SwitchTransition mode='out-in'>
                    <CSSTransition
                        key={item ? item.preview : 0}
                        timeout={300}
                        classNames={{
                            enter: cl.imgEnter,
                            enterActive: cl.imgEnterActive,
                            exit: cl.imgExit,
                            exitActive: cl.imgExitActive,
                        }}
                    >
                        <div className={cl.imgContainer}>
                            <img src={item ? item.preview : ''} alt="Изображение" />
                        </div>
                    </CSSTransition>
                </SwitchTransition>

                <div className={cl.guide}>
                    <div className={cl.guideDecorLeft}></div>
                    <div className={cl.guideDecorRight}></div>
                    <h2>Советы<br />от Al Pro</h2>
                    <div
                        className={cl.guideTextBlock}
                        dangerouslySetInnerHTML={{ __html: item ? item.content : null }}
                    ></div>
                </div>

            </div>
            <div className={cl.staticImg}>
                <div>
                    <img src={install_static_img1} alt="Изображение" />
                </div>
                <div>
                    <img src={install_static_img2} alt="Изображение" />
                </div>
                <div>
                    <img src={install_static_img3} alt="Изображение" />
                </div>
            </div>
        </>
    )
}

export default Installation