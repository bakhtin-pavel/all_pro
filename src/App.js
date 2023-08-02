import React from 'react';
import './styles/App.css';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Installation from './pages/Installation';
import AboutUs from './pages/AboutUs';
import Catalog from './pages/Catalog';
import WhereToBuy from './pages/WhereToBuy';
import Contacts from './pages/Contacts'
import ProductPlinth from './pages/ProductPlinth';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path='installation' element={<Installation />} />
                    <Route path='aboutus' element={<AboutUs />} />
                    <Route path='catalog' element={<Catalog />} />
                    <Route path='catalog/:slug' element={<ProductPlinth />} />
                    <Route path='wheretobuy' element={<WhereToBuy />} />
                    <Route path='contacts' element={<Contacts />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;