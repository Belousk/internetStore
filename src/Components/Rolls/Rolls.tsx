import React from 'react';
import style from './Rolls.module.css';
import Types from "./Types/Types";
import {Route, Routes} from "react-router-dom";
import Roll from "./Roll/Roll";


type productType = {
    name: string,
    description: string,
    src: string,
    price: number,
    weight: number,
    type: string
};


let rolls: Array<productType> = [
    {
        name: 'Чиз сяке',
        description: 'Лосось, огурец, сыр',
        src: '/rolls/чиз сяке.jpg',
        price: 329,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Канада',
        description: 'Сыр, авокадо, угорь, кунжут',
        src: '/rolls/канада.jpg',
        price: 319,
        weight: 260,
        type: 'cold'
    },
    {
        name: 'Канада с лососем',
        description: 'Сыр, лосось, авокадо, угорь, кунжут',
        src: '/rolls/канада с лососем.jpg',
        price: 365,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Канада с креветкой',
        description: 'Сыр, авокадо, креветка, кунжут',
        src: '/rolls/канада с креветкой.jpg',
        price: 359,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Канада с омлетом',
        description: 'Сыр, омлет, угорь, кунжут',
        src: '/rolls/канада с омлетом.jpg',
        price: 310,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Кунсей хот',
        description: 'Лосось х/к, сыр',
        src: '/rolls/кунсей хот.jpg',
        price: 269,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Тайка',
        description: 'Креветки, лосось, спайс, кунжут, тобико',
        src: '/rolls/тайка.jpg',
        price: 299,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Татмикс',
        description: 'Сыр, угорь, огурец, лосось х/к',
        src: '/rolls/татмикс.jpg',
        price: 295,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Татплюс',
        description: 'Сыр, лосось х/к, огурец',
        src: '/rolls/татплюс.jpg',
        price: 259,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Пантера',
        description: 'Краб, огурец, майонез, тобико черный',
        src: '/rolls/пантера.jpg',
        price: 229,
        weight: 240,
        type: 'cold'
    },
    {
        name: 'Сунами',
        description: 'Сыр, лосось, огурец, тобико, соус спайс',
        src: '/rolls/сунами.jpg',
        price: 345,
        weight: 290,
        type: 'cold'
    },
    {
        name: 'Мама Нори',
        description: 'Сыр, креветка, салат, огурец',
        src: '/rolls/мама нори.jpg',
        price: 295,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Дружный',
        description: 'Угорь, лосось, тунец, майонез, огурец',
        src: '/rolls/дружный.jpg',
        price: 320,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Калифорния',
        description: 'Краб, авокадо, огурец, тобито, майонез',
        src: '/rolls/калифорния.jpg',
        price: 249,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Идеал',
        description: 'Креветка, тобико, майонез',
        src: '/rolls/идеал.jpg',
        price: 259,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Калифорния с лососем',
        description: 'Огурец, лосось, масаго, майонез',
        src: '/rolls/калифорния с лососем.jpg',
        price: 279,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Шинаки',
        description: 'Сыр, лосось, огурец, тобико',
        src: '/rolls/шинаки.jpg',
        price: 339,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Филадельфия чиз',
        description: 'Лосось, огурец, сыр',
        src: '/rolls/филадельфия чиз.jpg',
        price: 339,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Канада чиз',
        description: 'Угорь, сыр сливочный, огурец, соус унаги, кунжут',
        src: '/rolls/канада чиз.jpg',
        price: 329,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Текои',
        description: 'Сыр, угорь, огурец, кунжут, тобико',
        src: '/rolls/текои.jpg',
        price: 330,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Аризона',
        description: 'Краб, огурец, тобико, сыр, кунжут',
        src: '/rolls/аризона.jpg',
        price: 230,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Томаго',
        description: 'Сыр, угорь, омлет, кунжут',
        src: '/rolls/томаго.jpg',
        price: 259,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Маями',
        description: 'Креветки в темпуре, огурец, масаго, сыр',
        src: '/rolls/маями.jpg',
        price: 255,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Премиум',
        description: 'Тобико черный, сыр, огурец, лосось',
        src: '/rolls/премиум.jpg',
        price: 280,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Сяке хот',
        description: 'Лосось, спайс, сыр сливочный',
        src: '/rolls/сяке хот.jpg',
        price: 289,
        weight: 290,
        type: 'cold'
    },
    {
        name: 'Мидии хот',
        description: 'Мидии, спайс, сыр, тобико, огурец',
        src: '/rolls/мидии хот.jpg',
        price: 259,
        weight: 290,
        type: 'cold'
    },
    {
        name: 'Горячий с креветкой',
        description: 'Нори, креветка, соус спайс, сливочный сыр, огурец, темпура',
        src: '/rolls/горячий с креветкой.jpg',
        price: 280,
        weight: 250,
        type: 'hot'
    },
    {
        name: 'Горячий с лососем',
        description: 'Лосось, соус спайс, сливочный сыр, огурец, темпура',
        src: '/rolls/горячий с лососем.jpg',
        price: 280,
        weight: 250,
        type: 'hot'
    },
    {
        name: 'Горячий с угрем',
        description: 'Нори, угорь, сливочный сыр, огурец, темпура',
        src: '/rolls/горячий с угрем.jpg',
        price: 279,
        weight: 250,
        type: 'hot'
    },
    {
        name: 'Горячий цезарь',
        description: 'Курица х/к, соус цезарь, лисья салата, помидор, темпура',
        src: '/rolls/горячий цезарь.jpg',
        price: 269,
        weight: 250,
        type: 'hot'
    },
    {
        name: 'Запеченный с лососем',
        description: 'Сыр, лосось, моцарелла, спайс',
        src: '/rolls/запеченный с лососем.jpg',
        price: 259,
        weight: 250,
        type: 'baked'
    },
    {
        name: 'Запеченный с креветками',
        description: 'Сыр, креветки, моцарелла, спайс',
        src: '/rolls/запеченный с креветками.jpg',
        price: 259,
        weight: 250,
        type: 'baked'
    },
    {
        name: 'Запеченный с угрем',
        description: 'Сыр сливочный, угорь, моцарелла, спайс',
        src: '/rolls/запеченный с угрем.jpg',
        price: 259,
        weight: 250,
        type: 'baked'
    },
    {
        name: 'Горячий с курицей',
        description: 'Курица, спайс, болгарский перец, огурец',
        src: '/rolls/горячий с курицей.jpg',
        price: 110,
        weight: 300,
        type: 'hot'
    },
    {
        name: 'Ролл с авокадо',
        description: 'Нори, авокадо, кунжут',
        src: '/rolls/ролл с авокадо.jpg',
        price: 279,
        weight: 110,
        type: 'cold'
    },
    {
        name: 'Ролл с креветкой',
        description: 'Нори, креветка',
        src: '/rolls/ролл с креветкой.jpg',
        price: 110,
        weight: 110,
        type: 'cold'
    },
    {
        name: 'Цезарь с креветкой',
        description: 'Соус цезарь, креветка, салат, помидор',
        src: '/rolls/цезарь с креветкой.jpg',
        price: 265,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Цезарь с курицей',
        description: 'Соус цезарь, курица, салат, помидор',
        src: '/rolls/цезарь с курицей.jpg',
        price: 245,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Токио',
        description: 'Сыр, краб, огурец, лосось, соус спайс',
        src: '/rolls/токио.jpg',
        price: 329,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Сливочный с курицей',
        description: 'Сливочный сыр, лосось, огурец, кунжут',
        src: '/rolls/сливочный с курицей.jpg',
        price: 239,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Сливочный с лососем',
        description: 'Сливочный сыр, лосось, огурец, кунжут',
        src: '/rolls/сливочный с лососем.jpg',
        price: 259,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Сливочный с угрем',
        description: 'Сливочный сыр, угорь авокадо, кунжут',
        src: '/rolls/сливочный с угрем.jpg',
        price: 259,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Ролл с курицей',
        description: 'Курица, огурец, кунжут, майонез',
        src: '/rolls/ролл с курицей.jpg',
        price: 210,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Сливочная калифорния',
        description: 'Сыр, авокадо, краб, огурец, тобико',
        src: '/rolls/сливочная калифорния.jpg',
        price: 249,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Эби маки',
        description: 'Сыр, креветка, огурец',
        src: '/rolls/эби маки.jpg',
        price: 239,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Шах',
        description: 'Лосось, креветка, майонез, угорь, огурец, кунжут',
        src: '/rolls/шах.jpg',
        price: 359,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Японо',
        description: 'Лосось, угорь, огурец, сыр, тобико',
        src: '/rolls/японо.jpg',
        price: 339,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Филадельфия классик',
        description: 'Сыр, авокадо, лосось',
        src: '/rolls/филадельфия классик.jpg',
        price: 359,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Филадельфия с огурцом',
        description: 'Сыр, огурец, лосось',
        src: '/rolls/филадельфия с огурцом.jpg',
        price: 239,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Филадельфия гранд',
        description: 'Сыр, авокадо, лосось, икра',
        src: '/rolls/филадельфия гранд.jpg',
        price: 369,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Филадельфия с креветкой',
        description: 'Сыр, лосось, креветка',
        src: '/rolls/филадельфия с креветкой.jpg',
        price: 319,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Фикс с яблоком',
        description: 'Лосось, яблоко, сыр',
        src: '/rolls/фикс с яблоком.jpg',
        price: 259,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Филадельфия запеченная',
        description: 'Сыр, авокадо, терияки, кунжут',
        src: '/rolls/филадельфия запеченная.jpg',
        price: 279,
        weight: 250,
        type: 'baked'
    },
    {
        name: 'Сливочный с авокадо',
        description: 'Сыр, авокадо, кунжут',
        src: '/rolls/сливочный с авокадо.jpg',
        price: 230,
        weight: 250,
        type: 'cold'
    },
    {
        name: 'Ролл с лососем',
        description: 'Рис, нории, лосось',
        src: '/rolls/ролл с лососем.jpg',
        price: 110,
        weight: 110,
        type: 'cold'
    },
    {
        name: 'Ролл с огурцом',
        description: 'Рис, нори, огурец',
        src: '/rolls/ролл с огурцом.jpg',
        price: 110,
        weight: 100,
        type: 'cold'
    },
    {
        name: 'Ролл с тунцом',
        description: 'Рис, нори, тунец',
        src: '/rolls/ролл с тунцом.jpg',
        price: 110,
        weight: 100,
        type: 'cold'
    },
    {
        name: 'Ролл с угрем',
        description: 'Рис, нори, угорь',
        src: '/rolls/ролл с угрем.jpg',
        price: 110,
        weight: 100,
        type: 'cold'
    },
    {
        name: 'Ролл спайс с креветкой',
        description: 'Рис, нори, креветка, соус спайс',
        src: '/rolls/ролл спайс с креветкой.jpg',
        price: 100,
        weight: 110,
        type: 'cold'
    }
]




const Rolls = (props: any) => {
    return (
       <div className="wrapper">
            <h2 className={style.roll_header}>
                Роллы Казань с доставкой
            </h2>
            <Types/>
           <Routes>
                <Route path="hot" element={<Roll rolls={rolls.filter( (roll: productType) => roll.type === "hot")}/>}/>
                <Route path="cold" element={<Roll rolls={rolls.filter( (roll: productType) => roll.type === "cold")}/>}/>
                <Route path="baked" element={<Roll rolls={rolls.filter( (roll: productType) => roll.type === "baked")}/>}/>
                <Route path="/" element={<Roll rolls={rolls}/>}/>
           </Routes>

       </div>
    );
}

export default Rolls;
