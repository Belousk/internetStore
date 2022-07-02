import React from 'react';
import style from "./PopularProduct.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


type productType = {
    src: string,
    id: number,
    name: string,
    description: string,
    price: number,
    weight: number
}

let popularProducts: Array<productType> = [
    {
        src: '/rolls/канада с омлетом.jpg',
        id: 1,
        name: "Канада с омлетом",
        description: 'Сыр, омлет, угорь, кунжут',
        price: 320,
        weight: 250
    },
    {
        src: '/rolls/император с лососем.jpg',
        id: 2,
        name: "Император с лососем",
        description: 'Рис, нори, сыр сливочный, лосось, укроп',
        price: 289,
        weight: 250
    },
    {
        src: '/rolls/филадельфия шеф.jpg',
        id: 3,
        name: "Филадельфия шеф",
        description: 'Рис, нори, сыр сливочный, лосось',
        price: 329,
        weight: 250
    },
    {
        src: '/rolls/запеченный сяке терияки.jpg',
        id: 4,
        name: "запеченный сяке терияки",
        description: 'Рис, нори, сыр сливочный, лосось под терияки, огурец, соус спайс, пармезан',
        price: 299,
        weight: 250
    },
    {
        src: '/sets/2022(720x500).jpg',
        id: 5,
        name: "Сет «2022»",
        description: 'Горячий сяке хот, Запеченный сяке терияки, Дракон, Филадельфия с креветками, Канада с омлетом, Император с лососем, Сливочный с угрём, Ролл ред краб, Ролл Филадельфия шеф',
        price: 2020,
        weight: 2340
    },

]

const PopularProduct = (props: any) => {

    let settings = {slidesToShow: 4,
        slidesPerView: 1,
        variableWidth: false,
        arrows: true,
        infinite: false,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1
                }
            }
        ]}
    return (

            <div className={style.wrapper_popular}>
                <div className='popular'>
                    <h2>ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
                    <Slider {...settings} className="popular_items">

                        {
                            popularProducts.map((product: productType) =>
                            <div className="item">
                                <a href="#" className="popup_link">
                                    <img src={`${process.env.PUBLIC_URL}/assets${product.src}`} alt=""/>
                                </a>
                                <h3>{product.name}</h3>
                                <div className="description">
                                    <p>{product.description}</p>
                                    <div className="price">
                                        <div><span> {product.weight} </span>гр. <br/> <span className="item_price"> {product.price} </span>&#8381
                                        </div>
                                        <a href="#" className="add_to_cart" data-id="WLppifoS">в корзину</a>
                                    </div>
                                </div>
                            </div>)
                        }
                    </Slider>
                </div>
            </div>

    );
}

export default PopularProduct;
