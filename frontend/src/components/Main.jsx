import React from "react";
import Product from "./Product";

const Main = () => {
  return (
    <div className="flex">
      <div className="selection px-2">
        <hr />
        <h1 className="text-center mt-2 mb-2 ">Filters</h1>
        {/* section start */}
        <hr />
        <p className="text-xs font-semibold mt-2">Brand</p>
        <div className="filter-divs flex flex-col -gap-4 mb-2 mx-3">
          <div>
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />
            <span>PUMA</span>
          </div>
          <div className="-mt-2">
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />
            <span>PUMA</span>
          </div>
          <div className="-mt-2">
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />
            <span>PUMA</span>
          </div>
          <div className="-mt-2">
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />
            <span>PUMA</span>
          </div>
          <div className="-mt-2">
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />
            <span>PUMA</span>
          </div>
        </div>
        {/* section end */}
        <hr />
        {/* section start */}
        <p className="text-xs font-semibold mt-2">Prices</p>
        <div className="filter-divs flex flex-col  mb-2 mx-3">
          <div>
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />
            <span>₹100-₹500</span>
          </div>
          <div>
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />
            <span>₹100-₹500</span>
          </div>
          <div>
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />
            <span>₹100-₹500</span>
          </div>
          <div>
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />
            <span>₹100-₹500</span>
          </div>
        </div>
        {/* section end */}
        <hr />
        {/* section start */}
        <p className="text-xs font-semibold mt-2">Colors</p>
        <div className="filter-divs flex flex-col mt-2 mb-2 mx-3">
          <div className="flex">
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />

            <div className="color-box red"></div>
            <span className="mx-1 -mt-[3px]">Red</span>
          </div>
          <div className="flex mt-2">
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />
            <div className="color-box green"></div>
            <span className="mx-1 -mt-[3px]">Green</span>
          </div>
          <div className="flex mt-2">
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />
            <div className="color-box yellow"></div>
            <span className="mx-1 -mt-[3px]">Yellow</span>
          </div>
          <div className="flex mt-2">
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />
            <div className="color-box black"></div>
            <span className="mx-1 -mt-[3px]">Black</span>
          </div>
          <div className="flex mt-2">
            <input
              className="input-selection"
              type="checkbox"
              name=""
              id="price"
            />
            <div className="color-box sky"></div>
            <span className="mx-1 -mt-[3px]">Sky</span>
          </div>
        </div>
        {/* section end */}
      </div>
      <div className="content grid grid-cols-4 p-4 ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Main;
