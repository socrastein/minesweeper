import "./style.css";

// IMPORTING IMAGES:
// import myImage from './my-image.png'



// IMPORTING MODULES:
// import myFunction from './module'
import loadFooter from "./components/footer/footer";
import loadNavBar from "./components/navbar/navBar";
import onResize from "./components/navbar/navBarResize";
import newGame from "./components/newGame/newGame";
import toggleMenu from "./components/navbar/toggleMenu";
import gameState from "./components/gameBoard/gameState";


// CONSTANT ELEMENTS
window.oncontextmenu = function (){
  if(gameState.hoveredCell.innerHTML == "🚩"){
    gameState.hoveredCell.innerHTML = "";
  } else gameState.hoveredCell.innerHTML = "🚩";
  return false;
}

document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded 
  var allMyHoverElements = document.getElementsByClassName("gameCell");

  for (let i = 0; i < allMyHoverElements.length; i++) {
     allMyHoverElements.item(i).onmouseover = function() {
      gameState.hoveredCell = this;
     }
  }
});

// EVENT LISTENERS
// For displaying mobile menu when screen < 500px wide
window.addEventListener("resize", onResize);

// RUN FUNCTIONS TO LOAD CONTENT:
loadNavBar();
onResize();

newGame("easy");

loadFooter();
