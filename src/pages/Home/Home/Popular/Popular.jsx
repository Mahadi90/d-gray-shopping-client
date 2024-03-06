import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Popular = () => {

const [products,setProducts] = useState([])
useEffect(() => {
    fetch('/products.json')
    .then(res => res.json())
    .then(data => setProducts(data.products))
},[])

const popularItems = products.filter(product => product.title === 'Popular');
// console.log(popularItems)

// console.log(products.products)

    return (
        <div className='my-5 lg:my-10 w-[90%] mx-auto'>
            <h2 className='text-3xl font-bold text-center'>Best Selling</h2>
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
              width: 768,
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
        {
            popularItems.map(product =>  <SwiperSlide
            className='mb-10' key={product.id}>
                <img className='h-[20vh] lg:h-[70vh] w-96' src={product.img} alt="" />
                <div className='space-y-1 mt-2 p-2'>
                <h3 className='text-gray-500 font-bold'>{product.category}</h3>
                <h2 className='font-bold'>{product.name}</h2>
                <p className=''>Price : {product.price} Tk</p>
                <button className='btn bg-black text-white font-bold'>Add to cart</button>
                </div>
                </SwiperSlide>)
        }
       
      </Swiper>
        </div>
    );
};

export default Popular;