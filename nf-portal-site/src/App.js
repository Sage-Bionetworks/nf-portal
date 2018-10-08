import React, { Component } from "react"
import PropTypes from "prop-types"
import { HashRouter as Router, Route } from "react-router-dom"
import { getStaticJSON } from "./queries/queryForData"
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
    hash: "",
    syn16859580: "",
    syn16858699: "",
    syn16858331: "",
    syn16857542: "",
    syn16787123: "",
    syn16859448: "",
  };

  componentDidMount() {
    this.setState({
      hash: window.location.hash,
    })
    getStaticJSON("syn16858331", this.handleChanges)
    getStaticJSON("syn16859580", this.handleChanges)
    getStaticJSON("syn16858699", this.handleChanges)
    getStaticJSON("syn16857542", this.handleChanges)
    getStaticJSON("syn16787123", this.handleChanges)
    getStaticJSON("syn16859448", this.handleChanges)
  }

  handleChanges = (KEY, NEWSTATE) => {
    this.setState({
      [KEY]: NEWSTATE,
    })
  };

  handleNestedChanges = (KEY, newStateKey, newState) => {
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
        token={this.props.loginToken.sessionToken}
        handleChanges={this.handleChanges}
        studies={this.state.syn16787123}
        publications={this.state.syn16857542}
        datasets={this.state.syn16859580}
        tools={this.state.syn16859448}
        organizations={this.state.syn16858699}
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
