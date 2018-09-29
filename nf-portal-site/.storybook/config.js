import { configure } from "@storybook/react";
import { SynapseClient, SynapseConstants } from "synapse-react-client";

function loadStories(token) {
  require("../src/stories/");

  const ExploreContent = require("../src/stories/ExploreContent.js");
  ExploreContent.token = token;

  const NewStudies = require("../src/stories/NewStudies.js");
  NewStudies.token = token;

  const NewPublications = require("../src/stories/NewPublications.js");
  NewPublications.token = token;

  const NewDatasets = require("../src/stories/NewDatasets.js");
  NewDatasets.token = token;

  const Tools = require("../src/stories/Tools.js");
  Tools.token = token;

  const Organizations = require("../src/stories/Organizations.js");
  Organizations.token = token;
}

const login = async () =>
  SynapseClient.login("mikeybkats", "guinness").then(keys => {
    return keys;
  });

login().then(keys => {
  configure(() => loadStories(keys), module);
});
