import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './_ProductDetails.scss'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import ProductsSlider from '../../components/ProductsSlider/ProductsSlider';
import Footer from '../../components/Footer/Footer'


function ProductDetails() {

    const {id} = useParams();

    const [product , setProduct] = useState(null);
    const [loading , setLoading] = useState(true);

    const [realProducts , setRealProducts] = useState([]);
    const [loadingRealProducts , setLoadingRealProducts] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setProduct(data);
                setLoading(false);
            }
            catch (error){
                console.log(error)
            }
        }
        fetchProduct()
    }, [id])

    useEffect(() => {
        if(!product) return
        fetch(`https://dummyjson.com/products/category/${product.category}`) 
        .then(res => res.json())
        .then((data)=> {
            setRealProducts(data.products)
        })
        .catch((error) => console.error(error))
        .finally(() =>  setLoadingRealProducts(false) )
    } , [product?.category] )

    console.log(product)
    console.log(realProducts)

    if(loading) return <p> Loading ... </p>
    if(!product) return <p> Product Not Found ... </p>

    return (
        <>
            <section className='product_det section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="img_box">
                                <div className="lg_img mb-4">
                                    <img id='bigImg' src={product.images[0]} alt={product.title} className='secImg' />
                                </div>
                                <div className="sm_imgs d-flex gx-2">
                                    {
                                        product.images.map((img , index) => (
                                            <img key={index} src={img} alt={product.title} className='secImg'   
                                                onClick={() => document.getElementById('bigImg').src = img}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="txt_box">
                                <h2 className='name fw-bold color_primary fsz-45 mb-3'> {product.title} </h2>
                                <div className="stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </div>
                                <h4 className='price fw-bold my-4 '> {product.price} <small className='color_primary'>$</small> </h4>
                                <p className='my-4 fsz-16'>
                                    {product.description }
                                </p>
                                <h6 className=''>
                                    <b> Availability:  </b>
                                    <span className='color_primary'> {product.availabilityStatus } </span>
                                </h6>
                                <h6 className=''>
                                    <b> Brand:  </b>
                                    <span className='color_primary'> {product.brand } </span>
                                </h6>
                                <h6 className=''>
                                    <b> SKU:  </b>
                                    <span className='color_primary'> {product.sku } </span>
                                </h6>
                                <h4 className='fw-bold text-warning mt-4'>
                                    HURRY UP! Only <span> {product.stock } </span> products left in stock.
                                </h4>
                                <div className="d-flex align-items-center mt-4 ">
                                    <button className='butn primary_butn'> 
                                        <LuShoppingCart className='me-2' /> Add To Cart
                                    </button>
                                    <button className='butn primary_border_butn ms-3'> 
                                        <FaRegHeart />
                                    </button>
                                    <button className='butn primary_border_butn ms-3'> 
                                        <IoMdShare    />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {
                loadingRealProducts ? (
                    <p>Loading ... </p>
                ) : (
                    <ProductsSlider
                        key={product.category}
                        title={product.category.replace("-" , " ")}
                        data={realProducts}
                    />
                )
            }

            <Footer/>
        </>
    )
}

export default ProductDetails
