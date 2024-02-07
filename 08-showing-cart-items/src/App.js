import React, { useState } from "react";
import Header from "./components/Design/Header";
import MealItems from "./components/meal/MealItems";
import Cart from "./components/cart/Cart";
import CartProvider from "../src/store/CartProvider";

function App() {
  const [cart, setCart] = useState();

  const handleCartClose = () => {
    setCart(false);
  };

  const handleCartOpen = () => {
    setCart(true);
  };
  return (
    <CartProvider>
      {cart && <Cart onCloseCart={handleCartClose} />}
      <Header onShowCart={handleCartOpen} />
      <MealItems></MealItems>
    </CartProvider>
  );
}

export default App;
