import React from 'react'
import logo from '../../img/logo.png'
import './_navbar.scss'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";


const TopNav = () => {
    return (
        <>
            <div className="top_nav">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-3 col-6">
                            <Link to="/">
                                <img src={logo} className='logo' alt='logo' />
                            </Link>
                        </div>
                        <div className="col-lg-5 order_md_3">
                            <div className="search_box">
                                <form>
                                    <input className='form-control' placeholder='Search for products' />
                                    <button className='submit_butn' type='submit'> <CiSearch /> </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 order_md_2 ">
                            <div className="nav_butns_end d-flex align-items-center justify-content-end">
                                <div className='icon'>
                                    <IoHeartOutline  />
                                    <span className="count">  0 </span>
                                </div>
                                <div className='icon'>
                                    <BsCart2  />
                                    <span className="count">  0 </span>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav
