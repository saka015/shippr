import React from "react";

import pic from "../assets/pic.jpg";

const Product = () => {
  return (
    <div className="product p-2 m-2  box-border ">
      <img className="product-img" src={pic} />

      <h4 className="text-sm">Puma Sports</h4>
      <h6 className="text-[8px] text-[#888]">Price : ₹599</h6>
      <button className="addtocart-btn">Add to Cart</button>
    </div>
  );
};

export default Product;
