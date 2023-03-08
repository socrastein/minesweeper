import gameState from "./gameState";
import endGame from "./endGame";

function checkNeighboringCells(cellIndex) {
  let neighborValues = [-10, -9, -8, -1, 1, 8, 9, 10]; // surrounding 6 cell's indices;
  // If clicked cell is on left side of board, ignore neighbors to left
  if(cellIndex % gameState.boardWidth == 0){
    neighborValues = [-9, -8, 1, 9, 10];
  }
  // If clicked cell is on right side of board, ignore neighbors to right
  if(cellIndex % gameState.boardWidth == 8){
    neighborValues = [-10, -9, -1, 8, 9]
  }

  for(let i in neighborValues){
    let neighborIndex = cellIndex + neighborValues[i];
    if(neighborIndex < 0 || neighborIndex > gameState.boardCellCount - 1){
      continue;
    }
    let neighbor = document.getElementById(`cell_${neighborIndex}`)
    neighbor.classList.add("green");
    // if(neighbor.classList.contains("mine")){

    // }
  }
}

export default function clickCell(cell) {
  let cellIndex = Number(cell.target.id.substring(5));

  if (cell.target.classList.contains("mine")) {
    endGame();
  } else checkNeighboringCells(cellIndex);
}
