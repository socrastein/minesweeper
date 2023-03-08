import gameState from "./gameState";
import endGame from "./endGame";

function checkNeighboringCells(cellIndex) {
  let checkedCell = document.getElementById(`cell_${cellIndex}`)
  let neighborValues = [-10, -9, -8, -1, 1, 8, 9, 10]; // surrounding 6 cell's indices;
  // If clicked cell is on left side of board, ignore neighbors to left
  if (cellIndex % gameState.boardWidth == 0) {
    neighborValues = [-9, -8, 1, 9, 10];
  }
  // If clicked cell is on right side of board, ignore neighbors to right
  if (cellIndex % gameState.boardWidth == 8) {
    neighborValues = [-10, -9, -1, 8, 9];
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
    }
    if (!neighbor.classList.contains("clear")){
      neighborArray.push(neighborIndex);
    }
    
  }

  if(mineDetected){
    checkedCell.innerHTML = `${mineCount}`;
    switch(mineCount){
      case 1:
        checkedCell.style.backgroundColor = ""
    }
  } else {
    checkedCell.style.backgroundColor = "lightgrey";
    checkedCell.classList.add("clear");
    for(let i in neighborArray){
      checkNeighboringCells(neighborArray[i]);
    }
  }

}

export default function clickCell(cell) {
  let cellIndex = Number(cell.target.id.substring(5));

  if (cell.target.classList.contains("mine")) {
    endGame();
  } else checkNeighboringCells(cellIndex);
}
