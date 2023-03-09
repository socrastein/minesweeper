const gameState = {
  difficulty: "easy",
  boardHeight: 9,
  boardWidth: 9,
  numberMines: 10,
  numberFlags: 0,
  hoveredCell: undefined,
  mouseOverGameboard: false,
  gameOver: false,
  get boardCellCount() {
    return this.boardHeight * this.boardWidth;
  }
};

export default gameState;
