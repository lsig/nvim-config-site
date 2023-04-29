import data from "./plugins.json";

const createPlugin = (name, link, desc) => {
  const pluginDiv = document.createElement("div");
  const pluginHeader = document.createElement("h3");
  const pluginLink = document.createElement("a");
  const pluginParagraph = document.createElement("p");

  pluginLink.href = link;
  pluginLink.target = "_blank";

  const pluginHeaderText = document.createTextNode(name);
  const pluginText = document.createTextNode(desc);

  pluginLink.appendChild(pluginHeaderText);
  pluginParagraph.appendChild(pluginText);

  pluginHeader.appendChild(pluginLink);

  pluginDiv.appendChild(pluginHeader);
  pluginDiv.appendChild(pluginParagraph);

  return pluginDiv;
};

const createPluginGroup = (groupName, pluginArr) => {
  const pluginGroupDiv = document.createElement("div");
  const pluginGroupHeader = document.createElement("h2");
  const pluginGroupHeaderText = document.createTextNode(groupName);

  pluginGroupHeader.appendChild(pluginGroupHeaderText);
  pluginGroupDiv.appendChild(pluginGroupHeader);

  pluginGroupDiv.setAttribute("id", groupName);
  pluginArr.forEach((plugin) => {
    const newPlugin = createPlugin(plugin.name, plugin.url, plugin.description);
    pluginGroupDiv.appendChild(newPlugin);
  });
  return pluginGroupDiv;
};

const createPluginSetup = () => {
  const pluginSetupDiv = document.createElement("div");
  const pluginSetupHeader = document.createElement("h1");
  const pluginSetupHeaderText = document.createTextNode(
    "A list of my current plugins 🔌"
  );

  pluginSetupHeader.appendChild(pluginSetupHeaderText);
  pluginSetupDiv.appendChild(pluginSetupHeader);

  const lspPlugins = createPluginGroup("Lsp-related plugins", data.lspPlugins);
  const cmpPlugins = createPluginGroup("Cmp-related plugins", data.cmpPlugins);
  const gitPlugins = createPluginGroup("Git-related plugins", data.gitplugins);
  const otherPlugins = createPluginGroup(
    "Other essential plugins",
    data.otherPlugins
  );

  pluginSetupDiv.appendChild(lspPlugins);
  pluginSetupDiv.appendChild(cmpPlugins);
  pluginSetupDiv.appendChild(gitPlugins);
  pluginSetupDiv.appendChild(otherPlugins);

  return pluginSetupDiv;
};

export { createPluginSetup };
