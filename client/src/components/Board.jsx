import React from "react";
import Piece from "./Piece";

export default function Board({ board, onCellClick }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 70px)",
        gap: "2px"
      }}
    >
      {board.map((row, r) =>
        row.map((cell, c) => (
          <div
            key={`${r}-${c}`}
            onClick={() => onCellClick(r, c)}
            style={{
              width: "70px",
              height: "70px",
              background: (r + c) % 2 ? "#111" : "#222",
              border: "1px solid gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {cell && <Piece type={cell} />}
          </div>
        ))
      )}
    </div>
  );
}