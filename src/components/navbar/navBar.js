import menuSVG from "./menu.svg";
// import siteLogo from "./logo.svg";

import newGame from "../newGame/newGame";

import toggleMenu from "./toggleMenu";

export default function loadNavBar() {
  let mainContainer = document.getElementById("mainContainer");

  let navContainer = document.createElement("div");
  navContainer.id = "navContainer";
  navContainer.classList.add("flexRow", "spacedApart");
  mainContainer.appendChild(navContainer);

  let siteTitle = document.createElement("div");
  siteTitle.id = "siteTitle";
  navContainer.appendChild(siteTitle);

  // let siteLogo = document.createElement("img");
  // siteLogo.id = "siteLogo";
  // siteLogo.src = siteLogo;
  // siteTitle.appendChild(siteLogo);

  let siteName = document.createElement("p");
  siteName.id = "siteName";
  siteName.textContent = "Minesweeper"; //TODO: Rename this
  siteTitle.appendChild(siteName);

  let menuBar = document.createElement("div");
  menuBar.id = "menuBar";
  menuBar.classList.add("flexRow");
  navContainer.appendChild(menuBar);

  let menuItems = [
    { name: "Easy", onClick: () => newGame("easy") }, //TODO: FILL THESE IN
    { name: "Normal", onClick: () => newGame("normal") },
    { name: "Hard", onClick: () => newGame("hard") },
  ];

  menuItems.forEach((item) => {
    let menuItem = document.createElement("p");
    menuItem.textContent = item.name;
    menuItem.onclick = item.onClick;
    menuItem.classList.add("menuItem");
    menuBar.appendChild(menuItem);
  });

  let menuIcon = document.createElement("img");
  menuIcon.src = menuSVG;
  menuIcon.id = "menuIcon";
  menuIcon.onclick = toggleMenu;
  navContainer.appendChild(menuIcon);
}
