import * as React from "react";
import "./Home.css";
import Product from "../Product/Product";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function Home({
  products,
  activeCategory,
  queryProduct,
  cartItems,
  setCartItems,
}) {
  let products_filtered = products.filter((product, idx) => {
    if (activeCategory === "All Categories") {
      return true;
    } else {
      return product.category === activeCategory;
    }
  });

  if (queryProduct !== "") {
    products_filtered = products_filtered.filter((product, idx) => {
      var product_name = product.name.toLowerCase();
      var queryProduct_lower = queryProduct.toLowerCase();
      if (product_name.includes(queryProduct_lower)) return true;
      return false;
    });
  }

  let toDisplay = products_filtered.length !== 0;

  return (
    // <div className="home">
    //   <div className="products">
    <>
      <h3>Best Selling Products</h3>
      <div className="grid">
        {toDisplay ? (
          products_filtered.map((product, idx) => (
            <Product
              key={idx}
              product={product}
              cartItems={cartItems}
              setCartItems={setCartItems}
              data={products}
            />
          ))
        ) : (
          <h2>No Products to display!!!</h2>
        )}
      </div>
      <About />
      <Contact />
      <Footer />
    </>
    //   </div>
    // </div>
  );
}
