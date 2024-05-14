import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa";

const Header = ({ count, setCount }) => {
    return (
        <div className="header bg-orange-400 sticky top-0">
            <div className="container mx-auto h-20 flex justify-around md:justify-between items-center">
                <Link to="/">
                    <div className="logo bg-orange-600 px-5 py-1 rounded-lg cursor-pointer">
                        <span className="text-3xl">shop. </span>
                        <span className="text-orange-200">online</span>
                    </div>
                </Link>
                <Navbar />
                <div className="searchBar">
                    <input
                        className="bg-transparent border border-orange-200 w-40 md:w-96 rounded-lg placeholder-black p-2 outline-none"
                        type="text" placeholder="Search..." />
                </div>
                <div className="shoppingCard">
                    <Link to="/product/card-page">
                        <span className="bg-orange-600 px-2 rounded-full">
                            {count}
                        </span>
                    </Link>
                    <FaShoppingBasket size={25} />
                </div>
            </div>
        </div>
    )
}

export default Header