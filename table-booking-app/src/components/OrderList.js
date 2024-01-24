import React from "react";


function OrderList({ orders, tableNumber }) {
  const filteredOrders = orders.filter((order) => order.table === tableNumber);

  return (
    <>
      <h2>{tableNumber}</h2>
      <ul>
        {filteredOrders.map((order) => (
          <li key={order.id}>
            Order ID: {order.id}, Food: {order.name}, Price: {order.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default OrderList;
