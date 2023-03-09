import gameState from "./gameState";

export default function (win = false) {
  let difficultyDisplay = document.getElementById("difficultyDisplay");
  gameState.gameOver = true;
  let mines = document.getElementsByClassName("mine");
  for (let i = 0; i < mines.length; i++) {
    console.log(mines[i]);
    mines[i].innerHTML = "💣";
  }
  if (win) {
    difficultyDisplay.innerHTML = "You win!";
    console.log("You win!");
  } else {
    difficultyDisplay.innerHTML = "You lose";
    console.log("You lose");
  }
}
