import React, { Component } from "react"
import { SynapseComponents } from "synapse-react-client"
import PropTypes from "prop-types"
import SynapseChart from "./SynapseBarChart.jsx"
import synapseObjects from "../library/synapseObjects"
import Selectors from "./Selectors"

class Explore extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      activeSynObjectId: "syn16859580",
    }
    this.handleButtonPress = this.handleButtonPress.bind(this)
    this.renderChartOrCards = this.renderChartOrCards.bind(this)
  }

  getActiveSubPathSynId = () => {
    const hash = window.location.hash
    let id

    switch (hash) {
    case "#/Explore/Studies":
      id = "syn16787123"
      break
    case "#/Explore/Publications":
      id = "syn16857542"
      break
    case "#/Explore/Datasets":
      id = "syn16859580"
      break
    case "#/Explore/Funder":
      id = "syn16858699"
      break
    case "#/Explore/Files":
      id = "syn16858331"
      // TODO: Fix this
      break
    default:
      id = ""
    }

    return id
  }

  handleButtonPress = (id) => {
    const {
      name,
    } = synapseObjects[id]

    this.setState({
      activeSynObjectId: id,
      name,
    })
  };

  returnButtonClass = (id) => {
    return `btn-control ${this.state.activeButton === id ? "active" : ""}`
  };

  hideBarSection = () => {
    const hash = window.location.hash

    if (hash === "#/Explore") {
      return ""
    }
    if (hash !== "#/") {
      return "hide"
    }
    return ""
  }

  renderSubPathName = () => {
    if (window.location.hash !== "#/Explore") {
      const hash = window.location.hash
      const exploreLength = "#/Explore/".length
      return hash.substring(exploreLength)
    }
    return ""
  }

  renderChartOrCards() {
    // If on the /Explore/{<section>} then show cards
    // otherwise show bar chart
    if (window.location.hash !== "#/Explore") {
      const id = this.getActiveSubPathSynId()
      const {
        homePageParams,
        type,
      } = synapseObjects[id]
      const { sql } = homePageParams.initQueryRequest.query
      return (
        <SynapseComponents.StaticQueryWrapper
          sql={sql}
          token={this.props.token}
        >
          <SynapseComponents.SynapseTableCardView
            type={type}
          />
        </SynapseComponents.StaticQueryWrapper>
      )
    }
    const { activeSynObjectId } = this.state
    const {
      menuConfig,
      rgbIndex,
      type,
    } = synapseObjects[activeSynObjectId]
    return (
      <SynapseChart
        token={this.props.token}
        menuConfig={menuConfig}
        rgbIndex={rgbIndex}
        type={type}
      />
    )
  }

  render() {
    return (
      <section className="page explore">
        <div className="container">
          <div className="row">
            <h1 className="header">
                Explore
              {" "}
              {this.state.name || this.renderSubPathName()}
            </h1>
          </div>
          {/* TODO: Break the buttons into its own component called Selectors.js */}
          <div className="row explore-content">
            <div className={`center-block selectors-container ${this.hideBarSection()}`}>
              <Selectors
                activeButtonId={this.state.activeSynObjectId}
                handleButtonPress={this.handleButtonPress}
              />
            </div>
            {
              this.renderChartOrCards()
            }
          </div>
        </div>
      </section>
    )
  }
}

Explore.propTypes = {
  token: PropTypes.string.isRequired,
}

export default Explore
