import endGame from "./endGame";
import gameState from "./gameState";

export default function () {
  let clearedCells = document.getElementsByClassName("clear");
  let cellsWithoutMines = gameState.boardCellCount - gameState.numberMines;

  if (clearedCells.length === cellsWithoutMines) {
    console.log("WINNER");
    endGame(true);
  }
}
