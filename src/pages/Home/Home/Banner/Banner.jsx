import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img from "../../../../assets/images/banner.jpeg";
import img2 from "../../../../assets/images/banner2.jpeg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={img} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={img2} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
      </div>
      <div className="w-[90%] mx-auto flex gap-2">
       <div className="border p-2"><Link to='/shop'>Panjabi</Link></div>
       <div className="border p-2"><Link to='/shop'>Polo Shirt</Link></div>
       <div className="border p-2"><Link to='/shop'>T Shirt</Link></div>
      </div>
    </>
  );
};

export default Banner;
