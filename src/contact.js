const createContactSetup = () => {
  const createContactDiv = document.createElement("div");
  const createContactHeader = document.createElement("h1");
  const createContactParagraph = document.createElement("p");
  const createContactEmail = document.createElement("p");
  const createContactGithub = document.createElement("a");

  const createContactHeaderText = document.createTextNode(
    "Contact information"
  );
  const createContactText = document.createTextNode(
    "If you want to talk about neovim or discuss me config, feel free to contact me through the channels below."
  );
  const createContactEmailText = document.createTextNode(
    "Email: logisig1@gmail.com"
  );

  createContactHeader.appendChild(createContactHeaderText);
  createContactParagraph.appendChild(createContactText);
  createContactEmail.appendChild(createContactEmailText);

  createContactGithub.href = "https://github.com/lsig";
  createContactGithub.target = "_blank";
  const createContactGithubText = document.createTextNode(
    "Github: github.com/lsig"
  );
  createContactGithub.appendChild(createContactGithubText);

  createContactDiv.appendChild(createContactHeader);
  createContactDiv.appendChild(createContactParagraph);
  createContactDiv.appendChild(createContactEmail);
  createContactDiv.appendChild(createContactGithub);

  return createContactDiv;
};

export { createContactSetup };
