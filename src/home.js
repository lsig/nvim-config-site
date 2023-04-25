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

module.exports = {
  createHeader,
  createNav,
};
