import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/products/:category" Component={ProductList} />
        <Route path="/product/:id" Component={Product} />
        <Route path="/cart" Component={Cart} />
        <Route path="/success" Component={Success} />
      </Routes>
    </Router>
  );
};

export default App;
