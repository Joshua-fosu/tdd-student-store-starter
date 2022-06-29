import * as React from "react";
import Navvbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import Sub_navbar from "../sub_navbar/Sub_navbar";
import ProductDetail from "../ProductDetail/ProductDetail";
import About from "../About/About";
import "./App.css";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [queryProduct, setQueryProduct] = useState("");
  const [shoppingCart, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState("closed");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3001/store/");
      const result = await response.json();
      setProducts(result.products);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <div className="sidebar_div">
            <Sidebar
              cartItems={shoppingCart}
              setSideBarStatus={setIsOpen}
              sideBarStatus={isOpen}
              userName={userName}
              setUserName={setUserName}
              userEmail={userEmail}
              setUserEmail={setUserEmail}
              setCartItems={setCartItems}
            />
          </div>
          <div className="main_page_div">
            <Navvbar
              queryProduct={queryProduct}
              setQueryProduct={setQueryProduct}
            />
            <Hero />
            <Sub_navbar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              setQueryProduct={setQueryProduct}
              queryProduct={queryProduct}
            />
            <Routes>
              <Route
                path=""
                element={
                  <Home
                    products={products}
                    activeCategory={activeCategory}
                    queryProduct={queryProduct}
                    cartItems={shoppingCart}
                    setCartItems={setCartItems}
                  />
                }
              />
              <Route
                path="/products/:product_id"
                element={
                  <ProductDetail
                    products={products}
                    cartItems={shoppingCart}
                    setCartItems={setCartItems}
                  />
                }
              />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}
