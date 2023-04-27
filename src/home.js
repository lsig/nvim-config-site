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
  const config = createConfig();
  const plugManager = createPlugManager();

  setupDiv.setAttribute("id", "setup");
  setupDiv.appendChild(install);
  setupDiv.appendChild(config);
  setupDiv.appendChild(plugManager);
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

createConfig = () => {
  const confDiv = document.createElement("div");
  const confHeader = document.createElement("h2");
  const confParagraph = document.createElement("p");
  const confHeaderText = document.createTextNode(
    "2. Structuring your Neovim config"
  );
  const confText = document.createTextNode(
    "To setup your Neovim config, go to your .config folder from your home directory. If the directory does not exist, mkdir .config in your homedirectory. Go inside .config and make a folder called nvim. Now make a init.lua file, a folder called lua and a folder called after. Inside the after directory make a folder called plugins, this is where your plugins will be stored and configured. Inside the lua folder make a directory <your-name>, this folder will store your core config files which will be loaded before your plugins. This video by ThePrimeagen (legend) kickstarted my Neovim journey and is extremely helpful, check it out!"
  );
  const confLink = document.createElement("a");
  confLink.href =
    "https://www.youtube.com/watch?v=w7i4amO_zaE&t=839s&ab_channel=ThePrimeagen";
  confLink.target = "_blank";
  const linkText = document.createTextNode("Primes setup tutorial.");

  confHeader.appendChild(confHeaderText);
  confParagraph.appendChild(confText);
  confLink.appendChild(linkText);

  confDiv.appendChild(confHeader);
  confDiv.appendChild(confParagraph);
  confDiv.appendChild(confLink);
  return confDiv;
};

createPlugManager = () => {
  const plugDiv = document.createElement("div");
  const plugHeader = document.createElement("h2");
  const plugParagraph = document.createElement("p");
  const plugHeaderText = document.createTextNode(
    "3. Setting up your Neovim plugin manager"
  );
  const plugText = document.createTextNode(
    "There are some popular Neovim plugin managers out there like Packer, Lazy and VimPlug. I personally use lazy.nvim which I am extremely happy with and mad props to folke. So I will focus on setting up on the Lazy plugin manager. Inside your <your-name> folder create a file called lazy.nvim. Goto lazy.nvim github page and follow the installation instructions, after that check out the plugins page and start adding the essential plugins listed there."
  );
  const plugLink = document.createElement("a");
  plugLink.href = "https://github.com/folke/lazy.nvim";
  plugLink.target = "_blank";
  const linkText = document.createTextNode(
    "Lazy.nvim on github, check it out!"
  );

  plugHeader.appendChild(plugHeaderText);
  plugParagraph.appendChild(plugText);
  plugLink.appendChild(linkText);

  plugDiv.appendChild(plugHeader);
  plugDiv.appendChild(plugParagraph);
  plugDiv.appendChild(plugLink);
  return plugDiv;
};

module.exports = {
  createHeader,
  createNav,
  createSetup,
};
