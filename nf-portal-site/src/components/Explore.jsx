import React, { Component } from "react"
import PropTypes from "prop-types"
import SynapseChart from "./SynapseBarChart.jsx"
import { returnSynapseValue, setSynapseValue } from "../library/synapseObjects"

const objectsArray = [
  {
    name: "funder",
    id: "syn16858699",
    filter: "",
    color: 0,
    limit: 3,
    columns: 0,
    table: false,
    type: "FUNDER",
  },
  {
    name: "datasets",
    id: "syn16859580",
    filter: "diseaseFocus",
    color: 1,
    limit: 40,
    columns: 0,
    table: false,
    type: "DATASET",
  },
  {
    name: "data",
    id: "syn16858331",
    filter: "assay",
    color: 8,
    limit: 0,
    columns: 9,
    table: true,
    type: "",
  },
  {
    name: "studies",
    id: "syn16787123",
    filter: "diseaseFocus",
    color: 5,
    limit: 40,
    columns: 0,
    table: false,
    type: "STUDY",
  },
  {
    name: "analysis",
    id: "",
    filter: "",
    color: 0,
    limit: 0,
    columns: 9,
    table: true,
    type: "",
  },
  {
    name: "publications",
    id: "syn16857542",
    filter: "diseaseFocus",
    color: 7,
    limit: 40,
    columns: 0,
    table: false,
    type: "PUBLICATION",
  },
]

class Explore extends Component {
  state = {
    activeButton: "",
    activeFilter: "",
    color: 0,
    limit: 0,
    columns: 0,
    table: false,
    type: "",
  };

  componentDidMount() {
    // studies
    setSynapseValue(objectsArray, "syn16787123", "filter", "projectStatus")
    // publications
    setSynapseValue(objectsArray, "syn16857542", "filter", "id")

    if (window.location.hash !== "#/Explore") {
      this.setActiveValues(window.location.hash)
    } else this.handleButtonPress("syn16859580")
  }

  setActiveValues = (hash) => {
    let id
    console.log(hash)
    switch (hash) {
    case "#/Explore/Studies":
      id = "syn16787123"
      break
    case "#/Explore/Publications":
      id = "syn16857542"
      break
    case "#/Explore/Datasets":
      id = "syn16858699"
      break
    default:
      id = ""
    }
    console.log(id)

    this.handleButtonPress(id)
  }

  handleChanges = (KEY, NEWSTATE) => {
    this.setState({
      [KEY]: NEWSTATE,
    })
  };

  handleButtonPress = (id) => {
    const activeFilter = returnSynapseValue(objectsArray, id, "filter")
    const color = returnSynapseValue(objectsArray, id, "color")
    const limit = returnSynapseValue(objectsArray, id, "limit")
    const table = returnSynapseValue(objectsArray, id, "table")
    const columns = returnSynapseValue(objectsArray, id, "columns")
    const type = returnSynapseValue(objectsArray, id, "type")

    this.setState({
      activeButton: id,
      activeFilter,
      color,
      limit,
      table,
      columns,
      type,
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

  render() {
    return (
      <section className="page explore">
        <div className="container">
          <div className="row">
            <h2>Explore</h2>
          </div>
          <div className="row explore-content">
            <div className={`center-block selectors-container ${this.hideBarSection()}`}>
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
              table={this.state.table}
              columns={this.state.columns}
              json={this.props[this.state.activeButton]}
              limit={this.state.limit}
              type={this.state.type}
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
