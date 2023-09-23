import React from "react";
import { BiSolidLogIn } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import { Button } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <div className="flex  bg-black text-white font-thin p-3 px-4 sticky w-full">
      <div className="left">
        <h1 className="font-semibold cursor-pointer">Shippr</h1>
      </div>
      <div className="right-0 absolute mr-6 flex float-right mt-1 my-2">
        <div className="text-white flex">
          <BsCartFill
            className="icon text-sm icon mt-1 mr-4"
            style={{ color: "white" }}
          />
          <BiSolidLogIn
            className="icon text-sm icon mt-1 mr-4"
            style={{ color: "white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
