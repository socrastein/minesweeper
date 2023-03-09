import gameState from "./gameState";

export default function (){
  let flagCountDisplay = document.getElementById("flagCountDisplay");
  if(!gameState.mouseOverGameboard){
    return
  }
  if(gameState.hoveredCell.innerHTML == "🚩"){
    gameState.hoveredCell.innerHTML = "";
    gameState.numberFlags -= 1;
  } else {
    gameState.hoveredCell.innerHTML = "🚩";
    gameState.numberFlags += 1;
  }

  flagCountDisplay.innerHTML = `🚩 ${gameState.numberFlags}x`
  return false;
}