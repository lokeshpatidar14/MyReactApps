import React from "react";
import "./Cart.css";
import Modal from "../modal/Modal";


function Cart(props) {
  const cartItems = (
    <ul className="cart-items">
      {[
        {
          id: "m1",
          name: "Poha-Jalebi",
          description: "Indori Special Poha Jalebi",
          price: 20,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onCloseCart}>Close</button>
        <button className="button" >Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
