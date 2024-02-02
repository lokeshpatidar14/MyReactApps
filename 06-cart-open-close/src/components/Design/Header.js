import React from "react";
import "./Header.css";
import meals from "../../images/meals.jpg";
import CartIcon from "./CartIcon";
import Summary from "../../components/Design/Summary";

function Header(props) {
  return (
    <>
      <header>
        <h1>FOOD-ORDER</h1>
        <button onClick={props.onShowCart}>
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
      <Summary></Summary>
    </>
  );
}

export default Header;
