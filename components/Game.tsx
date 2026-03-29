"use client";

import { useState } from "react"; // ✅ THIS FIXES YOUR ERROR

export default function GamePopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🎮 BUTTON */}
      <div className="game-btn" onClick={() => {
  setOpen(true);
  document.body.classList.add("game-open"); // 👈 add
}}>
        🎮
      </div>

      {/* MODAL */}
      {open && (
        <div className="game-modal">
          <div className="game-box">
          <button
  className="close-btn"
  onClick={() => {
    setOpen(false);
    document.body.classList.remove("game-open"); // 👈 remove
  }}
>
  ✕
</button>
            <TicTacToe />
          </div>
        </div>
      )}
    </>
  );
}
function TicTacToe() {
    const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
  
    const winner = calculateWinner(board);
  
    const handleClick = (i: number) => {
        if (board[i] || winner) return;
      
        const newBoard = [...board];
        newBoard[i] = "X"; // user is always X
        setBoard(newBoard);
      
        // ⏱ delay so it feels natural
        setTimeout(() => {
          const aiMove = getBestMove(newBoard);
          if (aiMove !== -1) {
            newBoard[aiMove] = "O";
            setBoard([...newBoard]);
          }
        }, 400);
      };
      function getBestMove(board: (string | null)[]) {
        const empty = board
          .map((v, i) => (v === null ? i : null))
          .filter((v) => v !== null) as number[];
      
        if (empty.length === 0) return -1;
      
        // simple AI (random move)
        return empty[Math.floor(Math.random() * empty.length)];
      }
    const resetGame = () => {
      setBoard(Array(9).fill(null));
      setIsX(true);
    };
  
    return (
      <div className="ttt">
        <h3>
        {winner ? `Winner: ${winner}` : "You (X) vs Computer (O)"}
        </h3>
  
        <div className="grid">
          {board.map((cell, i) => (
            <div key={i} className="cell" onClick={() => handleClick(i)}>
              {cell}
            </div>
          ))}
        </div>
  
        <button onClick={resetGame} className="reset-btn">Restart</button>
      </div>
    );
  }
  function calculateWinner(b: (string | null)[]) {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
  
    for (let [a,b1,c] of lines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
        return b[a];
      }
    }
    return null;
  }