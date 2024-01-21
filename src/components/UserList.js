// UserList.js

import React from "react";
import "./UserList.css";

function UserList({ users }) {
  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li className="containerList" key={index}>
            {user.name}, {user.age} years old , College: {user.college};
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
