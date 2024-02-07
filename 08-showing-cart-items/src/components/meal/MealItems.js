import React from "react";
import "./MealItems.css";
import MealItemList from "./MealItemList";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Poha-Jalebi",
    description: "Indori Special Poha Jalebi",
    price: 20
  },
  {
    id: "m2",
    name: "Dal Bafla",
    description: "Spicy DalBafle",
    price: 220,
  },
  {
    id: "m3",
    name: "Lassi",
    description: "Sweet and Fresh",
    price: 50,
  },
  {
    id: "m4",
    name: "Ice-Cream",
    description: "Yummy Icecreams",
    price: 50,
  },
];

function MealItems() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItemList
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className='meals'>
      
        <ul>{mealsList}</ul>
      
    </section>
  );
};

export default MealItems;
