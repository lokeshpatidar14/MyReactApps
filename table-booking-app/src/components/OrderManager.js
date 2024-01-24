import React, { useState } from "react";
import Order from "./Order";
import OrderList from "./OrderList";

function OrderManager() {
  const loadOrdersFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("orders")) || [];
  const [orders, setOrders] = useState(loadOrdersFromLocalStorage);

  const handleAddOrder = (newOrder) => {
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <Order onAddOrder={handleAddOrder} />
      <OrderList orders={orders} tableNumber="Table1" />
      <OrderList orders={orders} tableNumber="Table2" />
      <OrderList orders={orders} tableNumber="Table3" />
    </div>
  );
}

export default OrderManager;
