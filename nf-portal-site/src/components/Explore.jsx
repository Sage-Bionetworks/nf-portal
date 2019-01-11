import React, { Component } from "react"
import { SynapseComponents } from "synapse-react-client"
import PropTypes from "prop-types"
import SynapseChart from "./SynapseBarChart.jsx"
import * as synapseObjects from "../library"
import Selectors from "./Selectors"

class Explore extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      activeSynapseTableName: "datasets",
    }
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
    const {
      name,
    } = synapseObjects[tableName]

    this.setState({
      activeSynapseTableName: tableName,
      name,
    })
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
      const tableName = this.getActiveTableName()
      const {
        sql,
        type,
      } = synapseObjects[tableName]
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
    const { activeSynapseTableName } = this.state
    const {
      menuConfig,
      rgbIndex,
      type,
    } = synapseObjects[activeSynapseTableName]
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
                activeSynapseTableName={this.state.activeSynapseTableName}
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
