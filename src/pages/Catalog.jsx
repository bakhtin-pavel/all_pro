import React from 'react';

import cl from './styles/Catalog.module.css';
import { NavLink } from 'react-router-dom';
import Filter from '../components/UI/filter/Filter';

const Catalog = () => {

    const activeLink = ({ isActive }) => isActive ? cl.active : null;

    return (
        <div className={cl.container}>

            <div className={cl.headers}>
                <NavLink to='/catalog' style={{ flexGrow: 1 }} className={activeLink}>
                    <h2>Каталог</h2>
                </NavLink>
                <NavLink to='/aboutus' className={activeLink}>
                    <h2>двери</h2>
                </NavLink>
                <NavLink to='/contacts' className={activeLink}>
                    <h2>профиль</h2>
                </NavLink>
            </div>

            <div className={cl.filters}>
                <Filter
                    nameFilter='вид плинтуса'
                ></Filter>
                <Filter
                    nameFilter='цвет'
                ></Filter>
                <Filter
                    nameFilter='размер'
                ></Filter>
            </div>

            <div className={cl.productContainer}>
                <div className={cl.productCard}>
                    <img src="" alt="" />
                    <h3>Al 13-7208 PANEL</h3>
                    <div className={cl.cardDecor}></div>
                    <ul className={cl.cardInfo}>
                        <li>название</li>
                        <li>размер</li>
                        <li>цвет</li>
                    </ul>
                    <p className={cl.cardPrice}>1500₽</p>
                </div>
                <div className={cl.productCard}></div>
                <div className={cl.productCard}></div>
                <div className={cl.productCard}></div>
                <div className={cl.productCard}></div>
                <div className={cl.productCard}></div>
            </div>

        </div>
    )
}

export default Catalog