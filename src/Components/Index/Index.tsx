import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Banners from "./Banners/Banners";
import PopularProduct from "./PopularProduct/PopularProduct";
import Promotion from "./Promotion/Promotion";
import Advantages from "./Advantages/Advantages";




type bannerType = {
    src: string,
    id: number
}
let banners_all: Array<bannerType> = [
    {
        src: "/banners/1.png",
        id: 1
    },
    {
        src: "/banners/2.png",
        id: 2
    },
    {
        src: "/banners/3.png",
        id: 3
    },
    {
        src: "/banners/4.png",
        id: 4
    },
    {
        src: "/banners/5.png",
        id: 5
    },
    {
        src: "/banners/6.png",
        id: 6
    },
    {
        src: "/banners/7.png",
        id: 7
    },
    {
        src: "/banners/8.png",
        id: 8
    }
]

const Index = (props: any) => {


    return (
        <main>
            <Banners banners={banners_all}/>
            <PopularProduct/>
            <Promotion banners={banners_all}/>
            <Advantages/>
        </main>
    );
}

export default Index;
