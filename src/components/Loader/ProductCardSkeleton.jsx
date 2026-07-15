import React from "react";

const ProductCardSkeleton = () => {
    return (
        <div className="skeleton-loader">
            <div className="prod_card">

                <div className="img_box">
                    <div className="skeleton skeleton-img"></div>
                </div>

                <div className="card-body">

                    <div className="skeleton skeleton-name"></div>

                    <div className="stars">
                        {[1,2,3,4,5].map((item) => (
                            <div key={item} className="skeleton skeleton-star"></div>
                        ))}
                    </div>

                    <div className="skeleton skeleton-price"></div>

                </div>

            </div>
        </div>
    );
};

export default ProductCardSkeleton;