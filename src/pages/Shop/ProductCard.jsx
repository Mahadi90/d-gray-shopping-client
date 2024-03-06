import React from 'react';

const ProductCard = ({item}) => {

    const { id, name, category , price ,img} = item;

    return (
        <div className='w-40 md:w-96 space-y-2 '>
            <img className='h-3/5 md:h-3/4 w-full' src={img} alt="" />
            <div className=''>
            <h2 className='text-gray-500 font-bold'>{category}</h2>
            <h3>{name}</h3>
            <p>Price : {price} tk</p>
            <button className='btn bg-black text-white font-bold mt-4'>Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;