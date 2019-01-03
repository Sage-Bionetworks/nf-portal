import React, { Component } from "react"
import PropTypes from "prop-types"
import { SynapseComponents, SynapseConstants } from "synapse-react-client"
import { BarLoader } from "react-spinners"

class SynapseBarChart extends Component {
  state = {
  }

  // TODO: Update build query to use the SQL from the synapseObjects Active Object
  // TODO: Remove sql statements below and pass in sql from the synapse activeObject
  buildQuery = () => {
    let sql = `SELECT * FROM ${this.props.synId}`

    if (this.props.synId === "syn16858331") {
      sql = `SELECT id, dataType, assay, diagnosis, tumorType, fileFormat, species, individualID, dataSubtype, nf1Genotype, nf2Genotype, fundingAgency, consortium, name  FROM ${this.props.synId} where resourceType = 'experimentalData'`
    }

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

  // TODO: Delete returnFacets
  //
  returnFacets = (bool = this.props.facets) => {
    return (
      bool ? <SynapseComponents.Facets /> : <div />
    )
  }

  // TODO: Delete returnBarChart
  //
  returnBarChart = (bool = this.props.barChart) => {
    return (
      bool ? (
        <SynapseComponents.StackedRowHomebrew
          loadingScreen={<div className="bar-loader"><BarLoader color="#4DB7AD" loading /></div>}
        />
      ) : <div />
    )
  }

  // TODO: Delete returnTable
  //
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

  // TODO: Delete returnCardView
  //
  returnCardView = (limit = this.props.limit, json = "", type = this.props.type, hideLink = false) => {
    return (
      limit >= 1 ? (
        <div className={window.location.hash !== "#/Explore" ? "" : "synapse-card-view"}>
          <SynapseComponents.StaticQueryWrapper
            json={json}
          >
            <SynapseComponents.SynapseTableCardView
              type={SynapseConstants[type]}
              limit={limit}
              hideOrganizationLink={hideLink}
            />
          </SynapseComponents.StaticQueryWrapper>
        </div>
      ) : <div />
    )
  }

  returnQueryWrapperMenu = () => {
    // TODO: return a queryWrapperMenu given the active synapseObject
    // // Add functionality to select correct case:
    // // // Case 1: chart with side menu, bar chart, facets and table
    // // // Case 2: chart with side menu, bar chart , facets and cards
  }

  hideBarSection = () => {
    const hash = window.location.hash
    if (hash === "#/Explore" || hash === "#/") {
      return "bar-section"
    }
    return "bar-section hide"
  }

  render() {
    return (
      <div>
        <div className={`${this.hideBarSection()}`}>
          {/* TODO: delete QueryWrapper and all its contents */}
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
        </div>
        {/* TODO: remove returnCardView */}
        {this.returnCardView(undefined, this.props.json, undefined, this.props.hideOrganizationLink)}
        {/* TODO: add returnQueryWrapperMenu */}
      </div>
    )
  }
}

SynapseBarChart.propTypes = {
  token: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  rgbIndex: PropTypes.number.isRequired,
  synId: PropTypes.string.isRequired,
  barChart: PropTypes.bool,
  facets: PropTypes.bool,
  table: PropTypes.bool,
  columns: PropTypes.number,
  limit: PropTypes.number,
  json: PropTypes.object,
  type: PropTypes.string,
  hideOrganizationLink: PropTypes.bool,
}

SynapseBarChart.defaultProps = {
  barChart: false,
  facets: false,
  table: false,
  columns: 1,
  limit: 0,
  json: {},
  type: "STUDY",
  hideOrganizationLink: false,
}

export default SynapseBarChart
