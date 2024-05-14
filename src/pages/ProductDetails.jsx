import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import SliderComp from '../compnents/slider/Slider';

const ProductDetails = ({ count, setCount }) => {


  const { id } = useParams()
  const [product, setProduct] = useState()


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then((result) => {
        // console.log(result);
        setProduct(result)
      });
  }, [id])
  // add to card
  const addToCard = () => {
    setCount(count + 1)

  }

  return (
    <div className="container mx-auto mt-5">

      <div className="card border border-orange-400 md:flex gap-4">
        <SliderComp product={product} />
        <div className="card-body mt-10 md:mt-0">
          <h2 className="card-title">
            <span className="capitalize text-lg font-semibold">name : </span>{product?.title}
          </h2>
          <p className="card-text">
            <span className="capitalize text-lg font-semibold">description : </span>{product?.description}
          </p>
          <p className="card-text">
            <span className="capitalize text-lg font-semibold">price : </span>{product?.price}
          </p>
          <p className="card-text">
            <span className="capitalize text-lg font-semibold">rating : </span>{product?.rating}
          </p>
          <p className="card-text">
            <span className="capitalize text-lg font-semibold">stock : </span>{product?.stock}
          </p>
          <p className="mt-4">
            <span className="discount bg-red-600 text-white p-3 font-bold rounded-full">
              <span className="capitalize">discount</span>
              <span>{product?.discountPercentage}% off</span>
            </span>
          </p>
          <button
            onClick={addToCard}
            className="bg-blue-400 p-2 mt-5 text-black rounded-md">
            <MdOutlineAddShoppingCart size={25} />
          </button>

        </div>
      </div>

    </div>
  )
}

export default ProductDetails