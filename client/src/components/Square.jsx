import React from "react";

export default function Square({ children, onClick, dark }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "70px",
        height: "70px",
        background: dark ? "#111" : "#333",
        border: "1px solid gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      }}
    >
      {children}
    </div>
  );
}