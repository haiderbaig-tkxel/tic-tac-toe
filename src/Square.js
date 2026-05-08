import { useState } from "react";

export default function Square({ value, onClick }) {
  return (
    <button
      className={`square ${value === "X" ? "square-x" : value === "O" ? "square-o" : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
