import React from "react";
import useCart from "../../hooks/useCart";
import Carttable from "./Carttable";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalCartPrice = parseInt(cart.reduce((total, item) => total + item.price, 0))
  console.log(cart);

  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-between font-bold text-2xl items-center">
        <h2>Total Price : {totalCartPrice} Tk</h2>
        <h3>Total Product : {cart.length}</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="table mt-2">
          {/* head */}
          <thead>
            <tr className="bg-gray-600 text-white">
              <th>
               Serial
              </th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
             cart.map((item, index) => <Carttable
             key={item._id}
             item={item}
             index={index}
             refetch={refetch}
             ></Carttable>)
           }
          </tbody>
        </table>
      </div>
      <div className="text-center my-4"><button className="btn btn-primary">Procced to checkout</button></div>
    </div>
  );
};

export default Cart;
