import toggleMenu from "../navbar/toggleMenu";
import clickCell from "../gameBoard/clickCell";
import gameState from "../gameBoard/gameState";

export default function newGame(difficulty) {
  switch (difficulty) {
    case "easy":
      console.log("New Game: Easy");
      gameState.boardHeight = 9;
      gameState.boardWidth = 9;
      gameState.numberMines = 10;
      break;

    case "normal":
      console.log("New Game: Normal");
      gameState.boardHeight = 9;
      gameState.boardWidth = 9;
      gameState.numberMines = 10;
      break;

    case "hard":
      console.log("New Game: Hard");
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

  gameBoardContainer.addEventListener("mouseleave", () => {
    gameState.mouseOverGameboard = false;
  });

  for (let i = 0; i < gameState.boardCellCount; i++) {
    let gameBoardCell = document.createElement("div");
    gameBoardCell.classList.add("gameCell");
    gameBoardCell.id = `cell_${i}`;
    gameBoardCell.addEventListener("click", clickCell);
    gameBoardContainer.appendChild(gameBoardCell);
  }

  mainContainer.appendChild(gameBoardContainer);

  gameBoardArray = gameBoardContainer.childNodes;

  while (true) {
    let totalMines = document.querySelectorAll(".mine").length;
    if (totalMines >= gameState.numberMines) {
      break;
    }

    let randomNode =
      gameBoardArray[Math.floor(Math.random() * gameState.boardCellCount)];
    if (randomNode.classList.contains("mine")) {
      continue;
    } else {
      randomNode.classList.add("mine");
    }
  }

  let allMyHoverElements = document.getElementsByClassName("gameCell");

  for (let i = 0; i < allMyHoverElements.length; i++) {
    allMyHoverElements.item(i).onmouseover = function () {
      gameState.mouseOverGameboard = true;
      gameState.hoveredCell = this;
    };
  }

  gameState.gameOver = false;

  const menuBar = document.getElementById("menuBar");
  if (menuBar.classList.contains("hidden")) {
    return;
  } else toggleMenu();
}
