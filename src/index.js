import "./style.css";
import { createHeader, createNav, createSetup } from "./home";
import { createPluginSetup } from "./plugins";
import { createContactSetup } from "./contact";

const container = document.getElementById("container");

const loadHeaderNav = (() => {
  const header = createHeader();
  const nav = createNav();

  document.body.insertBefore(header, container);
  document.body.insertBefore(nav, container);
})();

const setNewActiveTab = (btn_name) => {
  const activeBtn = document.querySelector(".active");
  activeBtn.classList.remove("active");

  const button = document.getElementById(btn_name);
  button.classList.add("active");
};

const loadHomePage = () => {
  const setup = createSetup();

  container.innerHTML = "";

  container.appendChild(setup);
  setNewActiveTab("home-btn");
};

const loadPluginPage = () => {
  const pluginSetup = createPluginSetup();

  container.innerHTML = "";

  container.appendChild(pluginSetup);
  setNewActiveTab("plugin-btn");
};

const loadContactPage = () => {
  const contactSetup = createContactSetup();

  container.innerHTML = "";

  container.appendChild(contactSetup);
  setNewActiveTab("contact-btn");
};

const setEventListeners = (() => {
  const homeButton = document.getElementById("home-btn");
  const pluginButton = document.getElementById("plugin-btn");
  const contactButton = document.getElementById("contact-btn");

  homeButton.addEventListener("click", () => loadHomePage());
  pluginButton.addEventListener("click", () => loadPluginPage());
  contactButton.addEventListener("click", () => loadContactPage());
})();

loadHomePage();
