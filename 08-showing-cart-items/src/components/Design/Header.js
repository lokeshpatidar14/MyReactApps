import React, { useContext } from "react";
import "./Header.css";
import meals from "../../images/meals.jpg";
import CartIcon from "./CartIcon";
import Summary from "../../components/Design/Summary";
import CartContext from "../../store/cart-context";

function Header(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <>
      <header>
        <h1>FOOD-ORDER</h1>
        <button onClick={props.onShowCart}>
          <span className="icon">
            <CartIcon />
          </span>
          <span>My Cart</span>
          <span className="badge">{numberOfCartItems}</span>
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
