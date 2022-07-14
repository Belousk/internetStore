import React from 'react';
import {allProducts} from './Data'
import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Header from "./Components/Header/Header";
import Rolls from "./Components/Rolls/Rolls";
import Index from "./Components/Index/Index";
import Footer from "./Components/Footer/Footer";
import Product from "./Components/Products/Product";

type categoryType = {
    category: string,
    link: string
}
let categories: categoryType[] = [
    {
        category: 'СЕТЫ',
        link:'/internetStore/sets'
    },
    {
        category: 'РОЛЛЫ',
        link: "/internetStore/rolls"
    },
    {
        category: 'СУШИ',
        link: '/internetStore/sushi'
    },
    {
        category: 'ПИЦЦА',
        link: '/internetStore/pizza'
    },
    {
        category: 'САЛАТЫ',
        link: '/internetStore/salads'
    },
    {
        category: 'БУРГЕРЫ',
        link: '/internetStore/burgers'
    },
    {
        category: 'ВОКИ',
        link: '/internetStore/woks'
    },
    {
        category: 'СУПЫ',
        link: '/internetStore/soups'
    },
    {
        category: 'ГАРНИРЫ',
        link: '/internetStore/garnish'
    },
    {
        category: 'НАПИТКИ',
        link: '/internetStore/drinks'
    }
]


function App() {
    return (
        <div className="App">
            <div>
                <Header categories={categories}/>
                <Routes>
                    <Route path="/internetStore/" element={<Index/>}/>
                    <Route path="/internetStore/rolls/*" element={<Rolls />}/>
                    <Route path="/internetStore/sushi/" element={<Product productsType={'Суши'} products={allProducts.sushi} />}/>
                    <Route path="/internetStore/pizza/" element={<Product productsType={'Пицца'} products={allProducts.pizza} />}/>
                    <Route path="/internetStore/woks/" element={<Product productsType={'Воки'} products={allProducts.woks} />}/>
                    <Route path="/internetStore/sets/" element={<Product productsType={'Сеты'} products={allProducts.sets} />}/>
                    <Route path="/internetStore/salads/" element={<Product productsType={'Салаты'} products={allProducts.salads} />}/>
                    <Route path="/internetStore/burgers/" element={<Product productsType={'Бургеры'} products={allProducts.burgers} />}/>
                    <Route path="/internetStore/soups/" element={<Product productsType={'Супы'} products={allProducts.soups} />}/>
                    <Route path="/internetStore/garnish/" element={<Product productsType={'Гарниры'} products={allProducts.garnish} />}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
