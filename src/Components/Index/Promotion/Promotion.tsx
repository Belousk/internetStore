import React from 'react';
import style from "./Promotion.module.css";



type bannerType = {
    src: string,
    id: number
}

const Promotion = (props: any) => {


    return (

    <div className="wrapper" id='promotion'>
        <div className={style.promotion}>
            <h2 className={style.promotion_header}>Акции</h2>
            <div className={style.grid}>
                {
                props.banners.map(
                    (banner: bannerType)=>{
                        return <a href=""><img key={banner.id} src={`${process.env.PUBLIC_URL}/assets${banner.src}`} alt=""/></a>
                    }
                )
                }

            </div>
        </div>
    </div>
    );
}

export default Promotion;
