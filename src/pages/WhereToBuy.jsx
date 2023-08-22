import React, { useRef, useState, useEffect } from 'react';
import cl from './styles/WhereToBuy.module.css';

import axios from 'axios';

import { YMaps, Placemark, SearchControl } from '@pbe/react-yandex-maps';
import { Map as Mapi } from '@pbe/react-yandex-maps';

import Address from '../components/contacts/address/Address';
import Email from '../components/contacts/email/Email';
import Phone from '../components/contacts/phone/Phone';
import { useWindowSize } from '../hooks/useWindowSize';
import { Helmet } from 'react-helmet';



const WhereToBuy = () => {

    const size = useWindowSize();
    const [item, setItem] = useState([])

    async function fetchAddress() {
        const response = await axios.get('https://api.alpro13.ru/v1/addresses')
        const sortResponse = response.data.data.sort((a, b) => {
            const addressA = a.address.toUpperCase();
            const addressB = b.address.toUpperCase();
            const startCity = "Г. КРАСНОЯРСК";
            if (addressA.includes(startCity) && !addressB.includes(startCity)) {
                return -1;
            }
            if (!addressA.includes(startCity) && addressB.includes(startCity)) {
                return 1;
            }
            if (addressA < addressB) {
                return -1;
            }
            if (addressA > addressB) {
                return 1;
            }
            return 0;
        });
        setItem(sortResponse)
        console.log(sortResponse)
    }

    useEffect(() => {
        fetchAddress()
    }, [])

    const itemsRef = useRef(null);
    const mapRef = useRef()
    let highlightOff

    function scrollToId(item) {
        window.scrollBy(0, 0.1)
        mapRef.current.setZoom(12)
        mapRef.current.setCenter([item.coordinate_x, item.coordinate_y])
        if (highlightOff) {
            highlightOff.classList.remove(cl.itemActive)
        }
        const map = getMap();
        const node = map.get(item.id);
        highlightOff = node
        node.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
        node.classList.add(cl.itemActive)
    }

    function getMap() {
        if (!itemsRef.current) {
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    }

    return (
        <section>

            <Helmet>
                <title>Al Pro: Где купить</title>
            </Helmet>

            <div className={cl.headContainer}>
                <h2>Где купить</h2>
                <div className={cl.headDecor}></div>
            </div>

            <div className={cl.mapContainer}>
                <YMaps
                    query={{ apikey: '32fa1f28-2d0d-4abf-89a0-01759ef743c2', referer: 'Key #1' }}
                >
                    <Mapi
                        instanceRef={mapRef}
                        defaultState={{
                            center: [55.030204, 82.920430],
                            zoom: 4,
                            controls: ["zoomControl"],
                        }}
                        modules={["control.ZoomControl"]}
                        width='100%'
                        height='100%'
                    >
                        {item.map((item) =>
                            <Placemark
                                key={item.id}
                                defaultGeometry={[item.coordinate_x, item.coordinate_y]}
                                properties={
                                    {
                                        balloonContentHeader: item.name,
                                        balloonContentBody: item.address,
                                    }}
                                onClick={() => scrollToId(item)}
                            />
                        )}
                        <SearchControl
                            options={{ float: "left", provider: 'yandex#search' }}
                        />
                    </Mapi>
                </YMaps>
            </div>

            <div className={cl.container}>
                {size.innerWidth < 1025
                    ? <>
                        <div className={cl.itemConteiner}>
                            {item.map((item) =>
                                <div
                                    key={item.id}
                                    className={cl.item}
                                    ref={(node) => {
                                        const map = getMap();
                                        if (node) {
                                            map.set(item.id, node);
                                        } else {
                                            map.delete(item.id);
                                        }
                                    }}
                                >
                                    <div className={cl.itemBlock}>
                                        <div className={cl.alpro}>
                                            <svg width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle id="Ellipse 7" cx="14" cy="14" r="14" fill="black" />
                                            </svg>
                                            <p>{item.name}</p>
                                        </div>
                                        <Address colorIcon='black' colorText='black'>{item.address}</Address>
                                        <Phone colorIcon='black' colorText='black'>{item.phone}</Phone>
                                        <Email colorIcon='black' colorText='black'>{item.email}</Email>
                                    </div>
                                    <div className={cl.itemDecor}></div>
                                </div>
                            )}
                        </div>
                    </>
                    : <>
                        <div className={cl.itemConteiner}>
                            {item.map((item) =>
                                <div
                                    key={item.id}
                                    className={cl.item}
                                    ref={(node) => {
                                        const map = getMap();
                                        if (node) {
                                            map.set(item.id, node);
                                        } else {
                                            map.delete(item.id);
                                        }
                                    }}
                                >
                                    <div className={cl.itemBlock}>
                                        <div className={cl.alpro}>
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle id="Ellipse 7" cx="14" cy="14" r="14" fill="black" />
                                            </svg>
                                            <p>{item.name}</p>
                                        </div>
                                    </div>
                                    <div className={cl.itemBlock}>
                                        <Address colorIcon='black' colorText='black'>{item.address}</Address>
                                    </div>
                                    <div className={cl.itemBlock}>
                                        <Phone colorIcon='black' colorText='black' phone={item.phone}>{item.phone}</Phone>
                                        <Email colorIcon='black' colorText='black' email={item.email}>{item.email}</Email>
                                    </div>
                                    <div className={cl.itemDecor}></div>
                                </div>
                            )}
                        </div>
                    </>
                }
            </div>

        </section>
    )
}

export default WhereToBuy