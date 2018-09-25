import React, { Component } from "react"
import PropTypes from "prop-types"
import { HashRouter as Router, Route } from "react-router-dom"
//import ReactGA from "react-ga"
//import createHistory from "history/createBrowserHistory"

import asyncComponent from "./components/AsyncComponent"

// component js
const AsyncHome = asyncComponent(() => import("./components/Home"))
const AsyncHeader = asyncComponent(() => import("./components/Header"))
const AsyncAbout = asyncComponent(() => import("./components/About"))
const AsyncOrganizations = asyncComponent(() => import("./components/Organizations"))

//ReactGA.initialize("UA-29804340-3")

//const history = createHistory()
//history.listen((location) => {
//ReactGA.set({
//page: location.pathname + location.hash + location.search,
//})
//ReactGA.pageview(location.pathname + location.hash + location.search)
//})

class App extends Component {
  state = {
    wikiMarkdown: "",
    wikiMarkdownSegs: [],
    hash: "",
  };

  componentDidMount() {
    this.setState({
      hash: window.location.hash,
    })
  }

  componentDidUpdate() {}

  handleChanges = (KEY, NEWSTATE) => {
    this.setState({
      [KEY]: NEWSTATE,
    })
  };

  handleNestedChanges = (KEY, newStateKey, newState) => {
    //console.log(KEY, newStateKey, newState)
    const property = this.state[KEY]
    property.push({ [newStateKey]: newState })
    this.setState(prevState => ({
      ...prevState,
      property,
    }))
  };

  ReturnHome = () => {
    return (
      <AsyncHome
        markdown={this.state.wikiMarkdown}
        markdownSegs={this.state.markdownSegs}
        token={this.props.loginToken.sessionToken}
      />
    )
  };

  ReturnAbout = () => {
    return (
      <AsyncAbout
        token={this.props.loginToken}
        handleChanges={this.handleChanges}
      />
    )
  };

  ReturnOrganizations = () => {
    return (
      <AsyncOrganizations
        token={this.props.loginToken}
        handleChanges={this.handleChanges}
      />
    )
  };

  ReturnHeader = () => {
    return (
      <AsyncHeader handleChanges={this.handleChanges} hash={this.state.hash} />
    )
  };

  render() {
    return (
      <Router>
        <div className="row amp-ad">
          <this.ReturnHeader />
          <div className="col-xs-12 main">
            <Route exact path="/" component={this.ReturnHome} />
            <Route path="/About" component={this.ReturnAbout} />
            <Route path="/Organizations" component={this.ReturnOrganizations} />
          </div>

          <footer className="row center-xs middle-xs">
            <a href="https://www.synapse.org/#!Synapse:syn2580853/discussion/default">
              Forum
            </a>
            <a href="mailto:ampadportal@sagebionetworks.org">Contact</a>
            <a href="http://docs.synapse.org/articles/governance.html">
              Terms & Privacy
            </a>
          </footer>
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  loginToken: PropTypes.object.isRequired,
}

export default App
