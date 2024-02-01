import React from "react";
import "./Header.css";
import meals from "../images/meals.jpg";
import CartIcon from "./CartIcon";

function Header() {
  return (
    <>
      <header>
        <h1>FOOD-ORDER</h1>
        <button>
          <span className="icon">
            <CartIcon />
          </span>
          <span>My Cart</span>
          <span className="badge">0</span>
        </button>
      </header>
      <div className="image">
        <img src={meals} alt="no img" />
      </div>
    </>
  );
}

export default Header;
