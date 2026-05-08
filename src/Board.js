import { useState } from "react";
import Square from "./Square";

export default function Board({xIsNext, squares, onPlay}) {

  const winResult = calculateWinner(squares);
  const winner = winResult?.winner;
  const winLine = winResult?.line ?? [];
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  function handleSquareClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i=0; i<lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          line: lines[i]
        };
      }
    }
    return null;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} isWinning={winLine.includes(0)} onClick={() => handleSquareClick(0)}/>
        <Square value={squares[1]} isWinning={winLine.includes(1)} onClick={() => handleSquareClick(1)}/>
        <Square value={squares[2]} isWinning={winLine.includes(2)} onClick={() => handleSquareClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} isWinning={winLine.includes(3)} onClick={() => handleSquareClick(3)}/>
        <Square value={squares[4]} isWinning={winLine.includes(4)} onClick={() => handleSquareClick(4)}/>
        <Square value={squares[5]} isWinning={winLine.includes(5)} onClick={() => handleSquareClick(5)}/>      
      </div>
      <div className="board-row">
        <Square value={squares[6]} isWinning={winLine.includes(6)} onClick={() => handleSquareClick(6)}/>
        <Square value={squares[7]} isWinning={winLine.includes(7)} onClick={() => handleSquareClick(7)}/>
        <Square value={squares[8]} isWinning={winLine.includes(8)} onClick={() => handleSquareClick(8)}/>
      </div>
    </>
  );
}
