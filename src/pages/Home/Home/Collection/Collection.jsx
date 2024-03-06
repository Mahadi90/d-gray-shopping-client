import React from "react";
import img1 from "../../../../assets/images/best colection.jpg";
import img2 from "../../../../assets/images/new.jpg";

const Collection = () => {
  return (
<div className="max-w-[90%] mx-auto">
<div className="my-5 grid grid-cols-2 gap-6 text-gray-500">
      <div className=" glass shadow-md">
        <figure>
          <img className="w-full h-52 md:h-96 " src={img1} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="text-center my-0 font-bold text-xl">
            Always get from us <br /> <span className="text-red-400"> Best Collection</span>
          </h2>
        </div>
      </div>
      <div className=" glass shadow-md">
        <figure>
          <img className="w-full h-52 md:h-96" src={img2} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="text-center my-0 font-bold text-xl">
            Always get from us <br /><span className="text-red-400"> New Collection</span>
          </h2>
        </div>
      </div>
    </div>
     <div className="card glass shadow-md flex text-center text-white bg-yellow-900">
     <h2 className="text-xl py-10">Shopping up to 1990tk and get <br /> Delivery Charge <span className="text-green-400 font-bold">Free</span></h2>
   </div>
</div>
  );
};

export default Collection;
