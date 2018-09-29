import React from "react"

import { storiesOf } from "@storybook/react"
import { State, Store } from "@sambego/storybook-state"

import { HashRouter as Router } from "react-router-dom"
import Organizations from "../components/Home-organizations"
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

storiesOf("NF Portal - Home", module).add("Organizations", () => (
  <Router>
    <Organizations token={this.token.sessionToken} />
  </Router>
))
