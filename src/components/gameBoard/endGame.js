import gameState from "./gameState";

export default function (win = false) {
  gameState.gameOver = true;
  if (!win) {
    console.log("Clicked a mine!");
  } else {
    console.log("You win!");
  }
}
