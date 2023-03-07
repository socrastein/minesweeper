import toggleMenu from "../navbar/toggleMenu";

export default function newGame(difficulty) {
  let boardHeight;
  let boardWidth;
  let numberMines;

  switch (difficulty) {
    case "easy":
      console.log("easy");
      boardHeight = 9;
      boardWidth = 9;
      numberMines = 10;
      break;

    case "normal":
      console.log("normal");
      boardHeight = 9;
      boardWidth = 9;
      numberMines = 10;
      break;

    case "hard":
      console.log("hard");
      boardHeight = 9;
      boardWidth = 9;
      numberMines = 10;
      break;
  }

  let boardCellCount = boardHeight * boardWidth;

  let mainContainer = document.getElementById("mainContainer");
  let gameBoardContainer = document.getElementById("gameBoard");
  let gameBoardArray;

  if (!gameBoardContainer) {
    gameBoardContainer = document.createElement("div");
    gameBoardContainer.id = "gameBoard";
  } else {
    gameBoardContainer.innerHTML = "";
  }

  for (let i = 0; i < boardCellCount; i++) {
    let gameBoardCell = document.createElement("div");
    gameBoardCell.classList.add("gameCell");
    gameBoardContainer.appendChild(gameBoardCell);
  }

  mainContainer.appendChild(gameBoardContainer);
  
  gameBoardArray = gameBoardContainer.childNodes;
  let maxRounds = 0;

  while (true) {
    let totalMines = document.querySelectorAll(".mine").length;
    if (totalMines >= numberMines) {
      break;
    }

    maxRounds += 1;
    if (maxRounds > 100) {
      console.log("Breaking infinite loop");
      break;
    }

    let randomNode = gameBoardArray[Math.floor(Math.random() * boardCellCount)];
    if (randomNode.classList.contains("mine")) {
      console.log("Node is already a mine");
      continue;
    } else {
      randomNode.classList.add("mine");
    }
    console.log(
      `Number of mines created: ${
        document.querySelectorAll(".mine").length
      } out of ${numberMines}`
    );
  }
  
  toggleMenu();
}
