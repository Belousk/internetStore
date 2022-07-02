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
        link:'sets'
    },
    {
        category: 'РОЛЛЫ',
        link: "rolls"
    },
    {
        category: 'СУШИ',
        link: 'sushi'
    },
    {
        category: 'ПИЦЦА',
        link: 'pizza'
    },
    {
        category: 'САЛАТЫ',
        link: 'salads'
    },
    {
        category: 'БУРГЕРЫ',
        link: 'burgers'
    },
    {
        category: 'ВОКИ',
        link: 'woks'
    },
    {
        category: 'СУПЫ',
        link: 'soups'
    },
    {
        category: 'ГАРНИРЫ',
        link: 'garnish'
    },
    {
        category: 'НАПИТКИ',
        link: 'drinks'
    }
]


function App() {
    return (
        <div className="App">
            <div>
                <Header categories={categories}/>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/rolls/*" element={<Rolls />}/>
                    <Route path="/sushi/" element={<Product productsType={'Суши'} products={allProducts.sushi} />}/>
                    <Route path="/pizza/" element={<Product productsType={'Пицца'} products={allProducts.pizza} />}/>
                    <Route path="/woks/" element={<Product productsType={'Воки'} products={allProducts.woks} />}/>
                    <Route path="/sets/" element={<Product productsType={'Сеты'} products={allProducts.sets} />}/>
                    <Route path="/salads/" element={<Product productsType={'Салаты'} products={allProducts.salads} />}/>
                    <Route path="/burgers/" element={<Product productsType={'Бургеры'} products={allProducts.burgers} />}/>
                    <Route path="/soups/" element={<Product productsType={'Супы'} products={allProducts.soups} />}/>
                    <Route path="/garnish/" element={<Product productsType={'Гарниры'} products={allProducts.garnish} />}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
