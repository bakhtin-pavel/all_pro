import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import cl from './styles/Catalog.module.css';

import models_3D from '../components/media/3DModels/3D_models.max';
import { handleDownload } from '../components/utilits/handleDownload';

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
import { ReactComponent as CurrentFilterDelete } from '../components/media/images/currentFilterDelete.svg';

import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

const Catalog = () => {

    const filterVids = useSelector((state) => state.filter.vid)
    const filterColors = useSelector((state) => state.filter.color)
    const filterSizes = useSelector((state) => state.filter.size)
    const page = useSelector((state) => state.filter.page)
    const dispatch = useDispatch()
    console.log(filterVids)

    const changePage = (p) => {
        dispatch(changePages(p));
        topRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const [itemsFilterVids, setItemsFilterVids] = useState()
    const [itemsFilterColors, setItemsFilterColors] = useState()
    const [itemsFilterSizes, setItemsFilterSizes] = useState()
    const [filterConnections, setFilterConnections] = useState()
    const [currentFilterSizes, setCurrentFilterSizes] = useState([])
    const [currentFilterColors, setCurrentFilterColors] = useState([])
    const [currentFilterVids, setCurrentFilterVids] = useState([])
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const size = useWindowSize();
    const [pageCount, setPageCount] = useState()
    let pagesArray = getPagesArray(pageCount)
    const topRef = useRef(null)

    async function fetchProductsFilters() {
        const response = await axios.get('https://api.alpro13.ru/v1/product/options')
        setItemsFilterVids(response.data.data[0].options[0].values)
        setCurrentFilterVids(response.data.data[0].options[0].values.map((item) => item.slug))
        setItemsFilterColors(response.data.data[0].options[1].values)
        setCurrentFilterColors(response.data.data[0].options[1].values.map((item) => item.slug))
        setItemsFilterSizes(response.data.data[0].options[2].values)
        setCurrentFilterSizes(response.data.data[0].options[2].values.map((item) => item.slug))
        console.log(response.data.data[0].options[0].values)
    }

    useEffect(() => {
        fetchProductsFilters()
    }, [])

    async function fetchProducts() {
        try {
            setIsLoading(true)
            const response = await axios.get('https://api.alpro13.ru/v1/products', {
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
        }
    }

    const flagColors = useDebounce(filterColors, 500);
    const flagVids = useDebounce(filterVids, 500);
    const flagSizes = useDebounce(filterSizes, 500);

    useEffect(() => {
        fetchProducts()
    }, [flagVids, flagColors, flagSizes, page])

    async function fetchProductsFiltersConnection() {
        const response = await axios.get('https://api.alpro13.ru/v1/product/filters')
        setFilterConnections(response.data.data)
        console.log(response.data)
    }

    useEffect(() => {
        fetchProductsFiltersConnection()
    }, [])

    const changeFilterSizes = () => {
        if (!filterVids.length && !filterColors.length) {
            if (itemsFilterSizes) {
                setCurrentFilterSizes(itemsFilterSizes.map((item) => item.slug))
                return
            }
            return
        }

        if (!filterConnections) return

        const sizeSlugArrayOfVid = []
        const sizeSlugArrayOfColor = []

        if (filterVids.length && filterColors.length) {
            filterVids.forEach((vid) => {
                filterConnections[vid].razmer.forEach((razmer) => {
                    if (!sizeSlugArrayOfVid.includes(razmer)) {
                        sizeSlugArrayOfVid.push(razmer)
                    }
                })
            })
            filterColors.forEach((color) => {
                const sizeArray = Object.entries(filterConnections).filter(([key, value]) => value.cvet.includes(color)).map(([key, value]) => value.razmer);
                sizeArray.forEach((arr) => {
                    arr.forEach((size) => {
                        if (!sizeSlugArrayOfColor.includes(size)) {
                            sizeSlugArrayOfColor.push(size)
                        }
                    })
                })
            })
            const sizeSlugArray = sizeSlugArrayOfVid.filter((size) => sizeSlugArrayOfColor.includes(size))
            return setCurrentFilterSizes(sizeSlugArray)
        }

        if (filterVids.length) {
            filterVids.forEach((vid) => {
                filterConnections[vid].razmer.forEach((razmer) => {
                    if (!sizeSlugArrayOfVid.includes(razmer)) {
                        sizeSlugArrayOfVid.push(razmer)
                    }
                })
            })
            return setCurrentFilterSizes(sizeSlugArrayOfVid)
        }

        if (filterColors.length) {
            filterColors.forEach((color) => {
                const sizeArray = Object.entries(filterConnections).filter(([key, value]) => value.cvet.includes(color)).map(([key, value]) => value.razmer);
                console.log(sizeArray)
                sizeArray.forEach((arr) => {
                    arr.forEach((size) => {
                        if (!sizeSlugArrayOfColor.includes(size)) {
                            sizeSlugArrayOfColor.push(size)
                        }
                    })
                })
            })
            return setCurrentFilterSizes(sizeSlugArrayOfColor)
        }
    }

    useEffect(() => {
        changeFilterSizes()
    }, [filterVids, filterColors, filterConnections])

    const changeFilterColors = () => {
        if (!filterVids.length && !filterSizes.length) {
            if (itemsFilterColors) {
                setCurrentFilterColors(itemsFilterColors.map((item) => item.slug))
                return
            }
            return
        }

        if (!filterConnections) return

        const colorSlugArrayOfVid = []
        const colorSlugArrayOfSize = []

        if (filterVids.length && filterSizes.length) {
            filterVids.forEach((vid) => {
                filterConnections[vid].cvet.forEach((cvet) => {
                    if (!colorSlugArrayOfVid.includes(cvet)) {
                        colorSlugArrayOfVid.push(cvet)
                    }
                })
            })
            filterSizes.forEach((size) => {
                const colorArray = Object.entries(filterConnections).filter(([key, value]) => value.razmer.includes(size)).map(([key, value]) => value.cvet);
                colorArray.forEach((arr) => {
                    arr.forEach((color) => {
                        if (!colorSlugArrayOfSize.includes(color)) {
                            colorSlugArrayOfSize.push(color)
                        }
                    })
                })
            })
            const colorSlugArray = colorSlugArrayOfVid.filter((color) => colorSlugArrayOfSize.includes(color))
            return setCurrentFilterColors(colorSlugArray)
        }

        if (filterVids.length) {
            filterVids.forEach((vid) => {
                filterConnections[vid].cvet.forEach((cvet) => {
                    if (!colorSlugArrayOfVid.includes(cvet)) {
                        colorSlugArrayOfVid.push(cvet)
                    }
                })
            })
            console.log(colorSlugArrayOfVid)
            return setCurrentFilterColors(colorSlugArrayOfVid)
        }

        if (filterSizes.length) {
            filterSizes.forEach((size) => {
                const colorArray = Object.entries(filterConnections).filter(([key, value]) => value.razmer.includes(size)).map(([key, value]) => value.cvet);
                colorArray.forEach((arr) => {
                    arr.forEach((color) => {
                        if (!colorSlugArrayOfSize.includes(color)) {
                            colorSlugArrayOfSize.push(color)
                        }
                    })
                })
            })
            console.log(colorSlugArrayOfSize)
            return setCurrentFilterColors(colorSlugArrayOfSize)
        }
    }

    useEffect(() => {
        changeFilterColors()
    }, [filterVids, filterSizes, filterConnections])

    const changeFilterVids = () => {
        if (!filterSizes.length && !filterColors.length) {
            if (itemsFilterVids) {
                setCurrentFilterVids(itemsFilterVids.map((item) => item.slug))
                return
            }
            return
        }

        if (!filterConnections) return

        const vidSlugArrayOfSize = []
        const vidSlugArrayOfColors = []
        if (filterSizes.length && filterColors.length) {
            filterSizes.forEach((size) => {
                const vidArray = Object.entries(filterConnections).filter(([key, value]) => value.razmer.includes(size)).map(([key, value]) => key);
                vidArray.forEach((vid) => {
                    if (!vidSlugArrayOfSize.includes(vid)) {
                        vidSlugArrayOfSize.push(vid)
                    }
                })
            })
            filterColors.forEach((color) => {
                const vidArray = Object.entries(filterConnections).filter(([key, value]) => value.cvet.includes(color)).map(([key, value]) => key);
                vidArray.forEach((vid) => {
                    if (!vidSlugArrayOfColors.includes(vid)) {
                        vidSlugArrayOfColors.push(vid)
                    }
                })
            })
            const vidSlugArray = vidSlugArrayOfSize.filter((vid) => vidSlugArrayOfColors.includes(vid));
            return setCurrentFilterVids(vidSlugArray)
        }
        if (filterSizes.length) {
            filterSizes.forEach((size) => {
                const vidArray = Object.entries(filterConnections).filter(([key, value]) => value.razmer.includes(size)).map(([key, value]) => key);
                vidArray.forEach((vid) => {
                    if (!vidSlugArrayOfSize.includes(vid)) {
                        vidSlugArrayOfSize.push(vid)
                    }
                })
            })
            return setCurrentFilterVids(vidSlugArrayOfSize)
        }
        if (filterColors.length) {
            filterColors.forEach((color) => {
                const vidArray = Object.entries(filterConnections).filter(([key, value]) => value.cvet.includes(color)).map(([key, value]) => key);
                vidArray.forEach((vid) => {
                    if (!vidSlugArrayOfColors.includes(vid)) {
                        vidSlugArrayOfColors.push(vid)
                    }
                })
            })
            return setCurrentFilterVids(vidSlugArrayOfColors)
        }
    }

    useEffect(() => {
        changeFilterVids()
    }, [filterSizes, filterColors, filterConnections])

    const navigate = useNavigate();

    const activeLink = ({ isActive }) => isActive ? cl.active : null;

    return (
        <div className={cl.containerBuckground}>
            <Helmet>
                <title>Al Pro: Каталог</title>
            </Helmet>
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
                        {itemsFilterVids && itemsFilterVids.map((itemFilter, index) =>
                            <div key={index} className={cl.filterItem}>
                                <input
                                    disabled={currentFilterVids.includes(itemFilter.slug) || filterVids.includes(itemFilter.slug) ? false : true}
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
                        {itemsFilterColors && itemsFilterColors.map((itemFilter, index) =>
                            <div key={index} className={cl.filterItem}>
                                <input
                                    disabled={currentFilterColors.includes(itemFilter.slug) || filterColors.includes(itemFilter.slug) ? false : true}
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
                        {itemsFilterSizes && itemsFilterSizes.map((itemFilter, index) =>
                            <div key={index} className={cl.filterItem}>
                                <input
                                    disabled={currentFilterSizes.includes(itemFilter.slug) || filterSizes.includes(itemFilter.slug) ? false : true}
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

                <div className={cl.currentFilters}>
                    {itemsFilterVids && itemsFilterVids.filter((item) => filterVids.includes(item.slug)).map((item) =>
                        <button
                            onClick={() => dispatch(changeVids(item.slug))}
                        >
                            <p>{item.name}</p>
                            <CurrentFilterDelete />
                        </button>
                    )}
                    {itemsFilterColors && itemsFilterColors.filter((item) => filterColors.includes(item.slug)).map((item) =>
                        <button
                            onClick={() => dispatch(changeColors(item.slug))}
                        >
                            <p>{item.name}</p>
                            <CurrentFilterDelete />
                        </button>
                    )}
                    {itemsFilterSizes && itemsFilterSizes.filter((item) => filterSizes.includes(item.slug)).map((item) =>
                        <button
                            onClick={() => dispatch(changeSizes(item.slug))}
                        >
                            <p>{item.name}</p>
                            <CurrentFilterDelete />
                        </button>
                    )}
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
                                    <InnerImageZoom
                                        src={item.images[0]}
                                        zoomSrc={item.bigImages[0]}
                                        zoomType="hover"
                                        zoomPreload={true}
                                        zoomScale={0.55}
                                    />
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
                                <span>товары не найдены</span>
                                <p>К сожалению, товары по вашему запросу не найдены.<br />Пожалуйста, скорректируйте параметры в запросе.</p>
                            </div>
                    }
                </div>

                <div className={cl.load3D}>
                    <ButtonInCatalog onClick={() => handleDownload(models_3D)}>скачать 3D Модель</ButtonInCatalog>
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
            {isLoading
                ? null
                : items.length
                    ? null
                    : <>
                        <div className={cl.noProductsDecor1}></div>
                        <div className={cl.noProductsDecor2}></div>
                    </>
            }
        </div>
    )
}

export default Catalog