import React, { Component } from "react"
import { SynapseComponents } from "synapse-react-client"
import { BarLoader } from "react-spinners"
import PropTypes from "prop-types"
import Selectors from "./Selectors"
import * as synapseObjects from "../library"
import ButtonExplore from "./Button-Explore.js"

class ExploreContent extends Component {
  state = {
    activeTableName: "datasets",
    hash: "/Explore/Datasets",
    name: "",
  };

  handleButtonPress = (id) => {
    const {
      hash,
      name,
    } = synapseObjects[id]

    this.setState({
      activeTableName: id,
      hash,
      name,
    })
    return ""
  };

  render() {
    const { activeTableName } = this.state
    const { homePageParams, rgbIndex } = synapseObjects[activeTableName]
    const { facetName, unitDescription, initQueryRequest } = homePageParams
    return (
      <section className="row explore-content">
        <div className="container">
          <div className="row">
            <h2 className="header">Explore Content</h2>
          </div>
          <div className="row bar-chart">
            <div className="center-block selectors-container">
              <Selectors
                activeButtonId={activeTableName}
                handleButtonPress={this.handleButtonPress}
              />
            </div>
            <div className="synapse-chart">
              <SynapseComponents.QueryWrapper
                initQueryRequest={initQueryRequest}
                rgbIndex={rgbIndex}
                token={this.props.token}
                facetName={facetName}
                unitDescription={unitDescription}
              >
                <SynapseComponents.StackedRowHomebrew
                  loadingScreen={<div className="bar-loader"><BarLoader color="#4DB7AD" loading /></div>}
                />
              </SynapseComponents.QueryWrapper>
            </div>
            <div className={this.state.activeTableName === "file" ? "hide" : "explore-button-row"}>
              <ButtonExplore url={this.state.hash} label={this.state.name} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

ExploreContent.propTypes = {
  token: PropTypes.string.isRequired,
}

export default ExploreContent
