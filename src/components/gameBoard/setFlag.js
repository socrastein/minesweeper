import gameState from "./gameState";

export default function (){
  if(!gameState.mouseOverGameboard){
    return
  }
  if(gameState.hoveredCell.innerHTML == "🚩"){
    gameState.hoveredCell.innerHTML = "";
  } else gameState.hoveredCell.innerHTML = "🚩";
  return false;
}