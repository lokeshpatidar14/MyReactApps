import React, { useContext } from "react";
import "./Cart.css";
import CartContext from "../../store/cart-context";
import CartItem from "../cart/CartItem";

import Modal from "../modal/Modal";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `Rs.${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;
  const handleAddItem = (item) => {};
  const handleRemoveItem = (item) => {};

  const cartItems = (
    <ul className="cart-itemss">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={handleRemoveItem.bind(null, item.id)}
          onAdd={handleAddItem.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
