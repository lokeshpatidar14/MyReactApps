import React from "react";
import Header from "./components/Design/Header";

import MealItems from "./components/meal/MealItems";
import Cart from "./components/cart/Cart";


function App() {
  return (
    <>
      <Header></Header>
      <MealItems></MealItems>
      <Cart></Cart>
    </>
  );
}

export default App;
