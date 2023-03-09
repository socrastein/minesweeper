import gameState from "../gameBoard/gameState";

export default function () {
  let infoBoard = document.createElement("div");
  infoBoard.id = "infoBoard";

  let difficultyDisplay = document.createElement("div");
  difficultyDisplay.id = "difficultyDisplay";
  infoBoard.appendChild(difficultyDisplay);

  let mineCountDisplay = document.createElement("div");
  mineCountDisplay.id = "mineCountDisplay";
  infoBoard.appendChild(mineCountDisplay);

  let flagCountDisplay = document.createElement("div");
  flagCountDisplay.id = "flagCountDisplay";
  infoBoard.appendChild(flagCountDisplay);

  let mainContainer = document.getElementById("mainContainer");
  mainContainer.appendChild(infoBoard);
}