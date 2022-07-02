import React from 'react';
import style from './Products.module.css';


type productType = {
    name: string,
    description: string,
    src: string,
    price: number,
    weight: number,
};


let sushi: Array<productType> =[
    {
        name: 'С лососем',
        description: 'Рис, лосось',
        src: '/sushi/с лососем.jpg',
        price: 80,
        weight: 60,
    },
    {
        name: 'С угрем',
        description: 'Рис, угорь',
        src: '/sushi/с угрем.jpg',
        price: 80,
        weight: 50,
    },
    {
        name: 'С креветками',
        description: 'Рис, креветки',
        src: '/sushi/с креветками.jpg',
        price: 80,
        weight: 50,
    },
    {
        name: 'С тунцом',
        description: 'Рис, тунец',
        src: '/sushi/с тунцом.jpg',
        price: 79,
        weight: 50,
    },
    {
        name: 'Острый с лососем',
        description: 'Рис, лосось, спайс соус',
        src: '/sushi/острый с лососем.jpg',
        price: 89,
        weight: 80,
    },
    {
        name: 'Острый с угрем',
        description: 'Рис, угорь, спайс соус',
        src: '/sushi/острый с угрем.jpg',
        price: 89,
        weight: 70,
    },
    {
        name: 'Острый с креветками',
        description: 'Рис, креветки спайс соус',
        src: '/sushi/острый с креветками.jpg',
        price: 89,
        weight: 70,
    },
    {
        name: 'Острый с тунцом',
        description: 'Рис, тунец, спайс соус',
        src: '/sushi/острый с тунцом.jpg',
        price: 89,
        weight: 70,
    },
];

const Sushi = (props: any) => {
    return (
        <div className="wrapper">
            <h2 className={style.sushi_header}>
                Суши Казань с доставкой
            </h2>
            <div className="items">
                {
                    sushi.map((product: productType) => {
                        return <div className="item">
                            <a href="#" className="popup_link"><img src={`${process.env.PUBLIC_URL}/assets${product.src}`} alt=""/></a>
                            <h3>{product.name}</h3>
                            <div className="description">
                                <p>{product.description}</p>
                                <div className="price">
                                    <div><span>{product.weight}</span>гр. <br/> <span className="item_price"> {product.price} </span>₽</div>
                                    <a href="#" className="add_to_cart" data-id="PP6Chic9">в корзину</a>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    );
}

export default Sushi;
