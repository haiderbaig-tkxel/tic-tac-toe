import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function jumpTo(nextMove) {
    setHistory(history.slice(0,nextMove+1));
  }

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  const moves = history.map((squares, move) => {
    let description = 'Go to game start';

    if (move > 0) {
        description = 'Go to move #' + move;
    }
    if (move === history.length-1) {
        description = 'You are at move #' + move;
        return (
        <li key={move}>
            <p onClick={() => jumpTo(move)}>{description}</p>
        </li>
        );
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
