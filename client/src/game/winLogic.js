export function checkWinner(board) {
  let redAlive = false;
  let silverAlive = false;

  for (let row of board) {
    for (let cell of row) {
      if (cell === "pharaoh_red") redAlive = true;
      if (cell === "pharaoh_silver") silverAlive = true;
    }
  }

  if (!redAlive) return "Silver Wins";
  if (!silverAlive) return "Red Wins";

  return null;
}