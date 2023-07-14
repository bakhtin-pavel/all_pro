import React from 'react';

import cl from './styles/Catalog.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Filter from '../components/UI/filter/Filter';
import ButtonInCatalog from '../components/UI/button/ButtonInCatalog';

const Catalog = () => {

    const id = 1;

    const navigate = useNavigate();

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
                    classContainer={cl.filterContainer}
                    classFilter={cl.filterType}
                    classDropdown={cl.dropDownContainer}
                >
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
                </Filter>
                <Filter
                    nameFilter='Цвет'
                    classContainer={cl.filterContainer}
                    classFilter={cl.filterType}
                    classDropdown={cl.dropDownContainer}
                >
                    <div className={cl.filterItem}>
                        <input type="checkbox" id="name" className={cl.customCheckbox} />
                        <label htmlFor="name">Теневой плинтус скрытого монтажа L под рассеиватель </label>
                    </div>
                </Filter>
                <Filter
                    nameFilter='размер'
                    classContainer={cl.filterContainer}
                    classFilter={cl.filterType}
                    classDropdown={cl.dropDownContainer}
                >
                    <div className={cl.filterItem}>
                        <input type="checkbox" id="name" className={cl.customCheckbox} />
                        <label htmlFor="name">Теневой плинтус скрытого монтажа L под рассеиватель </label>
                    </div>
                </Filter>
            </div>

            <div className={cl.productContainer}>
                <div className={cl.productCard} onClick={() => navigate(`/catalog/${id}`)}>
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
                <div className={cl.productCard}><img src="" alt="" />
                    <h3>Al 13-7208 PANEL</h3>
                    <div className={cl.cardDecor}></div>
                    <ul className={cl.cardInfo}>
                        <li>название</li>
                        <li>размер</li>
                        <li>цвет</li>
                    </ul>
                    <p className={cl.cardPrice}>1500₽</p>
                </div>
                <div className={cl.productCard}><img src="" alt="" />
                    <h3>Al 13-7208 PANEL</h3>
                    <div className={cl.cardDecor}></div>
                    <ul className={cl.cardInfo}>
                        <li>название</li>
                        <li>размер</li>
                        <li>цвет</li>
                    </ul>
                    <p className={cl.cardPrice}>1500₽</p>
                </div>
                <div className={cl.productCard}><img src="" alt="" />
                    <h3>Al 13-7208 PANEL</h3>
                    <div className={cl.cardDecor}></div>
                    <ul className={cl.cardInfo}>
                        <li>название</li>
                        <li>размер</li>
                        <li>цвет</li>
                    </ul>
                    <p className={cl.cardPrice}>1500₽</p>
                </div>
                <div className={cl.productCard}><img src="" alt="" />
                    <h3>Al 13-7208 PANEL</h3>
                    <div className={cl.cardDecor}></div>
                    <ul className={cl.cardInfo}>
                        <li>название</li>
                        <li>размер</li>
                        <li>цвет</li>
                    </ul>
                    <p className={cl.cardPrice}>1500₽</p>
                </div>
                <div className={cl.productCard}><img src="" alt="" />
                    <h3>Al 13-7208 PANEL</h3>
                    <div className={cl.cardDecor}></div>
                    <ul className={cl.cardInfo}>
                        <li>название</li>
                        <li>размер</li>
                        <li>цвет</li>
                    </ul>
                    <p className={cl.cardPrice}>1500₽</p>
                </div>
            </div>

            <div className={cl.load3D}>
                <ButtonInCatalog>скачать 3D Модель</ButtonInCatalog>
            </div>

            <div className={cl.pagination}>
                <button className={cl.numPageButtonCurrent}>1</button>
                <button className={cl.numPageButton}>2</button>
                <button className={cl.numPageButtonCurrent}>3</button>
                <button className={cl.numPageButton}>4</button>
                <button className={cl.numPageButtonCurrent}>5</button>
            </div>

        </div>
    )
}

export default Catalog