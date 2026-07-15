import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCardSkeleton } from ".";
import "swiper/css";

const ProductsSliderSkeleton = ({ title }) => {
    return (
        <section className="products_sec section skeleton-loader">
            <div className="container">

                <div className="sec-head mb-5 border-bottom pb-4">
                    <h2 className="fw-bold color_primary mb-2 text-uppercase">
                        {title}
                    </h2>

                    <div className="skeleton skeleton-subheading"></div>
                </div>

                <Swiper
                    className="mySwiper"
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {[1,2,3,4,5].map((item) => (
                        <SwiperSlide key={item}>
                            <ProductCardSkeleton />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default ProductsSliderSkeleton;