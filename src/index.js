import "./style.css";
import { createHeader, createNav } from "./home";

const loadHeaderNav = (() => {
  const container = document.getElementById("container");
  const header = createHeader();
  const nav = createNav();

  document.body.insertBefore(header, container);
  document.body.insertBefore(nav, container);
})();
