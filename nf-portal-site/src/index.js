import "core-js/fn/symbol/iterator.js"
import "core-js/fn/array/fill"
import "./ie11support/polyfills"
import "react-app-polyfill/ie11"
import React from "react"
import ReactDOM from "react-dom"
import "./style/index.css"
import "./style/style.css"
import App from "./App"

ReactDOM.render(
  <App />,
  document.getElementById("root"),
)
