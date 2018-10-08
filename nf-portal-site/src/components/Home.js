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
        <NewStudies
          token={this.props.token}
          handleChanges={this.props.handleChanges}
          studies={this.props.studies}
        />
        <NewPublications token={this.props.token} publications={this.props.publications} />
        <NewDatasets token={this.props.token} datasets={this.props.datasets} />
        <Tools token={this.props.token} tools={this.props.tools} />
        <Organizations token={this.props.token} organizations={this.props.organizations} />
      </div>
    )
  }
}

Home.propTypes = {
  token: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
  studies: PropTypes.object.isRequired,
  publications: PropTypes.object.isRequired,
  datasets: PropTypes.object.isRequired,
  tools: PropTypes.object.isRequired,
  organizations: PropTypes.object.isRequired,
}

export default Home
