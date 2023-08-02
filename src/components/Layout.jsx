import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import { useDispatch } from 'react-redux';
import { clearAll } from '../appRedux/filters/filterSlice';

const Layout = () => {

    const dispatch = useDispatch()
    const { pathname } = useLocation();

    useEffect(() => {
        if (!pathname.includes('catalog')) {
            dispatch(clearAll())
        };
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, [pathname, dispatch])

    return (
        <>

            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />

        </>
    )
}

export default Layout