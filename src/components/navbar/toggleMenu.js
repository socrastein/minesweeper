import xSVG from "./x.svg";
import menuSVG from "./menu.svg";

export default function toggleMenu() {
  const menuBar = document.getElementById("menuBar");
  const menuIcon = document.getElementById("menuIcon")

  if(menuBar.classList.contains("hidden")){
    menuIcon.src = xSVG;

    menuBar.setAttribute("class", "flexColumn centered");
    menuBar.style.position = "absolute";
    menuBar.style.top = "0";
    menuBar.style.paddingTop = "2rem";
    menuBar.style.width = "100%";
  } else {
    menuIcon.src = menuSVG;
    menuBar.setAttribute("class", "flexRow hidden");
    menuBar.style.paddingTop = "1rem";
  }
}
