    import React, { useRef, useState } from 'react';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import { Pagination,Autoplay } from 'swiper/modules';
    import './_Hero.scss'
    import { Link } from 'react-router-dom';
    import banner1 from "../../img/banner_Hero1.jpg";
    import banner2 from "../../img/banner_Hero2.jpg";
    import banner3 from "../../img/banner_Hero3.jpg";

    const Hero = () => {
        return (
            <>
                <header className='header section py-5 '>
                    <div className="container">
                        <div className="inner">
                            <Swiper         
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination]}
                                className="mySwiper"
                                loop={true}
                                // speed={1000}
                            >
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="col-lg-6">
                                            <div className="txt_box">
                                                <h5 className='subtitle color_secondary'> Introducing the new </h5>
                                                <h1 className='title mt-3 mb-3 color_primary fw-bold  fsz-55 '>
                                                    Microsofr X-Box <br/> 360 Controller
                                                </h1>
                                                <p className='p'>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque aut optio repellendus illum a dolor molestias quas voluptatum velit dolores reiciendis id, accusamus libero iure, saepe aperiam! Corrupti, id nam!
                                                </p>
                                                <Link to="/" className='butn primary_butn mt-4 '> Shop Now </Link>
                                            </div>
                                        </div>
                                        <img src={banner2} className='bg' alt="Hero Banner" />
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="col-lg-6">
                                            <div className="txt_box">
                                                <h5 className='subtitle color_secondary'> Introducing the new </h5>
                                                <h1 className='title mt-3 mb-3 color_primary fw-bold  fsz-55 '>
                                                    Microsofr X-Box <br/> 360 Controller
                                                </h1>
                                                <p className='p'>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque aut optio repellendus illum a dolor molestias quas voluptatum velit dolores reiciendis id, accusamus libero iure, saepe aperiam! Corrupti, id nam!
                                                </p>
                                                <Link to="/" className='butn primary_butn mt-4 '> Shop Now </Link>
                                            </div>
                                        </div>
                                        <img src={banner1} className='bg' alt="Hero Banner" />
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="col-lg-6">
                                            <div className="txt_box">
                                                <h5 className='subtitle color_secondary'> Introducing the new </h5>
                                                <h1 className='title mt-3 mb-3 color_primary fw-bold  fsz-55 '>
                                                    Microsofr X-Box <br/> 360 Controller
                                                </h1>
                                                <p className='p'>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque aut optio repellendus illum a dolor molestias quas voluptatum velit dolores reiciendis id, accusamus libero iure, saepe aperiam! Corrupti, id nam!
                                                </p>
                                                <Link to="/" className='butn primary_butn mt-4 '> Shop Now </Link>
                                            </div>
                                        </div>
                                        <img src={banner3} className='bg' alt="Hero Banner" />
                                    </div>

                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </header>
            </>
        )
    }

    export default Hero
