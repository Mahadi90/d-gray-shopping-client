import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxios from '../../../../hooks/useAxios';
import { AuthContext } from '../../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../../../hooks/useCart';

const Popular = () => {

  
  const {user} = useContext(AuthContext)
  const axios = useAxios()
  const navigate = useNavigate()
const location = useLocation()


const [products,setProducts] = useState([])
useEffect(() => {
    fetch('https://d-gray-server-uzc1-kbxhuxkdq-mahadimhs787gmailcoms-projects.vercel.app/products')
    .then(res => res.json())
    .then(data => setProducts(data))
},[])

// const from = location.state?.from?.pathname || '/'




  const [,refetch] = useCart()

  const handleAddTocart = (product) => {
      if(user && user.email){
          // console.log(food, user.email)
          const cartItem = {
            productId :  product._id,
            email : user.email,
            userName : user?.displayName,
            name : product.name,
            price : product.price,
            img : product.img
          }
      
          axios.post('/carts', cartItem)
          .then(res => {
            // console.log(res.data)
            if(res.data.insertedId){
              Swal.fire({
                position: "center",
                icon: "success",
                title: `${product.name} added to your cart`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch()
            }
          })
        }
        else{
          Swal.fire({
            title: "You dont have logged in!",
            text: "You have to login before add to cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want to login"
          }).then((result) => {
            if (result.isConfirmed) {
             navigate('/login', {state : {from : location}})
            }
          });
        }
  }


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
            className='mb-10' key={product._id}>
                <img className='h-[20vh] lg:h-[70vh] w-96' src={product.img} alt="" />
                <div className='space-y-1 mt-2 p-2'>
                <h3 className='text-gray-500 font-bold'>{product.category}</h3>
                <h2 className='font-bold'>{product.name}</h2>
                <p className=''>Price : {product.price} Tk</p>
                <button onClick={() => handleAddTocart(product)} className='btn bg-black text-white font-bold'>Add to cart</button>
                </div>
                </SwiperSlide>)
        }
       
      </Swiper>
        </div>
    );
};

export default Popular;