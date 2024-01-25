'use client';
import React, { useRef, useState, useEffect } from 'react';
import Canvas from '../components/Canvas';

const draw = (context) => {
  const blockSize = 24;
  const padding = 4;
  const boardWidth = 10;
  const boardHeight = 23;
  /* Vẽ khung của board */
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.lineWidth = 2;
  context.rect(padding, padding, blockSize * boardWidth + padding * (boardWidth + 1), blockSize * (boardHeight - 3) + padding * (boardHeight - 3 + 1));
  context.stroke();

  /* Lặp qua các phần tử của mảng board và vẽ các block tại đúng vị trí */
  for (let i = 3; i < boardHeight; i++) {
    for (let j = 0; j < boardWidth; j++) {
      // if (currentBoard[i][j] > 0) {
        context.fillStyle = 'rgb(0, 0, 0)';
      // } else {
        context.fillStyle = 'rgb(248, 248, 248)';
      // }
      context.fillRect(padding * 2 + j * (blockSize + padding), padding * 2 + (i - 3) * (blockSize + padding), blockSize, blockSize);
    }
  }
}

function Board() {
  return (
    <div className="w-screen h-screen">
      <Canvas draw={draw} height={600} width={400} />
    </div>
  );
}

export default Board;
