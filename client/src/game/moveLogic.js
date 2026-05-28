export function isValidMove(fromR, fromC, toR, toC) {
  const rowDiff = Math.abs(fromR - toR);
  const colDiff = Math.abs(fromC - toC);

  return rowDiff <= 1 && colDiff <= 1;
}