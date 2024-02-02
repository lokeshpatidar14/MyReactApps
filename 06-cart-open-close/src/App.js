import React, { useState } from "react";
import Header from "./components/Design/Header";
import MealItems from "./components/meal/MealItems";
import Cart from "./components/cart/Cart";

function App() {
  const [cart, setCart] = useState();

  const handleCartClose = () => {
    setCart(false);
  };

  const handleCartOpen = () => {
    setCart(true);
  };
  return (
    <>
      {cart&& <Cart onCloseCart={handleCartClose}/>}
      <Header onShowCart={handleCartOpen}/>
      <MealItems></MealItems>
    </>
  );
}

export default App;
