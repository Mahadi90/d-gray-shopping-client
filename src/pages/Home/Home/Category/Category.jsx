import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../../../assets/images/panjabi.jpg'
import img2 from '../../../../assets/images/polo.png'
import img3 from '../../../../assets/images/tshirt.jpg'
import { Link } from 'react-router-dom';


const Category = () => {


    return (
        <div className='my-10 w-[90%] mx-auto'>
            <h2 className='text-3xl font-bold text-center'>Shop by category</h2>
            <Swiper
        // slidesPerView={4}
        breakpoints={{
            // when window width is >= 640px
            300: {
              width: 170,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 968,
              slidesPerView: 2,
            },
          }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
       <SwiperSlide className=' mx-auto'>
       <h2 className='text-white font-bold text-xl text-center bg-gray-600'>Panjabi</h2>
        <img className='mx-auto h-56' src={img1} alt="" />
        <div className='text-center my-2'>
        <Link to='/shop' className='btn bg-black text-white font-bold hover:text-black'>Show More</Link>
        </div>
       </SwiperSlide>
       <SwiperSlide className='mx-auto'> 
       <h2 className='text-white font-bold text-xl text-center bg-gray-600'>Polo Shirt</h2>
        <img className='mx-auto h-56' src={img2} alt="" />
        <div className='text-center my-2'>
        <Link to='/shop' className='btn bg-black text-white font-bold hover:text-black'>Show More</Link>
        </div>
       </SwiperSlide>
       <SwiperSlide  className='mx-auto'>
       <h2 className='text-white font-bold text-xl text-center bg-gray-600'>T Shirt</h2>
        <img className='mx-auto h-56' src={img3} alt="" />
        <div className='text-center my-2'>
        <Link to='/shop' className='btn bg-black text-white font-bold hover:text-black'>Show More</Link>
        </div>
       </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;