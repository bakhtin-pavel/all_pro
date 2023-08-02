import React, { useState, useEffect, useRef } from 'react';
import cl from './styles/Catalog.module.css';

import { NavLink, useNavigate } from 'react-router-dom';

import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { changeVids, changeColors, changeSizes, changePages } from '../appRedux/filters/filterSlice';

import Filter from '../components/UI/filter/Filter';
import ButtonInCatalog from '../components/UI/button/ButtonInCatalog';
import { ReactComponent as InfoLiDecor } from '../components/media/images/cardInfoLi.svg';
import { getPagesArray } from '../components/utilits/getPagesArray';
import Skeleton from '../components/UI/loader/Skeleton';
import { useWindowSize } from '../hooks/useWindowSize';
import SkeletonM from '../components/UI/loader/SkeletonM';
import useDebounce from '../hooks/useDebounce';

let controller;
const Catalog = () => {

    const filterVids = useSelector((state) => state.filter.vid)
    const filterColors = useSelector((state) => state.filter.color)
    const filterSizes = useSelector((state) => state.filter.size)
    const page = useSelector((state) => state.filter.page)
    const dispatch = useDispatch()

    const changePage = (p) => {
        dispatch(changePages(p));
        topRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const [itemsFilter, setItemsFilter] = useState()
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const size = useWindowSize();
    const [pageCount, setPageCount] = useState()
    let pagesArray = getPagesArray(pageCount)
    const topRef = useRef(null)

    async function fetchProductsFilters() {
        const response = await axios.get('http://95.163.229.9:8005/v1/product/options')
        setItemsFilter(response.data.data[0].options)
        console.log(response.data.data[0].options)
    }

    useEffect(() => {
        fetchProductsFilters()
    }, [])

    async function fetchProducts() {
        try {
            if (controller) {
                controller.abort()
            }
            controller = new AbortController();
            setIsLoading(true)
            console.log(isLoading)
            const response = await axios.get('http://95.163.229.9:8005/v1/products', {
                signal: controller.signal,
                params: {
                    category: 'plintusa',
                    vidy: filterVids,
                    cvet: filterColors,
                    razmer: filterSizes,
                    limit: 12,
                    page: page,
                }
            })
            setItems(response.data.data)
            setPageCount(response.data.pagination.pageCount)
            console.log(response.data.data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
            console.log(isLoading)
        }
    }

    const flag = useDebounce(filterColors, 500);

    useEffect(() => {
        fetchProducts()
    }, [filterVids, flag, filterSizes, page])

    const navigate = useNavigate();

    const activeLink = ({ isActive }) => isActive ? cl.active : null;

    return (
        <div className={cl.containerBuckground}>
            <div className={cl.container}>

                <div ref={topRef} className={cl.headers}>
                    <NavLink to='/catalog' style={{ flexGrow: 1 }} className={activeLink}>
                        <h2>Каталог</h2>
                    </NavLink>

                    {/* Возможные разделы
                <NavLink to='/aboutus' className={activeLink}>
                    <h2>двери</h2>
                </NavLink>
                <NavLink to='/contacts' className={activeLink}>
                    <h2>профиль</h2>
                </NavLink> */}
                </div>

                <div className={cl.filters}>
                    <Filter
                        nameFilter='вид плинтуса'
                        classContainer={cl.filterContainer}
                        classFilter={cl.filterType}
                        classDropdown={cl.dropDownContainer}
                    >
                        {itemsFilter && itemsFilter[0].values.map((itemFilter, index) =>
                            <div key={index} className={cl.filterItem}>
                                <input
                                    type="checkbox"
                                    id={index}
                                    className={cl.customCheckbox}
                                    checked={filterVids.includes(itemFilter.slug)}
                                    onChange={() => {
                                        dispatch(changeVids(itemFilter.slug))
                                        if (page !== 1) {
                                            dispatch(changePages(1))
                                        }
                                    }}
                                />
                                <label htmlFor={index}>{itemFilter.name}</label>
                            </div>
                        )}
                    </Filter>
                    <Filter
                        nameFilter='Цвет'
                        classContainer={cl.filterContainer}
                        classFilter={cl.filterType}
                        classDropdown={cl.dropDownContainer}
                    >
                        {itemsFilter && itemsFilter[1].values.map((itemFilter, index) =>
                            <div key={index} className={cl.filterItem}>
                                <input
                                    type="checkbox"
                                    id={index}
                                    className={cl.customCheckbox}
                                    checked={filterColors.includes(itemFilter.slug)}
                                    onChange={() => {
                                        dispatch(changeColors(itemFilter.slug))
                                        if (page !== 1) {
                                            dispatch(changePages(1))
                                        }
                                    }}
                                />
                                <label htmlFor={index}>{itemFilter.name}</label>
                            </div>
                        )}
                    </Filter>
                    <Filter
                        nameFilter='размер'
                        classContainer={cl.filterContainer}
                        classFilter={cl.filterType}
                        classDropdown={cl.dropDownContainer}
                    >
                        {itemsFilter && itemsFilter[2].values.map((itemFilter, index) =>
                            <div key={index} className={cl.filterItem}>
                                <input
                                    type="checkbox"
                                    id={index}
                                    className={cl.customCheckbox}
                                    checked={filterSizes.includes(itemFilter.slug)}
                                    onChange={() => {
                                        dispatch(changeSizes(itemFilter.slug))
                                        if (page !== 1) {
                                            dispatch(changePages(1))
                                        }
                                    }}
                                />
                                <label htmlFor={index}>{itemFilter.name}</label>
                            </div>
                        )}
                    </Filter>
                </div>

                <div className={cl.productContainer}>
                    {isLoading
                        ? size.innerWidth > 1024
                            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                            : [...new Array(6)].map((_, index) => <SkeletonM key={index} />)
                        : items.length
                            ? items.map((item) =>
                                <div
                                    key={item.id}
                                    className={cl.productCard}
                                    onClick={() => navigate(`/catalog/${item.slug}`)}
                                >
                                    <div className={cl.cardImgWrapper}>
                                        <img src={item.images[0]} alt="Изображение товара" />
                                    </div>
                                    <div className={cl.cardInfoContainer}>
                                        <div>
                                            <h3 className={cl.cardName}>{item.name}</h3>
                                            <div className={cl.cardDecor}></div>
                                            <ul className={cl.cardInfo}>
                                                <li>
                                                    <InfoLiDecor />
                                                    <p>{item.options[0].values[0].name}</p>
                                                </li>
                                                <li>
                                                    <InfoLiDecor />
                                                    <p>{item.options[2].values[0].name}</p>
                                                </li>
                                                <li>
                                                    <InfoLiDecor />
                                                    <div className={cl.infoColor}>
                                                        {item.options[1].values.map((color) =>
                                                            <p key={color.name}>{color.name}</p>
                                                        )}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className={cl.cardPrice}>{item.price}₽</p>
                                    </div>
                                </div>
                            )
                            : <div className={cl.noProducts}>
                                <div className={cl.noProductsDecor1}></div>
                                <div className={cl.noProductsDecor2}></div>
                                <span>товары не найдены</span>
                                <p>К сожалению, товары по вашему запросу не найдены.<br />Пожалуйста, скорректируйте параметры в запросе.</p>
                            </div>
                    }
                </div>

                <div className={cl.load3D}>
                    <ButtonInCatalog>скачать 3D Модель</ButtonInCatalog>
                </div>

                <div className={cl.pagination}>
                    {pagesArray.map((p) =>
                        <button
                            key={p}
                            className={p === page ? cl.numPageButtonCurrent : cl.numPageButton}
                            onClick={() => changePage(p)}
                        >{p}</button>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Catalog