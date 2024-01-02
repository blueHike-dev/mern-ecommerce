import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../components/constants/routes.json";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductList from "../pages/ProductList";

const Main = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route exact path={routes.HOME} element={<Home />} />
        <Route exact path={routes.PRODUCTS} element={<Product />} />
        <Route exact path={routes.PRODUCTLIST} element={<ProductList />} />
      </Routes>
    </MainWrapper>
  );
};

export default Main;
