import React from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main.jsx";
import Search from "./components/Search.jsx";
import SingleProduct from "./components/SingleProduct.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Search /> */}
      {/* <Main /> */}

      <SingleProduct/>
    </>
  );
};

export default App;
