import gameState from "./gameState";
import endGame from "./endGame";
import checkWin from "./checkWin";

function checkNeighboringCells(cellIndex) {
  let checkedCell = document.getElementById(`cell_${cellIndex}`);
  let w = gameState.boardWidth;
  let neighborValues = [-w - 1, -w, -w + 1, -1, 1, w - 1, w, w + 1]; // surrounding 6 cell's indices;
  // If clicked cell is on left side of board, ignore neighbors to left
  if (cellIndex % w == 0) {
    neighborValues = [-w, -w + 1, 1, w, w + 1];
  }
  // If clicked cell is on right side of board, ignore neighbors to right
  if (cellIndex % w == w - 1) {
    neighborValues = [-w - 1, -w, -1, w - 1, w];
  }
  let neighborArray = [];
  let mineDetected = false;
  let mineCount = 0;
  for (let i in neighborValues) {
    let neighborIndex = cellIndex + neighborValues[i];
    if (neighborIndex < 0 || neighborIndex > gameState.boardCellCount - 1) {
      continue;
    }
    let neighbor = document.getElementById(`cell_${neighborIndex}`);
    if (neighbor.classList.contains("mine")) {
      mineDetected = true;
      mineCount++;
    } else checkedCell.classList.add("clear");
    if (!neighbor.classList.contains("clear")) {
      neighborArray.push(neighborIndex);
    }
  }

  if (mineDetected) {
    checkedCell.innerHTML = `${mineCount}`;
    switch (mineCount) {
      case 1:
        checkedCell.style.backgroundColor = "";
    }
  } else {
    checkedCell.style.backgroundColor = "lightgrey";
    checkedCell.classList.add("clear");
    for (let i in neighborArray) {
      checkNeighboringCells(neighborArray[i]);
    }
  }

  checkWin();
}

export default function clickCell(cell) {
  if (gameState.gameOver) {
    return;
  }
  let cellIndex = Number(cell.target.id.substring(5));

  if (cell.target.classList.contains("mine")) {
    endGame();
    return;
  } else checkNeighboringCells(cellIndex);
}
