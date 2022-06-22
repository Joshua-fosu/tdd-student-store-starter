import * as React from "react"
import "./Home.css"
import Product from "../Product/Product"

export default function Home(props) {
  return (
    <div className="home">
      <div className="products">
        <h3>Best Selling Products</h3>
        <div className="grid">
          <Product />
        </div>
      </div>

    </div>
  )
}
