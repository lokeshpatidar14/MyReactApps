// App.js

import React, { useState } from "react";
import InputForm from "./components/InputForm";
import UserList from "./components/UserList";
import "./components/UserList.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="container">
      <InputForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
