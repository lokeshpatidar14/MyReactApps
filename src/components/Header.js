import React from "react";
import Meals from "../images/React_Header.png";

function Header() {
  return (
    <>
      <header
        style={{
          backgroundColor: "maroon",
          paddingLeft: "100px",
          paddingTop: "20px",
          fontSize: "40px",
          color: "white",
          fontFamily: "monospace",
        }}
      >
        React Meals
        <h2>
          <button>Your Cart</button>
        </h2>
      </header>

      <div>
        <img
          src={Meals}
          alt="no img"
          style={{
            height: "010%",
          }}
        />
      </div>
    </>
  );
}

export default Header;
