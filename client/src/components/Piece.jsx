import React from "react";

export default function Piece({ type }) {
  return (
    <div
      style={{
        color: "white",
        fontWeight: "bold"
      }}
    >
      {type}
    </div>
  );
}