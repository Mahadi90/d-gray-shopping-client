import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const ProductCard = ({item}) => {

    const {user} = useContext(AuthContext)
    const axios = useAxios()
    const navigate = useNavigate()
  const location = useLocation()

  // const from = location.state?.from?.pathname || '/'

    const { _id, name, category , price ,img} = item;

    const [,refetch] = useCart()

    const handleAddTocart = () => {
        if(user && user.email){
            // console.log(food, user.email)
            const cartItem = {
              productId :  _id,
              email : user.email,
              userName : user?.displayName,
              name,
              price,
              img
            }
        
            axios.post('/carts', cartItem)
            .then(res => {
              // console.log(res.data)
              if(res.data.insertedId){
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `${name} added to your cart`,
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

    return (
        <div className='w-40 md:w-96 space-y-2 mb-2'>
            <img className='h-3/5 md:h-3/4 w-full' src={img} alt="" />
            <div className=''>
            <h2 className='text-gray-500 font-bold'>{category}</h2>
            <h3>{name}</h3>
            <p>Price : {price} tk</p>
            <button onClick={handleAddTocart} className='btn bg-black text-white font-bold mt-4'>Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;