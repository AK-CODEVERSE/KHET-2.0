import React from "react";

export default function GameUI({ currentTurn }) {
  return (
    <div
      style={{
        marginBottom: "20px",
        textAlign: "center",
        fontSize: "24px"
      }}
    >
      Turn: {currentTurn}
    </div>
  );
}