import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="header bg-orange-400 sticky top-0">
            <div className="container mx-auto h-20 flex justify-between items-center">
                <div className="logo bg-orange-600 px-5 py-1 rounded-lg cursor-pointer">
                    <span className="text-3xl">shop. </span>
                    <span className="text-orange-200">online</span>
                </div>
                <Navbar />
                <div className="searchBar">
                    <input
                        className="bg-transparent border border-orange-200 w-96 rounded-lg placeholder-black p-2 outline-none"
                        type="text" placeholder="Search..." />
                </div>
            </div>
        </div>
    )
}

export default Header