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
import setFlag from "./components/gameBoard/setFlag";


// CONSTANT ELEMENTS
window.oncontextmenu = setFlag;

// EVENT LISTENERS
// For displaying mobile menu when screen < 500px wide
window.addEventListener("resize", onResize);

// RUN FUNCTIONS TO LOAD CONTENT:
loadNavBar();
onResize();

newGame("easy");

loadFooter();
