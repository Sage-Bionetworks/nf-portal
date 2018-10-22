import React, { Component } from "react"
import PropTypes from "prop-types"
import { SynapseComponents, SynapseConstants } from "synapse-react-client"
import { BarLoader } from "react-spinners"

class SynapseBarChart extends Component {
  state = {
  }

  buildQuery = () => {
    const sql = `SELECT * FROM ${this.props.synId}`
    return {
      concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
      partMask:
            SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
            | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
            | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
      query: {
        isConsistent: false,
        sql,
        limit: 25,
        offset: 0,
      },
    }
  }

  returnFacets = (bool = this.props.facets) => {
    return (
      bool ? <SynapseComponents.Facets /> : <div />
    )
  }

  returnBarChart = (bool = this.props.barChart) => {
    return (
      bool ? (
        <SynapseComponents.StackedRowHomebrew
          loadingScreen={<div className="bar-loader"><BarLoader color="#4DB7AD" loading /></div>}
        />
      ) : <div />
    )
  }

  returnTable = (bool = this.props.table) => {
    return (
      bool ? (
        <SynapseComponents.SynapseTable
          synapseId={this.props.synId}
          visibleColumnCount={this.props.columns}
        />
      ) : <div />
    )
  }

  render() {
    return (
      <SynapseComponents.QueryWrapper
        initQueryRequest={this.buildQuery()}
        token={this.props.token}
        filter={this.props.filter}
        rgbIndex={this.props.rgbIndex !== undefined ? this.props.rgbIndex : ""}
        showMenu={this.props.facets}
      >
        {this.returnBarChart()}
        {this.returnFacets()}
        {this.returnTable()}
      </SynapseComponents.QueryWrapper>
    )
  }
}

SynapseBarChart.propTypes = {
  token: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  rgbIndex: PropTypes.array.isRequired,
  synId: PropTypes.string.isRequired,
  barChart: PropTypes.bool,
  facets: PropTypes.bool,
  table: PropTypes.bool,
  columns: PropTypes.number,
}

SynapseBarChart.defaultProps = {
  barChart: false,
  facets: false,
  table: false,
  columns: 1,
}

export default SynapseBarChart
