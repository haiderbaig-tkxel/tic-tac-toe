export default function Square({ value, isWinning, onClick }) {
  return (
    <button
      className={`square ${value === "X" ? "square-x" : value === "O" ? "square-o" : ""} ${isWinning && "square-winning"}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
