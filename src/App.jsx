import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./views/Product/Product";
import ProductCreate from "./views/Product/ProductCreate";
import ProductEdit from "./views/Product/ProductEdit";
import Profile from "./views/Profile";
import Home from "./views/Home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/prodcut/create" element={<ProductCreate />}></Route>
        <Route
          path="/product/edit/:productId"
          element={<ProductEdit />}
        ></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;