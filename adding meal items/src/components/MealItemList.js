import React from "react";
import "./MealItemList.css";

function MealItemList(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="classes.price">{price}</div>
      </div>
      <div></div>
    </li>
  );
}

export default MealItemList;
