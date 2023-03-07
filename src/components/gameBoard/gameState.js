export default function gameState(){
  let difficulty = 'easy';
  let boardHeight = 9;
  let boardWidth = 9;
  let boardCellCount = boardHeight * boardWidth;
  let numberMines = 10;

  return {difficulty, boardHeight, boardWidth, boardCellCount, numberMines};
}