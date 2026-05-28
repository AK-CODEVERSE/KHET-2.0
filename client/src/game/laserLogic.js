export function fireLaser(board, startRow, startCol, direction) {
  let r = startRow;
  let c = startCol;

  while (true) {
    if (direction === "up") r--;
    if (direction === "down") r++;
    if (direction === "left") c--;
    if (direction === "right") c++;

    if (r < 0 || r >= 8 || c < 0 || c >= 8) {
      return null;
    }

    const piece = board[r][c];

    if (piece) {
      return {
        hit: piece,
        row: r,
        col: c
      };
    }
  }
}