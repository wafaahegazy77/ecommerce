import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './_ProductsSlider.scss'
import Procduct from './Procduct'


const ProductsSlider = ({data, title}) => {

    return (
        <>
            <section className='products_sec section'>
                <div className="container">
                    <div className="sec-head mb-5 border-bottom pb-4">
                        <h2 className='fw-bold color_primary mb-2 text-uppercase'> {title} </h2>
                        <p className='p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum nesciunt doloremque et dolore. 
                        </p>
                    </div>

                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 2, // mobile
                            },
                            768: {
                                slidesPerView: 3, // tablet
                            },
                            1024: {
                                slidesPerView: 5, // desktop
                            },
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation,Autoplay]}
                        className="mySwiper"
                    >
                        {
                            Array.isArray(data) &&
                            data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Procduct item={item} />
                                </SwiperSlide>
                            ))
                        }

              
                    
                        
                    </Swiper>

                   
                </div>
            </section>
        </>
    )
}

export default ProductsSlider
