import React, { useState, useEffect } from 'react';

import cl from './styles/Footer.module.css';

import axios from 'axios';

import Logo from './Logo';
import ApplicationForm from './ApplicationForm';
import Address from './contacts/address/Address';
import Phone from './contacts/phone/Phone';
import Email from './contacts/email/Email';

const Footer = () => {
    const close = () => console.log('good')

    const [items, setItems] = useState()

    async function fetchContacts() {
        const response = await axios.get('https://api.alpro13.ru/v1/contacts')
        setItems(response.data.data)
        console.log(response.data.data)
    }

    useEffect(() => {
        fetchContacts()
    }, [])

    return (
        <footer className={cl.footer}>
            <div className={cl.footerLeft}>
                <div className={cl.logoContainer}>
                    <Logo />
                </div>
                <div className={cl.contacts}>
                    <h4>Контакты</h4>
                    <Address colorIcon='white'>{items && items[1].value}</Address>
                    <Phone colorIcon='white' phone={items && items[3].value}>{items && items[3].value}</Phone>
                    <Email colorIcon='white' email={items && items[2].value}>{items && items[2].value}</Email>
                </div>
                {/* <div className={cl.social}>
                    <h4>Социальные сети</h4>
                    <div>
                        <a href="#s">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16.5 0H15.5L0 15.5V16.5L15.5 32H16.5L32 16.5V15.5L16.5 0Z" fill="white" />
                                <path d="M16.2763 31.9805C16.2763 31.1319 16.2351 30.3249 16.2848 29.5236C16.3895 27.8384 16.4878 26.1501 16.6888 24.4748C16.9267 22.4937 17.5799 20.6665 19.0132 19.1901C20.2046 17.9633 21.668 17.2629 23.3119 16.8949C24.8822 16.5434 26.4792 16.4152 28.0818 16.3451C29.2615 16.2937 30.4417 16.2535 31.6217 16.209C31.7308 16.2049 31.8405 16.2084 31.9946 16.2084V16.5926C31.9946 19.1704 32.0095 21.7482 31.9898 24.326C31.9753 26.2278 31.5738 28.0186 30.2898 29.5093C29.1378 30.8467 27.6731 31.6252 25.9274 31.8314C23.3357 32.1375 20.7304 31.9218 18.132 31.978C17.5006 31.9916 16.8686 31.9799 16.2766 31.9799L16.2763 31.9805Z" fill="#191B27" />
                                <path d="M0.00467832 16.1781C1.37933 16.2348 2.69501 16.2815 4.01005 16.3449C5.6869 16.4261 7.35869 16.5597 8.99464 16.968C11.3184 17.5482 13.1177 18.8301 14.2545 20.9635C14.8567 22.0935 15.1846 23.3253 15.3101 24.5875C15.494 26.4405 15.6003 28.3014 15.7179 30.1603C15.7553 30.751 15.7236 31.3461 15.7236 31.979H15.3786C12.812 31.979 10.245 32.0015 7.67865 31.9711C6.00877 31.9511 4.38994 31.6681 2.98484 30.6669C1.37236 29.5179 0.43626 27.9505 0.156255 25.9983C0.0706364 25.4022 0.0148257 24.7966 0.0110204 24.1951C-0.00483486 21.6792 0.00436121 19.1632 0.00436121 16.6472V16.1777L0.00467832 16.1781Z" fill="#191B27" />
                                <path d="M31.9949 15.792C30.7265 15.7407 29.511 15.701 28.2965 15.6404C26.4607 15.5487 24.6282 15.4348 22.8397 14.9542C19.7901 14.1351 17.8627 12.1934 17.0316 9.16096C16.5556 7.42444 16.443 5.63716 16.3549 3.84988C16.2972 2.68373 16.2661 1.51664 16.2239 0.349866C16.2204 0.252476 16.2236 0.154768 16.2236 0.00884207C16.3739 0.00884207 16.5065 0.00884207 16.6393 0.00884207C19.193 0.00884207 21.747 -0.0162192 24.3 0.0180418C25.8751 0.038979 27.4098 0.284516 28.7744 1.17625C30.3925 2.23358 31.4155 3.69665 31.7609 5.59401C31.9064 6.39407 31.9733 7.21728 31.9828 8.0313C32.0117 10.4591 31.9943 12.8875 31.9949 15.3156C31.9949 15.4507 31.9949 15.5858 31.9949 15.7927V15.792Z" fill="#191B27" />
                                <path d="M15.6864 0.00870827C15.6864 1.09142 15.714 2.1221 15.6785 3.15025C15.6443 4.14223 15.565 5.13421 15.4695 6.12239C15.3081 7.79515 15.0579 9.45078 14.2664 10.9684C13.22 12.9749 11.5713 14.2457 9.42009 14.8773C7.52126 15.435 5.55933 15.5495 3.59739 15.6415C2.41902 15.6967 1.24034 15.7408 0.00457824 15.7922C0.00457824 15.633 0.00457824 15.5143 0.00457824 15.3957C0.00521245 12.8306 -0.0103258 10.2654 0.0125059 7.70061C0.0270928 6.07258 0.289974 4.49499 1.23939 3.11091C2.44027 1.36106 4.11079 0.376379 6.21035 0.148924C7.09761 0.0528034 7.99502 0.0223492 8.88831 0.0147357C11.0307 -0.00366374 13.1734 0.00870827 15.3157 0.00870827H15.6861H15.6864Z" fill="#191B27" />
                            </svg>
                        </a>
                        <a href="#s">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                <path d="M16.1684 32.0068C12.3474 32.0068 8.52631 32.0148 4.70558 32.0021C3.61395 31.9986 2.64795 31.6048 1.81391 30.8944C1.07395 30.2639 0.580845 29.4744 0.327035 28.5342C0.212441 28.1103 0.165405 27.6775 0.165405 27.2387C0.165405 22.1313 0.165405 17.0243 0.165405 11.917C0.165405 9.48291 0.153726 7.04854 0.171405 4.61449C0.179612 3.48012 0.575479 2.47395 1.32207 1.61564C2.05857 0.769065 2.98542 0.262328 4.08495 0.0728971C4.30529 0.0348204 4.5288 0.0113398 4.75294 0.0110225C12.3635 0.0100706 19.974 0.00594564 27.5845 0.0151475C28.6888 0.0164167 29.6715 0.405433 30.5172 1.1273C31.3323 1.82315 31.8412 2.70336 32.0666 3.75047C32.1272 4.03192 32.1607 4.31844 32.1607 4.60783C32.1607 12.2168 32.1648 19.8258 32.1559 27.4348C32.1547 28.5212 31.7752 29.4893 31.0788 30.3242C30.3051 31.2516 29.3157 31.7939 28.1268 31.9697C27.9677 31.9932 27.8058 32.0052 27.6451 32.0052C23.8196 32.0071 19.9942 32.0068 16.1687 32.0068H16.1684ZM10.3437 10.5021C10.3336 13.7081 12.9371 16.3351 16.133 16.3437C19.3354 16.3526 21.9341 13.75 21.9511 10.5176C21.9682 7.30905 19.3562 4.68112 16.1488 4.67985C12.9481 4.67859 10.3535 7.28049 10.3434 10.5018L10.3437 10.5021ZM18.2248 20.9833C18.459 20.924 18.6898 20.8713 18.9174 20.8066C19.9939 20.5004 21.0078 20.0571 21.9164 19.393C22.6371 18.8663 22.7889 17.8744 22.2674 17.163C21.7466 16.4522 20.7613 16.3078 20.0447 16.8393C19.6854 17.1058 19.2921 17.3102 18.8798 17.4768C17.6348 17.9794 16.3455 18.1365 15.0171 17.9473C13.9201 17.7912 12.8989 17.4352 11.9856 16.7873C11.6292 16.5344 11.2204 16.4554 10.7936 16.5534C10.1322 16.7054 9.70445 17.1214 9.56933 17.7874C9.43169 18.4658 9.67351 19.0217 10.2342 19.4231C11.0363 19.9975 11.9237 20.3992 12.8581 20.7003C13.2366 20.8221 13.6221 20.9176 14.0246 21.0024C13.9911 21.0401 13.969 21.0671 13.9447 21.0925C13.6104 21.4447 13.2758 21.7966 12.9412 22.1485C12.1879 22.9401 11.4265 23.7239 10.684 24.5251C10.0195 25.2425 10.1568 26.3537 10.9593 26.91C11.5954 27.351 12.4547 27.2533 13.0037 26.6688C13.9974 25.61 14.9877 24.5473 15.9771 23.484C16.0466 23.4094 16.0854 23.399 16.1637 23.477C16.6707 23.9809 17.184 24.4784 17.6944 24.9785C18.2822 25.5541 18.8685 26.1313 19.4575 26.7056C19.8619 27.0997 20.3452 27.2637 20.8986 27.1473C21.506 27.0197 21.9177 26.6463 22.0938 26.0478C22.2712 25.445 22.127 24.9043 21.6844 24.4588C20.7938 23.5627 19.8954 22.6746 19.002 21.7813C18.7422 21.5215 18.4887 21.2549 18.2245 20.9836L18.2248 20.9833Z" fill="#ED812B" />
                                <path d="M16.153 12.9156C14.8268 12.9182 13.7547 11.8473 13.7528 10.5181C13.7509 9.18128 14.8239 8.09832 16.1495 8.09863C17.4624 8.09927 18.5424 9.17969 18.5443 10.4943C18.5458 11.8374 17.4836 12.9134 16.153 12.9156Z" fill="#ED812B" />
                            </svg>
                        </a>
                        <a href="#s">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M15.9809 31.9858C12.3324 31.9848 8.68299 31.9417 5.03547 31.9994C2.40359 32.0409 0.344545 29.9641 0.134979 27.7943C0.0933188 27.3643 0.00905066 26.9349 0.00873505 26.5052C0.00116039 19.4169 -0.00799634 12.3285 0.0125184 5.24019C0.0175681 3.50077 0.655735 2.0198 2.08924 0.95585C3.01366 0.269595 4.07348 0.00765067 5.20337 0.00701643C12.4356 0.00352807 19.6678 -0.009474 26.8997 0.0124075C29.9233 0.0216041 32.0013 2.19612 32 5.24209C31.9972 12.483 32.0013 19.7242 31.9984 26.9651C31.9975 29.771 29.8116 32.0355 26.9922 31.9981C23.3226 31.9496 19.6517 31.9864 15.9815 31.9854L15.9809 31.9858ZM12.1711 10.677C12.174 10.7461 12.1765 10.8149 12.1793 10.884C13.5522 11.0686 13.5513 12.0875 13.5828 13.0513C13.604 13.7014 13.5813 14.3616 13.4863 15.0038C13.4348 15.352 13.1912 15.6713 13.034 16.0037C12.7411 15.808 12.4419 15.6212 12.1591 15.4119C12.0591 15.3377 11.9852 15.2166 11.9224 15.104C11.2164 13.8368 10.4722 12.5879 9.83086 11.2884C9.53797 10.6947 9.14977 10.4014 8.53559 10.4064C7.60454 10.4137 6.67317 10.455 5.74275 10.4968C4.9654 10.532 4.78014 10.8285 5.09891 11.5456C6.18619 13.9896 7.43948 16.3411 9.00301 18.5169C10.9456 21.22 13.4541 22.7854 16.8961 22.5072C17.5772 22.4524 17.8045 22.264 17.8944 21.5819C17.9506 21.155 17.9989 20.7168 18.1377 20.3137C18.4038 19.5418 18.8589 19.4239 19.4409 19.9801C19.9254 20.4431 20.3439 20.9749 20.8062 21.4626C21.4027 22.0921 22.0762 22.5799 22.9994 22.5599C23.9974 22.5383 24.9963 22.5358 25.9936 22.4965C26.9168 22.46 27.2384 21.9 26.8155 21.0954C26.6949 20.8658 26.5649 20.6296 26.39 20.4428C25.5593 19.5545 24.7264 18.6672 23.8645 17.81C23.404 17.3521 23.3128 16.9018 23.7001 16.3741C24.021 15.9368 24.3679 15.5169 24.6687 15.0663C25.4135 13.95 26.1988 12.854 26.8511 11.6841C27.2924 10.8929 26.9808 10.4864 26.0911 10.4848C24.9193 10.4826 23.7468 10.5181 22.5752 10.4968C22.0608 10.4876 21.8209 10.7175 21.5899 11.1555C20.863 12.5331 20.0971 13.8913 19.302 15.2305C19.1045 15.5635 18.7399 15.7966 18.3678 16.1572C18.1901 15.8264 18.0358 15.6196 17.966 15.3869C17.8925 15.1421 17.8714 14.8725 17.8761 14.6144C17.8957 13.5254 17.9503 12.4367 17.9575 11.348C17.9619 10.7207 17.7798 10.1759 17.0571 10.0281C15.7432 9.75952 14.4246 9.75127 13.1258 10.0782C12.7796 10.1654 12.4883 10.4721 12.1717 10.6779L12.1711 10.677Z" fill="#0077E1" />
                            </svg>
                        </a>
                    </div>
                </div> */}
            </div>
            <ApplicationForm close={close} visible={false} />
        </footer>
    )
}

export default Footer