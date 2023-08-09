import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
// Import other components if needed

const App = () => {
  return (
    <BrowserRouter>
      {/* Include Header, Footer, or other layout components if needed */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      {/* Include Footer or other layout components if needed */}
    </BrowserRouter>
  );
};

export default App;
