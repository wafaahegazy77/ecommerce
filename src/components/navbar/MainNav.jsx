import React, { useEffect, useState } from 'react'
import './_navbar.scss'
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";

const NavLinks = [
    {    title: "Home", link : '/'    } ,
    {    title: "About", link : '/about'    } ,
    {    title: "Accressories", link : '/accressories'    } ,
    {    title: "Blog", link : '/blog'    } ,
    {    title: "Contact", link : '/contact'    } ,
]

const MainNav = () => {
    const [categories , setCategories] = useState([]);
    const location = useLocation();
    
    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        .then((res) => res.json())
        .then ((data) => setCategories(data))
    } , []);

    const [isCategoryOpen , setIsCategoryOpen] = useState(false)

    return (
        <>
            <div className="main_nav">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light py-0 ">
                     {/* category_nav */}
                        <div className="category_nav">
                            <div className="category_butn text-white fw-bold " onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                                <FaBars />
                                <span className='ms-2 '> Browse Categories </span>
                                <IoMdArrowDropdown />
                            </div>

                            <div className={`category_nav_list  ${isCategoryOpen ? "active" : ""}` }>
                                {categories.map((category) => (
                                    <Link key={category.slug} to={category.slug}>  {category.name}  </Link>
                                )) }
                            </div>

                        </div>
                        
                        {/* Toggle Button */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarContent"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
           

                        {/* Navbar Content */}
                        <div className="collapse navbar-collapse" id="navbarContent">


                            {/* Links */}
                            <ul className="navbar-nav mx-auto my-0 mb-lg-0">
                                {
                                    NavLinks.map((item) => (
                                        <li key={item.link} className={location.pathname === item.link ? "nav-item active" : "nav-item"}>
                                            <Link className="nav-link" to={item.link}> {item.title} </Link>
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className="nav_butns_end d-flex align-items-center ">
                                <Link to="/" className="nav_butn d-flex align-items-center ">
                                    <FiUser   /> Login 
                                </Link>
                                <span className='splitor'></span>
                                <Link to="/" className="nav_butn d-flex align-items-center ms-4 ">
                                    <FiUserPlus   /> Register 
                                </Link>


                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default MainNav
