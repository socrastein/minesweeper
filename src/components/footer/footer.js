import githubLogo from "./github.svg";

export default function loadFooter() {
  let footerText = document.createElement("p");
  footerText.textContent = "© 2023 Matt Talley (socrastein)";

  let logoContainer = document.createElement("a");
  logoContainer.href = "https://github.com/socrastein";
  logoContainer.target = "_blank";

  let logoImage = document.createElement("img");
  logoImage.src = githubLogo;
  logoImage.id = "gitLogo";
  logoContainer.appendChild(logoImage);

  const footer = document.querySelector("footer");

  footer.appendChild(footerText);
  footer.appendChild(logoContainer);
  
}
