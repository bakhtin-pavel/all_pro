import React, { useRef } from 'react';

import cl from './ContactsData.module.css';

import Address from '../../contacts/address/Address';
import Email from '../../contacts/email/Email';
import Phone from '../../contacts/phone/Phone';
import { useWindowSize } from '../../../hooks/useWindowSize';

const ContactsData = () => {

    const size = useWindowSize()

    const scrollRef = useRef(null);

    return (
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
    )
}

export default ContactsData