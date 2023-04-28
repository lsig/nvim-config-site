import "./style.css";
import { createHeader, createNav, createSetup } from "./home";
import { createPluginSetup } from "./plugins";

const container = document.getElementById("container");

const loadHeaderNav = (() => {
  const header = createHeader();
  const nav = createNav();

  document.body.insertBefore(header, container);
  document.body.insertBefore(nav, container);
})();

const loadHomePage = () => {
  const setup = createSetup();

  container.innerHTML = "";

  container.appendChild(setup);
};

const loadPluginPage = () => {
  const pluginSetup = createPluginSetup();

  container.innerHTML = "";

  container.appendChild(pluginSetup);
};

loadHomePage();
