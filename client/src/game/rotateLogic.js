export function rotatePiece(piece, direction) {
  const angles = [0, 90, 180, 270];

  let current = piece.rotation || 0;

  if (direction === "left") {
    current -= 90;
  } else {
    current += 90;
  }

  if (current < 0) current = 270;
  if (current >= 360) current = 0;

  return {
    ...piece,
    rotation: current
  };
}