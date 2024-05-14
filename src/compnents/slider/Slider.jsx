import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css"
const SliderComp = ({ product }) => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        // cssEase: "linear"
    };
    return (
        <div className=" w-[100%] md:w-[50%]">
            <Slider {...settings}>
                {
                    product?.images.map((img) => {
                        return (
                            <>
                                <div>
                                    <img src={img} alt="" />
                                </div>
                            </>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default SliderComp