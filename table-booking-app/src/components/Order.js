import React, { useState } from "react";
//import "./Order.css";

function Order(props) {
  const [id, setId] = useState("");
  const [food, setFood] = useState("");
  const [price, setPrice] = useState("");
  const [table, setTable] = useState("Table1");

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleTableChange = (event) => {
    setTable(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newOrder = {
      id: id,
      name: food,
      price: price,
      table: table,
    };

    props.onAddOrder(newOrder);

    setId("");
    setFood("");
    setPrice("");
    setTable("Table1");
  };

  return (
    <>
      <form  onSubmit={handleFormSubmit}>
        <label>Order Id</label>
        <input type="number" value={id} onChange={handleIdChange} />

        <label>Food Name</label>
        <select value={food} onChange={handleFoodChange}>
          <option>Tea </option>
          <option>Samosa</option>
          <option>Kachori</option>
          <option>Poha-Jalebi</option>
          <option>Aloo Bada</option>
        </select>

        <label> Price</label>
        <input type="number" value={price} onChange={handlePriceChange} />

        <label>Table</label>
        <select value={table} onChange={handleTableChange}>
          <option>Table1</option>
          <option>Table2</option>
          <option>Table3</option>
        </select>

        <button type="submit">Add Product</button>
      </form>
    </>
  );
}

export default Order;
