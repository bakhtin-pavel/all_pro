import React, { useRef } from 'react';

import cl from './styles/WhereToBuy.module.css';

// import ContactsData from '../components/pagesComponents/whereToBuyPage/ContactsData';

import { YMaps, Map, Placemark, SearchControl } from '@pbe/react-yandex-maps';

import Address from '../components/contacts/address/Address';
import Email from '../components/contacts/email/Email';
import Phone from '../components/contacts/phone/Phone';
import { useWindowSize } from '../hooks/useWindowSize';



const WhereToBuy = () => {

    const size = useWindowSize();

    const scrollRef = useRef(null);

    const scrollToElement = () => {
        scrollRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    };

    return (
        <section>

            <div className={cl.headContainer}>
                <h2>Где купить</h2>
                <div className={cl.headDecor}></div>
            </div>

            <YMaps
                query={{ apikey: '32fa1f28-2d0d-4abf-89a0-01759ef743c2', referer: 'Key #1' }}
            >
                <Map
                    defaultState={{
                        center: [54.975922, 73.324444],
                        zoom: 15,
                        controls: ["zoomControl"],
                    }}
                    modules={["control.ZoomControl"]}
                    width='100%'
                    height='500px'
                >
                    <Placemark
                        defaultGeometry={[54.975922, 73.324444]}
                        properties={
                            {
                                balloonContent: 'Контент',
                            }}
                        onClick={scrollToElement}
                    />
                    <SearchControl
                        options={{ float: "left", provider: 'yandex#search' }}
                    />
                </Map>
            </YMaps>

            <div className={cl.container}>
                {size.innerWidth < 1025
                    ? <>
                        <div className={cl.item}>
                            <div className={cl.itemBlock}>
                                <div className={cl.alpro}>
                                    <svg width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle id="Ellipse 7" cx="14" cy="14" r="14" fill="black" />
                                    </svg>
                                    <p>Alpro</p>
                                </div>
                                <Address colorIcon='black' colorText='black' />
                                <Phone colorIcon='black' colorText='black' />
                                <Email colorIcon='black' colorText='black' />
                            </div>
                        </div>
                    </>
                    : <>
                        <div className={cl.itemConteiner}>
                            <div className={cl.item}>
                                <div className={cl.itemBlock}>
                                    <div className={cl.alpro}>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle id="Ellipse 7" cx="14" cy="14" r="14" fill="black" />
                                        </svg>
                                        <p>Alpro</p>
                                    </div>
                                </div>
                                <div className={cl.itemBlock}>
                                    <Address colorIcon='black' colorText='black' />
                                </div>
                                <div className={[cl.itemBlock, cl.phone_email].join(' ')}>
                                    <Phone colorIcon='black' colorText='black' />
                                    <Email colorIcon='black' colorText='black' />
                                </div>
                            </div>
                            <div className={cl.item}>
                                <div className={cl.itemBlock}>
                                    <div className={cl.alpro}>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle id="Ellipse 7" cx="14" cy="14" r="14" fill="black" />
                                        </svg>
                                        <p>Alpro</p>
                                    </div>
                                </div>
                                <div className={cl.itemBlock}>
                                    <Address colorIcon='black' colorText='black' />
                                </div>
                                <div className={[cl.itemBlock, cl.phone_email].join(' ')}>
                                    <Phone colorIcon='black' colorText='black' />
                                    <Email colorIcon='black' colorText='black' />
                                </div>
                            </div>
                            <div className={cl.item}>
                                <div className={cl.itemBlock}>
                                    <div className={cl.alpro}>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle id="Ellipse 7" cx="14" cy="14" r="14" fill="black" />
                                        </svg>
                                        <p>Alpro</p>
                                    </div>
                                </div>
                                <div className={cl.itemBlock}>
                                    <Address colorIcon='black' colorText='black' />
                                </div>
                                <div className={[cl.itemBlock, cl.phone_email].join(' ')}>
                                    <Phone colorIcon='black' colorText='black' />
                                    <Email colorIcon='black' colorText='black' />
                                </div>
                            </div>
                            <div className={cl.item}>
                                <div className={cl.itemBlock}>
                                    <div className={cl.alpro}>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle id="Ellipse 7" cx="14" cy="14" r="14" fill="black" />
                                        </svg>
                                        <p>Alpro</p>
                                    </div>
                                </div>
                                <div className={cl.itemBlock}>
                                    <Address colorIcon='black' colorText='black' />
                                </div>
                                <div className={[cl.itemBlock, cl.phone_email].join(' ')}>
                                    <Phone colorIcon='black' colorText='black' />
                                    <Email colorIcon='black' colorText='black' />
                                </div>
                            </div>
                            <div className={cl.item} ref={scrollRef}>
                                <div className={cl.itemBlock}>
                                    <div className={cl.alpro}>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle id="Ellipse 7" cx="14" cy="14" r="14" fill="black" />
                                        </svg>
                                        <p>Alpro</p>
                                    </div>
                                </div>
                                <div className={cl.itemBlock}>
                                    <Address colorIcon='black' colorText='black' />
                                </div>
                                <div className={[cl.itemBlock, cl.phone_email].join(' ')}>
                                    <Phone colorIcon='black' colorText='black' />
                                    <Email colorIcon='black' colorText='black' />
                                </div>
                            </div>
                            <div className={cl.item}>
                                <div className={cl.itemBlock}>
                                    <div className={cl.alpro}>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle id="Ellipse 7" cx="14" cy="14" r="14" fill="black" />
                                        </svg>
                                        <p>Alpro</p>
                                    </div>
                                </div>
                                <div className={cl.itemBlock}>
                                    <Address colorIcon='black' colorText='black' />
                                </div>
                                <div className={[cl.itemBlock, cl.phone_email].join(' ')}>
                                    <Phone colorIcon='black' colorText='black' />
                                    <Email colorIcon='black' colorText='black' />
                                </div>
                            </div>
                            <div className={cl.item}>
                                <div className={cl.itemBlock}>
                                    <div className={cl.alpro}>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle id="Ellipse 7" cx="14" cy="14" r="14" fill="black" />
                                        </svg>
                                        <p>Alpro</p>
                                    </div>
                                </div>
                                <div className={cl.itemBlock}>
                                    <Address colorIcon='black' colorText='black' />
                                </div>
                                <div className={[cl.itemBlock, cl.phone_email].join(' ')}>
                                    <Phone colorIcon='black' colorText='black' />
                                    <Email colorIcon='black' colorText='black' />
                                </div>
                            </div>
                            <div className={cl.item}>
                                <div className={cl.itemBlock}>
                                    <div className={cl.alpro}>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle id="Ellipse 7" cx="14" cy="14" r="14" fill="black" />
                                        </svg>
                                        <p>Alpro</p>
                                    </div>
                                </div>
                                <div className={cl.itemBlock}>
                                    <Address colorIcon='black' colorText='black' />
                                </div>
                                <div className={[cl.itemBlock, cl.phone_email].join(' ')}>
                                    <Phone colorIcon='black' colorText='black' />
                                    <Email colorIcon='black' colorText='black' />
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>

            {/* <ContactsData /> */}

        </section>
    )
}

export default WhereToBuy