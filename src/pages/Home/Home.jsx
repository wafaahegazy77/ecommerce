import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import ProductsSlider from '../../components/ProductsSlider/ProductsSlider'
import Footer from '../../components/Footer/Footer'
import { ProductsSliderSkeleton } from "../../components/Loader";

const categories = [
    "smartphones",
    "mobile-accessories",
    "laptops",
    "mens-watches",
    "tablets",
]

const Home = () => {

    const [products , setProducts] = useState({});
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const results = await Promise.all(
                    categories.map(async (category) => {
                        const res = await fetch(`https://dummyjson.com/products/category/${category}`);
                        const data = await res.json();
                        return{[category] : data.products}
                    })
                )
                const productsData = Object.assign ({}, ...results)
                setProducts(productsData)
            }
            catch (error) {
                console.error("Error Fetching" , error )
            }
            finally {
                setLoading(false)
            }
        }   
        fetchProducts();
    }, [])

    console.log("Products:", JSON.stringify(products, null, 2))

    return (
        <>
            <Hero/>

            {
                categories.map((category) =>
                    loading ? (
                        <ProductsSliderSkeleton
                            key={category}
                            title={category.replace("-", " ")}
                        />
                    ) : (
                        <ProductsSlider
                            key={category}
                            title={category.replace("-", " ")}
                            data={products[category]}
                        />
                    )
                )
            }

            <Footer/>
           
        </>
    )
}

export default Home
