import React, { Component } from "react"
import PropTypes from "prop-types"
import { SynapseComponents, SynapseConstants } from "synapse-react-client"
import { BarLoader } from "react-spinners"

class SynapseBarChart extends Component {
  state = {
    //isLoading: true,
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

  render() {
    return (
      <SynapseComponents.QueryWrapper
        initQueryRequest={this.buildQuery()}
        token={this.props.token}
        filter={this.props.filter}
        RGB={this.props.RGB !== undefined ? this.props.RGB : ""}
        showMenu={this.props.showMenu}
      >
        <SynapseComponents.StackedRowHomebrew
          loadingScreen={<BarLoader color="#4DB7AD" loading />}
        />
      </SynapseComponents.QueryWrapper>
    )
  }
}

SynapseBarChart.propTypes = {
  token: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  RGB: PropTypes.array.isRequired,
  showMenu: PropTypes.bool.isRequired,
  synId: PropTypes.string.isRequired,
}


export default SynapseBarChart
