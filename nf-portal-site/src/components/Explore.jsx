import React, { Component } from "react"
import PropTypes from "prop-types"
import SynapseChart from "./SynapseBarChart"

class Explore extends Component {
  state = {
    loading: true,
    activeButton: "syn16858331",
    activeFilter: "assay",
  };

  handleChanges = (KEY, NEWSTATE) => {
    this.setState({
      [KEY]: NEWSTATE,
    })
  };

  returnFilter = (id) => {
    switch (id) {
    case "syn16859580":
      // datasets
      return "assay"
    case "syn16858699":
      // funder
      return "assay"
    case "syn16858331":
      // files // data
      return "assay"
    case "syn16857542":
      // publications
      return "assay"
    case "syn16787123":
      // studies
      return "assay"
    default:
      return ""
    }
  }

  handleButtonPress = (id) => {
    const activeFilter = this.returnFilter(id)
    this.setState({
      activeButton: id,
      activeFilter,
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
              RGB={[91, 176, 181]}
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
