import toggleMenu from "../navbar/toggleMenu";
import clickCell from "../gameBoard/clickCell";
import gameStateFunction from "../gameBoard/gameState";

export default function newGame(difficulty) {
  
  let gameState = gameStateFunction();

  switch (difficulty) {
    case "easy":
      console.log("easy");
      gameState.boardHeight = 9;
      gameState.boardWidth = 9;
      gameState.numberMines = 10;
      break;

    case "normal":
      console.log("normal");
      gameState.boardHeight = 9;
      gameState.boardWidth = 9;
      gameState.numberMines = 10;
      break;

    case "hard":
      console.log("hard");
      gameState.boardHeight = 9;
      gameState.boardWidth = 9;
      gameState.numberMines = 10;
      break;
  }

  let mainContainer = document.getElementById("mainContainer");
  let gameBoardContainer = document.getElementById("gameBoard");
  let gameBoardArray;

  if (!gameBoardContainer) {
    gameBoardContainer = document.createElement("div");
    gameBoardContainer.id = "gameBoard";
  } else {
    gameBoardContainer.innerHTML = "";
  }

  for (let i = 0; i < gameState.boardCellCount; i++) {
    let gameBoardCell = document.createElement("div");
    gameBoardCell.classList.add("gameCell");
    gameBoardCell.innerHTML = i;
    gameBoardCell.id = `cell_${i}`;
    gameBoardCell.addEventListener("click", clickCell);
    gameBoardContainer.appendChild(gameBoardCell);
  }

  mainContainer.appendChild(gameBoardContainer);

  console.log(gameState.boardCellCount);

  gameBoardArray = gameBoardContainer.childNodes;

  while (true) {
    let totalMines = document.querySelectorAll(".mine").length;
    if (totalMines >= gameState.numberMines) {
      break;
    }

    let randomNode =
      gameBoardArray[Math.floor(Math.random() * gameState.boardCellCount)];
    if (randomNode.classList.contains("mine")) {
      console.log("Node is already a mine");
      continue;
    } else {
      randomNode.classList.add("mine");
    }
    console.log(
      `Number of mines created: ${
        document.querySelectorAll(".mine").length
      } out of ${gameState.numberMines}`
    );
  }

  toggleMenu();
}
