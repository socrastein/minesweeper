import toggleMenu from "../navbar/toggleMenu";

export default function newGame(difficulty){
  let boardHeight;
  let boardWidth;
  let numberMines;

  switch(difficulty){
    case "easy":
      console.log("easy");
      boardHeight = 9;
      boardWidth = 9;
      numberMines = 10
      break;

    case "normal":
      console.log("normal");
      boardHeight = 9;
      boardWidth = 9;
      numberMines = 10
      break;

    case "hard":
      console.log("hard");
      boardHeight = 9;
      boardWidth = 9;
      numberMines = 10
      break;
  }

  let boardCellCount = boardHeight * boardWidth;

  let mainContainer = document.getElementById("mainContainer");
  let gameBoardContainer = document.getElementById("gameBoard");
  let gameBoardArray = [];

  if(!gameBoardContainer){
    gameBoardContainer = document.createElement("div");
    gameBoardContainer.id = "gameBoard";
  } else {
    gameBoardContainer.innerHTML = "";
  }
    
  for(let i=0 ; i < boardCellCount ; i++){
    let gameBoardCell = document.createElement("div");
    gameBoardCell.classList.add("gameCell");
    gameBoardContainer.appendChild(gameBoardCell);
  }

  mainContainer.appendChild(gameBoardContainer);
  toggleMenu();


}