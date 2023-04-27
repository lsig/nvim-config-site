const createHeader = () => {
  const header = document.createElement("header");
  header.textContent = "Lsig's Neovim config";
  return header;
};
const createNav = () => {
  const nav = document.createElement("nav");

  const home = createBtn("Home", "home-btn");
  const menu = createBtn("Plugins", "plugin-btn");
  const contact = createBtn("Contact me", "contact-btn");

  home.setAttribute("class", "active");

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  return nav;
};

const createBtn = (text, id) => {
  const div = document.createElement("div");
  div.setAttribute("id", id);
  div.setAttribute("class", "btn");
  div.innerText = text;
  return div;
};

const createSetup = () => {
  const setupDiv = document.createElement("div");
  const install = createInstall();

  setupDiv.setAttribute("id", "setup");
  setupDiv.appendChild(install);
  return setupDiv;
};

const createInstall = () => {
  const installDiv = document.createElement("div");
  const installHeader = document.createElement("h2");
  const installParagraph = document.createElement("p");
  const installHeaderText = document.createTextNode("1. Installation");
  const installText = document.createTextNode(
    "To install Neovim, a user can go to the official website at <a href='neovim.io' target='_blank'>neovim.io</a> and follow the installation instructions provided for their specific operating system. Neovim supports various platforms including Windows, macOS, and Linux."
  );

  installHeader.appendChild(installHeaderText);
  installParagraph.appendChild(installText);

  installDiv.appendChild(installHeader);
  installDiv.appendChild(installParagraph);
  return installDiv;
};

module.exports = {
  createHeader,
  createNav,
  createSetup,
};
