import { configure } from "@storybook/react";
import { SynapseClient, SynapseConstants } from "synapse-react-client";

function loadStories(token) {
  require("../src/stories/");

  const ExploreContent = require("../src/stories/ExploreContent.js");
  ExploreContent.token = token;

  const NewStudies = require("../src/stories/NewStudies.js");
  NewStudies.token = token;
}

const login = async () =>
  SynapseClient.login("mikeybkats", "guinness").then(keys => {
    return keys;
  });

login().then(keys => {
  configure(() => loadStories(keys), module);
});
