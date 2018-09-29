import React, { Component } from "react"
import PropTypes from "prop-types"

import { SynapseComponents, SynapseConstants } from "synapse-react-client"
import { queryTable } from "../queries/queryForData"

class ExploreContent extends Component {
  state = {
    syn16859580: "",
    syn16858699: "",
    syn16858331: "",
    syn16857542: "",
    syn16787123: "",
    loading: true,
    activeButton: "",
  };

  componentDidMount() {
    this.tableQuery("syn16857542", this.props.token).then(() => {
      this.setState({
        loading: false,
        activeButton: "syn16857542",
      })
    })
  }

  handleChanges = (KEY, NEWSTATE) => {
    this.setState({
      [KEY]: NEWSTATE,
    })
  };

  tableQuery = async (id, token) => {
    queryTable(id, `SELECT * FROM ${id}`, token).then((response) => {
      this.handleChanges(id, response)
    })
  };

  handleButtonPress = (id, token) => {
    this.handleChanges("activeButton", id)
    return this.state[id] === "" ? () => this.tableQuery(id, token) : () => {}
  };

  returnButtonClass = (id) => {
    return `btn-control ${this.state.activeButton === id ? "active" : ""}`
  };

  SynapseTable = (props) => {
    return (
      <SynapseComponents.QueryWrapper
        initQueryRequest={{
          concreteType:
            "org.sagebionetworks.repo.model.table.QueryBundleRequest",
          partMask:
            SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
            | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
            | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
          query: {
            isConsistent: false,
            sql: "SELECT * FROM syn15661198",
            limit: 25,
            offset: 0,
            selectedFacets: [],
            sort: [],
          },
        }}
        synapseId="syn15661198"
        token={props.token}
        alias="Disease"
        filter="parentId"
      >
        <SynapseComponents.Facets />
        <SynapseComponents.StackedRowHomebrew />
        <SynapseComponents.SynapseTable />
      </SynapseComponents.QueryWrapper>
    )
  };

  render() {
    return (
      <section className="row explore-content center-xs middle-xs">
        <div className="col-xs-12">
          <div className="row">
            <h2>Explore Content</h2>
          </div>
          <div className="row center-xs">
            <div className="col-sm-9">
              <div className="row selectors center-xs around-xs">
                <div className="col-sm-2">
                  <button
                    className={this.returnButtonClass("syn16857542")}
                    type="button"
                    onClick={() => this.handleButtonPress("syn16857542", this.props.token)
                    }
                  >
                    <h5>PUBLICATIONS</h5>
                  </button>
                </div>
                <div className="col-sm-2">
                  <button
                    className={this.returnButtonClass("syn16859580")}
                    type="button"
                    onClick={() => this.handleButtonPress("syn16859580", this.props.token)
                    }
                  >
                    <h5>DATASETS</h5>
                  </button>
                </div>
                <div className="col-sm-2">
                  <button
                    className={this.returnButtonClass("syn16858331")}
                    type="button"
                    onClick={() => this.handleButtonPress("syn16858331", this.props.token)
                    }
                  >
                    <h5>DATA</h5>
                  </button>
                </div>
                <div className="col-sm-2">
                  <button
                    className={this.returnButtonClass("syn16787123")}
                    type="button"
                    onClick={() => this.handleButtonPress("syn16787123", this.props.token)
                    }
                  >
                    <h5>STUDIES</h5>
                  </button>
                </div>
                <div className="col-sm-2">
                  <button
                    className={this.returnButtonClass("syn16858699")}
                    type="button"
                    onClick={() => this.handleButtonPress("syn16858699", this.props.token)
                    }
                  >
                    <h5>FUNDERS</h5>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 synapse-table">{this.state.json}</div>
      </section>
    )
  }
}

//<this.SynapseTable props={this.props} />

ExploreContent.propTypes = {
  token: PropTypes.string.isRequired,
}

export default ExploreContent
