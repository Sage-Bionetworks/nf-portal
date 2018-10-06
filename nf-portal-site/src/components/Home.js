import React, { Component } from "react"
import PropTypes from "prop-types"
import Hero from "./Home-hero"
import NewPublications from "./Home-newPublications"
import NewStudies from "./Home-newStudies"
import NewDatasets from "./Home-newDatasets"
import ExploreContent from "./Home-exploreContent.jsx"
import Tools from "./Home-tools"
import Organizations from "./Home-organizations"

class Home extends Component {
  componentDidMount() {
    //console.log(this.props)
  }

  render() {
    return (
      <div>
        <Hero />
        <ExploreContent token={this.props.token} />
        <NewStudies token={this.props.token} />
        <NewPublications token={this.props.token} />
        <NewDatasets token={this.props.token} />
        <Tools token={this.props.token} />
        <Organizations token={this.props.token} />
      </div>
    )
  }
}

Home.propTypes = {
  token: PropTypes.string.isRequired,
}

export default Home
