import React, { Component } from "react"
import PropTypes from "prop-types"
import SynapseChart from "./SynapseBarChart"
import { returnSynapseValue, setSynapseValue } from "../library/synapseObjects"

const objectsArray = [
  {
    name: "funder",
    id: "syn16858699",
    filter: "",
    color: 0,
  },
  {
    name: "datasets",
    id: "syn16859580",
    filter: "diseaseFocus",
    color: 1,
  },
  {
    name: "data",
    id: "syn16858331",
    filter: "assay",
    color: 8,
  },
  {
    name: "studies",
    id: "syn16787123",
    filter: "diseaseFocus",
    color: 5,
  },
  {
    name: "analysis",
    id: "",
    filter: "",
    color: 0,
  },
  {
    name: "publications",
    id: "syn16857542",
    filter: "diseaseFocus",
    color: 7,
  },
]

class Explore extends Component {
  state = {
    activeButton: "",
    activeFilter: "",
    color: 0,
  };

  componentDidMount() {
    // studies
    setSynapseValue(objectsArray, "syn16787123", "filter", "projectStatus")
    // publications
    setSynapseValue(objectsArray, "syn16857542", "filter", "id")

    this.handleButtonPress("syn16859580")
  }

  handleChanges = (KEY, NEWSTATE) => {
    this.setState({
      [KEY]: NEWSTATE,
    })
  };

  handleButtonPress = (id) => {
    const activeFilter = returnSynapseValue(objectsArray, id, "filter")
    const color = returnSynapseValue(objectsArray, id, "color")
    this.setState({
      activeButton: id,
      activeFilter,
      color,
    })
    return ""
  };

  returnButtonClass = (id) => {
    return `btn-control ${this.state.activeButton === id ? "active" : ""}`
  };

  fundersButton = () => {
    return (
      <button
        className={this.returnButtonClass("syn16858699")}
        type="button"
        onClick={() => this.handleButtonPress("syn16858699", this.props.token)
        }
      >
        <h5>FUNDERS</h5>
      </button>
    )
  }

  render() {
    return (
      <section className="page explore">
        <div className="container">
          <div className="row">
            <h2>Explore</h2>
          </div>
          <div className="row explore-content">
            <div className="center-block selectors-container">
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
                  <h5>DATA</h5>
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
            <SynapseChart
              token={this.props.token}
              synId={this.state.activeButton}
              filter={this.state.activeFilter}
              rgbIndex={this.state.color}
              showMenu
              facets
              barChart
              table
              columns={9}
            />
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
