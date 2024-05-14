import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="flex gap-5 capitalize">
                <li className="cursor-pointer hover:text-orange-200 text-lg">home</li>
                <li className="cursor-pointer hover:text-orange-200 text-lg">about</li>
                <li className="cursor-pointer hover:text-orange-200 text-lg">services</li>
                <li className="cursor-pointer hover:text-orange-200 text-lg">product</li>
                <li className="cursor-pointer hover:text-orange-200 text-lg">contact</li>
            </ul>
        </nav>
    )
}

export default Navbar