import React from "react";

function Header() {
  return (
    <div style={headerStyle}>
      <h1>Todo List</h1>
    </div>
  );
}

// Styles
const headerStyle = {
  background: "#000",
  width: "100%",
  padding: "10px",
  color: "white",
  margin: 0
};

// End styles
export default Header;
