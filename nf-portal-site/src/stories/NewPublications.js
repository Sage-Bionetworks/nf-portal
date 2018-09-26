import React from "react"

import { storiesOf } from "@storybook/react"
import { State, Store } from "@sambego/storybook-state"

import { HashRouter as Router } from "react-router-dom"
import NewPublications from "../components/Home-newPublications"
import "../style/style.css"

const store = new Store({
  pageData: {
    token: "",
  },
})

const handleChanges = (KEY, NEWSTATE) => {
  store.set({
    [KEY]: NEWSTATE,
  })
}

storiesOf("NF Portal", module).add("New Publications", () => (
  <Router>
    <NewPublications token={this.token.sessionToken} />
  </Router>
))
