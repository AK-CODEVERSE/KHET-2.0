import React, { useState } from "react";
import Board from "./components/Board";
import { initialBoard } from "./game/initialBoard";

export default function App() {
  const [board, setBoard] = useState(initialBoard);
  const [selected, setSelected] = useState(null);

  function onCellClick(r, c) {
    if (!selected) {
      setSelected({ r, c });
      return;
    }

    const newBoard = [...board.map(row => [...row])];

    newBoard[r][c] = board[selected.r][selected.c];
    newBoard[selected.r][selected.c] = null;

    setBoard(newBoard);
    setSelected(null);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black"
      }}
    >
      <Board board={board} onCellClick={onCellClick} />
    </div>
  );
}