import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




type bannerType = {
    src: string,
    id: number
}

const Banners = (props: any) => {
    return (
        <Swiper slidesPerView={1}
                             spaceBetween={30}
                             loop={true}
                             pagination={{
                                 clickable: true
                             }}
                             autoplay={{
                                 delay: 1500,
                                 disableOnInteraction: true
                             }}
                             modules={[Pagination, Autoplay]}
                             className="BannerSwiper">
            {
                props.banners.map((banner: bannerType) => {
                    return <SwiperSlide>
                               <img key={banner.id} src={`${process.env.PUBLIC_URL}/assets${banner.src}`} alt=""/>
                           </SwiperSlide>;})
            }
        </Swiper>
    );
}

export default Banners;
