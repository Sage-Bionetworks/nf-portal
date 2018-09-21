import React from "react"
import ReactDOM from "react-dom"
import "./style/index.css"
import "./style/style.css"
import { BarLoader } from "react-spinners"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import * as SynapseClient from "./synapse/SynapseClient"

let rawSynapseData
let loginKey

const login = async () => SynapseClient.login("mikeybkats", "guinness").then((keys) => {
  loginKey = keys
  return keys
})
login()
  .then((token) => {
    ReactDOM.render(
      <div className="front-page-bar">
        <BarLoader color="#47357B" loading />
      </div>,
      document.getElementById("root"),
    )
  })
  .then(() => ReactDOM.render(
    <App loginToken={loginKey} />,
    document.getElementById("root"),
  ))

registerServiceWorker()
