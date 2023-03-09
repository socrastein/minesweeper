import toggleMenu from "../navbar/toggleMenu";
import clickCell from "../gameBoard/clickCell";
import gameState from "../gameBoard/gameState";

export default function newGame(difficulty) {
  // Infoboard items:
  let difficultyDisplay = document.getElementById("difficultyDisplay");
  let mineCountDisplay = document.getElementById("mineCountDisplay");
  let flagCountDisplay = document.getElementById("flagCountDisplay");

  switch (difficulty) {
    case "easy":
      console.log("New Game: Easy");
      gameState.boardHeight = 9;
      gameState.boardWidth = 9;
      gameState.numberMines = 10;
      difficultyDisplay.innerHTML = "Easy 9x9"
      mineCountDisplay.innerHTML = "💣 10x"
      document.documentElement.style.setProperty('--board-width', '9');
      break;

    case "normal":
      console.log("New Game: Normal");
      gameState.boardHeight = 12;
      gameState.boardWidth = 12;
      gameState.numberMines = 24;
      difficultyDisplay.innerHTML = "Normal 12x12"
      mineCountDisplay.innerHTML = "💣 24x"
      document.documentElement.style.setProperty('--board-width', '12');

      break;

    case "hard":
      console.log("New Game: Hard");
      gameState.boardHeight = 16;
      gameState.boardWidth = 16;
      gameState.numberMines = 45;
      difficultyDisplay.innerHTML = "Hard 16x16";
      mineCountDisplay.innerHTML = "💣 45x"
      document.documentElement.style.setProperty('--board-width', '16');

      break;
  }

  flagCountDisplay.innerHTML = "🚩 0x"

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
