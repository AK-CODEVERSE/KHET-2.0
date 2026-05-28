import React from "react";

export default function Piece({ type }) {

  const symbols = {
    pharaoh_red: "👑",
    pharaoh_silver: "♔",

    sphinx_red: "🔺",
    sphinx_silver: "🔻",

    pyramid_red: "◣",
    pyramid_silver: "◢",

    scarab_red: "🔷",
    scarab_silver: "💠"
  };

  return (
    <div
      style={{
        fontSize: "42px"
      }}
    >
      {symbols[type]}
    </div>
  );
}