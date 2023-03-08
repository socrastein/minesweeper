const gameState = {
  difficulty: "easy",
  boardHeight: 9,
  boardWidth: 9,
  numberMines: 10,
  hoveredCell: undefined,
  get boardCellCount() {
    return this.boardHeight * this.boardWidth;
  }
};

export default gameState;
