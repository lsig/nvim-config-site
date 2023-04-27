import "./style.css";
import { createHeader, createNav, createSetup } from "./home";

const container = document.getElementById("container");

const loadHeaderNav = (() => {
  const header = createHeader();
  const nav = createNav();

  document.body.insertBefore(header, container);
  document.body.insertBefore(nav, container);
})();

const loadHomePage = () => {
  const setup = createSetup();

  container.appendChild(setup);
};

loadHomePage();
