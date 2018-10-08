import React, { Component } from "react"
import PropTypes from "prop-types"

import { SynapseComponents, SynapseConstants } from "synapse-react-client"
import { asyncComponent } from "react-async-component"
import { staticTableQuery } from "../queries/queryForData"

const AsyncSynapseBarChart = asyncComponent({ resolve: () => import("./SynapseBarChart") })

class ExploreContent extends Component {
  state = {
    loading: true,
    activeButton: "syn16858331",
    activeFilter: "diagnosis",
  };
  //activeButton: "syn16859580",
  //activeFilter: "diseaseFocus",

  componentDidMount() {
  }

  componentDidUpdate() {
    console.log("updated")
  }

  handleChanges = (KEY, NEWSTATE) => {
    this.setState({
      [KEY]: NEWSTATE,
    })
  };

  returnFilter = (id) => {
    switch (id) {
    case "syn16859580":
      // datasets
      return "diseaseFocus"
    case "syn16858699":
      // funder
      return ""
    case "syn16858331":
      // files
      return "projectId"
    case "syn16857542":
      // publications
      return "diseaseFocus"
    case "syn16787123":
      // studies
      return "diseaseFocus"
    default:
      return ""
    }
  }

  handleButtonPress = (id) => {
    const activeFilter = this.returnFilter(id)
    this.setState({
      activeButton: id,
      activeFilter,
    }, () => {

    })
    if (this.state[id] === "") {
      //staticTableQuery(id, this.handleChanges)
    } else return ""
  };

  returnButtonClass = (id) => {
    return `btn-control ${this.state.activeButton === id ? "active" : ""}`
  };

  render() {
    return (
      <section className="row explore-content">
        <div className="container">
          <div className="row">
            <h2>Explore Content</h2>
          </div>
          <div className="row">
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
                  className={this.returnButtonClass("syn16858699")}
                  type="button"
                  onClick={() => this.handleButtonPress("syn16858699", this.props.token)
                  }
                >
                  <h5>FUNDERS</h5>
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
            <AsyncSynapseBarChart token={this.props.token} synId={this.state.activeButton} filter={this.state.activeFilter} />
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
