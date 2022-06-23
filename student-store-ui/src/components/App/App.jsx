import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import Sub_navbar from "../sub_navbar/Sub_navbar";
import ProductPage from "../ProductPage/ProductPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [queryProduct, setQueryProduct] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://codepath-store-api.herokuapp.com/store"
      );
      const result = await response.json();
      setData(result.products);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Sidebar />
          <Navbar />
          <Hero />
          <Sub_navbar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            setQueryProduct={setQueryProduct}
            queryProduct={queryProduct}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={data}
                  activeCategory={activeCategory}
                  queryProduct={queryProduct}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/products/:product_id"
              element={<ProductPage products={data} />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
