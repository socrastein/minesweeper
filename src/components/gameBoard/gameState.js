const gameState = {
  difficulty: "easy",
  boardHeight: 9,
  boardWidth: 9,
  numberMines: 10,
  get boardCellCount() {
    return this.boardHeight * this.boardWidth;
  }
};

export default gameState;
