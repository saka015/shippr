import React from "react";
import pic from "../assets/pic.jpg";

const SingleProduct = () => {
  return (
    <div className="px-28 py-20 flex">
      <div className="single-left">
        <img width="300px" src={pic} alt="" />
      </div>
      <div className="single-right ml-5 px-4 pt-2">
        <h4 className="text-xl font-semibold">PUMA Sports</h4>
        <h5 className="text-[10px] font-semibold">Price : ₹599</h5>
        <p className="text-[9px] mt-2">Size : S</p>

        <div className="item-number flex text-white  mt-3 -mx-1">
          <button className="bg-black  mx-1 px-1">-</button>
          <p className="text-black border border-sm  px-1">0</p>
          <button className="bg-black mx-1 px-1">+</button>
        </div>
        <button className="addtocart-btn mt-8 mb-4">Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
