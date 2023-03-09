import gameState from "./gameState";

export default function (win = false) {
  gameState.gameOver = true;
  let mines = document.getElementsByClassName("mine");
  for (let i in mines) {
    mines[i].innerHTML = "💣";
  }
  if (!win) {
    console.log("You win!");
  } else {
    console.log("Clicked a mine!");
  }
}
