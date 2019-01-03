import React, { Component } from "react"
import PropTypes from "prop-types"
import SynapseChart from "./SynapseBarChart.jsx"
import { synapseObjects, returnSynapseValue } from "../library/synapseObjects"
import ButtonExplore from "./Button-Explore.js"

let loadedObject

class ExploreContent extends Component {
  state = {
    activeButton: "syn16859580",
    activeFilter: "diseaseFocus",
    color: 0,
    hash: "/Explore/Datasets",
    name: "",
  };

  componentDidMount() {
    this.handleButtonPress("syn16859580")
    loadedObject = synapseObjects.clone()
  }

  handleChanges = (KEY, NEWSTATE) => {
    this.setState({
      [KEY]: NEWSTATE,
    })
  };

  handleButtonPress = (id) => {
    const activeFilter = returnSynapseValue(loadedObject, id, "filter")
    const color = returnSynapseValue(loadedObject, id, "color")
    const hash = returnSynapseValue(loadedObject, id, "hash")
    const name = returnSynapseValue(loadedObject, id, "name")

    this.setState({
      activeButton: id,
      activeFilter,
      color,
      hash,
      name,
    })
    return ""
  };

  returnButtonClass = (id) => {
    return `btn-control ${this.state.activeButton === id ? "active" : ""}`
  };

  render() {
    return (
      <section className="row explore-content">
        <div className="container">
          <div className="row">
            <h2 className="header">Explore Content</h2>
          </div>
          <div className="row bar-chart">
            <div className="center-block selectors-container">
              {/* TODO: move selectors into its own component. this component will be used in explore.js and exploreContent.jsx */}
              <div className="selectors">
                <button
                  className={this.returnButtonClass("syn16858699")}
                  type="button"
                  onClick={() => this.handleButtonPress("syn16858699", this.props.token)
                  }
                >
                  <h5>FUNDERS</h5>
                </button>
                <button
                  className={this.returnButtonClass("syn16859580")}
                  type="button"
                  onClick={() => this.handleButtonPress("syn16859580", this.props.token)
                  }
                >
                  <h5>DATASETS</h5>
                </button>
                <button
                  className={this.returnButtonClass("syn16858331")}
                  type="button"
                  onClick={() => this.handleButtonPress("syn16858331", this.props.token)
                  }
                >
                  <h5>FILES</h5>
                </button>
                <button
                  className={this.returnButtonClass("syn16787123")}
                  type="button"
                  onClick={() => this.handleButtonPress("syn16787123", this.props.token)
                  }
                >
                  <h5>STUDIES</h5>
                </button>
                <button
                  className={this.returnButtonClass("")}
                  type="button"
                  onClick={() => this.handleButtonPress("", this.props.token)
                  }
                >
                  <h5>ANALYSIS</h5>
                </button>
                <button
                  className={this.returnButtonClass("syn16857542")}
                  type="button"
                  onClick={() => this.handleButtonPress("syn16857542", this.props.token)
                  }
                >
                  <h5>PUBLICATIONS</h5>
                </button>
              </div>
            </div>
            <div className="synapse-chart">
              <SynapseChart
                token={this.props.token}
                synId={this.state.activeButton}
                filter={this.state.activeFilter}
                rgbIndex={this.state.color}
                barChart
              />
            </div>
            <div className={this.state.activeButton === "syn16858331" ? "hide" : "explore-button-row"}>
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
