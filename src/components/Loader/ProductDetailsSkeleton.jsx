import React from "react";

const ProductDetailsSkeleton = () => {
    return (
        <section className="product_det section skeleton-loader product_det_skeleton">
            <div className="container">

                <div className="row align-items-start">

                    <div className="col-lg-6">

                        <div className="img_box">

                            <div className="lg_img mb-4">
                                <div className="skeleton img-placeholder"></div>
                            </div>

                            <div className="sm_imgs d-flex">
                                {[1,2,3].map((item)=>(
                                    <div
                                        key={item}
                                        className="skeleton thumb-placeholder"
                                    ></div>
                                ))}
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="txt_box">

                            <div className="skeleton title"></div>

                            <div className="stars">
                                {[1,2,3,4,5].map(item=>(
                                    <div
                                        key={item}
                                        className="skeleton star"
                                    ></div>
                                ))}
                            </div>

                            <div className="skeleton price"></div>

                            <div className="description">

                                <div className="skeleton line"></div>
                                <div className="skeleton line"></div>
                                <div className="skeleton line short"></div>

                            </div>

                            <div className="info mt-4">

                                <div className="skeleton info-line"></div>
                                <div className="skeleton info-line"></div>
                                <div className="skeleton info-line"></div>

                            </div>

                            <div className="skeleton stock mt-4"></div>

                            <div className="actions mt-4">

                                <div className="skeleton cart-btn"></div>

                                <div className="skeleton icon-btn"></div>

                                <div className="skeleton icon-btn"></div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProductDetailsSkeleton;