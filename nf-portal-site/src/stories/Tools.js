import React from "react"

import { storiesOf } from "@storybook/react"
import { State, Store } from "@sambego/storybook-state"

import { HashRouter as Router } from "react-router-dom"
import Tools from "../components/Home-tools"
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

storiesOf("NF Portal - Home", module).add("Tools", () => (
  <Router>
    <Tools token={this.token.sessionToken} />
  </Router>
))
