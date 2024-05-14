import React, { useEffect, useState } from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Home = () => {
    const [products, setProducts] = useState({})


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setProducts(result)
            });
    }, [])
    return (
        <div className="home container mx-auto mt-7 flex flex-wrap justify-center gap-5">
            {
                products?.products?.map((product) =>
                    <div
                        key={product.id}
                        className="card w-[25%] border border-orange-400 rounded-lg overflow-hidden h-fit">
                        <div className="card-img  h-[50%]">
                            <img
                                className="h-[100%] mx-auto"
                                src={product.thumbnail} alt="product-img" />
                        </div>
                        <div className="card-body p-2 bg-orange-300">
                            <h2 className="card-title">name: {product.title}</h2>
                            <p className="card-text">price: {product.price}</p>
                            <p className="card-text">rating: {product.rating}</p>
                            <div className="card-actions flex justify-between">
                                <button className="bg-orange-600 p-2 mt-5 text-black rounded-md">
                                    show more
                                </button>
                                <button className="bg-blue-400 p-2 mt-5 text-black rounded-md">
                                    <MdOutlineAddShoppingCart size={25} />
                                </button>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Home








