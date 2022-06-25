import React from "react";
import "./Sub_navbar.css";
import { useState } from "react";

function sub_navbar({
  activeCategory,
  setActiveCategory,
  setQueryProduct,
  queryProduct,
}) {
  const [display, setDisplay] = useState("display_block");
  function handleOnClickCategory(event) {
    setActiveCategory(event.target.id);
  }

  function toggleDisplay(event) {
    display === "display_block"
      ? setDisplay("display_none")
      : setDisplay("display_block");
  }

  return (
    <div className="sub_navbar">
      <div className="sub_navbar_categories">
        <ul className={display}>
          <li
            onClick={handleOnClickCategory}
            id="All Categories"
            className={activeCategory === "All Categories" ? "is_active" : ""}
          >
            All Categories
          </li>
          <li
            onClick={handleOnClickCategory}
            id="clothing"
            className={activeCategory === "clothing" ? "is_active" : ""}
          >
            Clothing
          </li>
          <li
            onClick={handleOnClickCategory}
            id="food"
            className={activeCategory === "food" ? "is_active" : ""}
          >
            Food
          </li>
          <li
            onClick={handleOnClickCategory}
            id="accessories"
            className={activeCategory === "accessories" ? "is_active" : ""}
          >
            Accessories
          </li>
          <li
            onClick={handleOnClickCategory}
            id="tech"
            className={activeCategory === "tech" ? "is_active" : ""}
          >
            Tech
          </li>
        </ul>
      </div>
    </div>
  );
}

export function Search_Navbar({ setQueryProduct, queryProduct }) {
  function handleQueryProduct(event) {
    setQueryProduct(event.target.value);
  }

  return (
    <div className="">
      <form action="">
        <input
          onChange={handleQueryProduct}
          value={queryProduct}
          placeholder="Search items..."
        />
      </form>
    </div>
  );
}

export default sub_navbar;
