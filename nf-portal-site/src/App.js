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
    return <AsyncHome token={this.props.loginToken.sessionToken} />
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
          <div className="main">
            <Route exact path="/" component={this.ReturnHome} />
            <Route path="/About" component={this.ReturnAbout} />
            <Route path="/Organizations" component={this.ReturnOrganizations} />
          </div>

          <footer>
            <div className="container">
              <div className="row">
                <div className="nf-logo-footer col-md-9">
                  <a href=""> NF Portal</a>
                </div>
                <div className="col-md-3 flex justify-end right-footer">
                  <a href="mailto:">Contact Us</a>
                  <a
                    target="blank"
                    href="https://s3.amazonaws.com/static.synapse.org/governance/SageBionetworksSynapseTermsandConditionsofUse.pdf?v=5"
                  >
                    Terms of Use
                  </a>
                </div>
              </div>
            </div>
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
