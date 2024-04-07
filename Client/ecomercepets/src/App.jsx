import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { setCarrito } from "./redux/actions/actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedCarrito = localStorage.getItem("carrito");
    console.log(storedCarrito);
    if (storedCarrito && storedCarrito.length > 0) {
      console.log("·activado el vaio");
      dispatch(setCarrito(JSON.parse(storedCarrito)));
    }
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route
          exact
          path="/products/:id"
          element={<ProductDetail isAuthenticated={true} />}
        />
        <Route exact path="/cart" element={<ShoppingCartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
