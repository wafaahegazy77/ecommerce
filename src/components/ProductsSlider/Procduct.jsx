import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Procduct = ({item}) => {
    return (
        <div className='prod_card'>
            <div className="img_box">
                <Link to={`/products/${item.id}`}>
                    <img src={item.images[0]} className='secImg' alt="" />
                </Link>
                    
                <div className="actions-butns">
                    <span className='act_butn'>
                        <BsCart2  />
                    </span>
                    <span className='act_butn'>
                        <IoHeartOutline  />
                    </span>
                    <span className='act_butn'>
                        <IoShareSocialOutline  />
                    </span>
                </div>
            </div>
            <div className="card-body">
                <h5 className='name'> {item.title} </h5>
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                </div>
                <p className='price'> ${item.price} </p>

            </div>
        </div>
    )
}

export default Procduct
