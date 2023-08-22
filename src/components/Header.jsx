import React, { useState } from 'react';

import cl from './styles/Header.module.css';
import Logo from './Logo';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

    const [modal, setModal] = useState(false)
    const menuMobile = [cl.menuMobile]
    const menuMobileButton = [cl.menuMobileOpen]

    if (modal) {
        menuMobile.push(cl.menuMobileActive)
        menuMobileButton.push(cl.menuMobileClose)
    }

    const menuLinkActive = ({ isActive }) => isActive ? [cl.menuLink, cl.menuLinkActive].join(' ') : cl.menuLink;

    return (
        <div className={cl.header}>

            <Link to='/' onClick={() => { setModal(false) }}>
                <div className={cl.logoConteiner}>
                    <Logo />
                </div>
            </Link>

            <nav className={cl.menu}>
                <div className={cl.menuList}>
                    <NavLink to='/' className={menuLinkActive}>
                        плинтуса
                        <div className={cl.highlight_1}></div>
                        <div className={cl.highlight_2}></div>
                    </NavLink>
                    <NavLink to='/installation' className={menuLinkActive}>
                        установка
                        <div className={cl.highlight_1}></div>
                        <div className={cl.highlight_2}></div>
                    </NavLink>
                </div>
                <div className={cl.menuList}>
                    <NavLink to='/catalog' className={menuLinkActive}>
                        каталог
                        <div className={cl.highlight_1}></div>
                        <div className={cl.highlight_2}></div>
                    </NavLink>
                    <NavLink to='/wheretobuy' className={menuLinkActive}>
                        где купить
                        <div className={cl.highlight_1}></div>
                        <div className={cl.highlight_2}></div>
                    </NavLink>
                </div>
                <div className={cl.menuList}>
                    <NavLink to='/aboutus' className={menuLinkActive}>
                        о нас
                        <div className={cl.highlight_1}></div>
                        <div className={cl.highlight_2}></div>
                    </NavLink>
                    <NavLink to='/contacts' className={menuLinkActive}>
                        контакты
                        <div className={cl.highlight_1}></div>
                        <div className={cl.highlight_2}></div>
                    </NavLink>
                </div>
            </nav>

            <button className={menuMobileButton.join(' ')} onClick={() => { modal ? setModal(false) : setModal(true) }}>
            </button>

            <nav className={menuMobile.join(' ')}>
                <NavLink to='/' className={menuLinkActive} onClick={() => { setModal(false) }}>
                    плинтуса
                    <div className={cl.highlight_1}></div>
                    <div className={cl.highlight_2}></div>
                </NavLink>
                <NavLink to='/catalog' className={menuLinkActive} onClick={() => { setModal(false) }}>
                    каталог
                    <div className={cl.highlight_1}></div>
                    <div className={cl.highlight_2}></div>
                </NavLink>
                <NavLink to='/aboutus' className={menuLinkActive} onClick={() => { setModal(false) }}>
                    о нас
                    <div className={cl.highlight_1}></div>
                    <div className={cl.highlight_2}></div>
                </NavLink>
                <NavLink to='/installation' className={menuLinkActive} onClick={() => { setModal(false) }}>
                    установка
                    <div className={cl.highlight_1}></div>
                    <div className={cl.highlight_2}></div>
                </NavLink>
                <NavLink to='/wheretobuy' className={menuLinkActive} onClick={() => { setModal(false) }}>
                    где купить
                    <div className={cl.highlight_1}></div>
                    <div className={cl.highlight_2}></div>
                </NavLink>
                <NavLink to='/contacts' className={menuLinkActive} onClick={() => { setModal(false) }}>
                    контакты
                    <div className={cl.highlight_1}></div>
                    <div className={cl.highlight_2}></div>
                </NavLink>
            </nav>

        </div >
    )
}

export default Header