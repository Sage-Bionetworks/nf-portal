import React, { Component } from "react"
import { SynapseComponents } from "synapse-react-client"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import SynapseChart from "./SynapseBarChart.jsx"
import * as synapseObjects from "../library"
import Selectors from "./Selectors"

class Explore extends Component {
  constructor() {
    super()
    this.handleButtonPress = this.handleButtonPress.bind(this)
    this.renderChartOrCards = this.renderChartOrCards.bind(this)
  }

  getActiveTableName = () => {
    const hash = window.location.hash
    let tableName

    switch (hash) {
    case "#/Explore/Studies":
      tableName = "studies"
      break
    case "#/Explore/Publications":
      tableName = "publications"
      break
    case "#/Explore/Datasets":
      tableName = "datasets"
      break
    case "#/Explore/Funder":
      tableName = "funders"
      break
    case "#/Explore/Tools":
      tableName = "tools"
      break
    case "#/Explore/Files":
      tableName = "files"
      // TODO: Fix this
      break
    default:
      tableName = ""
    }

    return tableName
  }

  handleButtonPress = (tableName) => {
    this.props.history.push(`/Explore/${tableName}`)
  };

  hideBarSection = (subPathName) => {
    if (subPathName === "Tools") {
      return "hide"
    }
    return ""
  }

  getSubPathName = () => {
    if (window.location.hash !== "#/Explore") {
      const hash = window.location.hash
      const exploreLength = "#/Explore/".length
      return hash.substring(exploreLength)
    }
    return ""
  }

  renderChartOrCards(subPathName) {
    // If on the /Explore/Tools} then show cards
    // otherwise show bar chart
    if (subPathName === "Tools") {
      const {
        sql,
        type,
      } = synapseObjects[subPathName]
      return (
        <SynapseComponents.CardContainerLogic
          sql={sql}
          type={type}
        />
      )
    }
    const {
      menuConfig,
      rgbIndex,
      type,
    } = synapseObjects[subPathName]
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
    const subPathName = this.getSubPathName()
    const hideIfToolsSection = subPathName === "Tools" ? "hide" : ""
    return (
      <section className="page explore">
        <div className="container">
          <div className="row">
            <h1 className="header">
                Explore
              {" "}
              {subPathName}
            </h1>
            <div className={`center-block selectors-container ${hideIfToolsSection}`}>
              <Selectors
                activeTableName={subPathName}
                handleButtonPress={this.handleButtonPress}
              />
            </div>
            {
              this.renderChartOrCards(subPathName)
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

export default withRouter(Explore)
