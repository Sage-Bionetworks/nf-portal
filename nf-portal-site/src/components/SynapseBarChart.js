import React from "react"
import { SynapseComponents, SynapseConstants } from "synapse-react-client"

const SynapseBarChart = (props) => {
  const sql = `SELECT * FROM ${props.synId}`
  const query = {
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

  return (
    <SynapseComponents.QueryWrapper
      initQueryRequest={query}
      token={props.token}
      filter={props.filter}
      RGB={props.RGB !== undefined ? props.RGB : ""}
      showMenu={props.showMenu}
    >
      <SynapseComponents.StackedRowHomebrew />
    </SynapseComponents.QueryWrapper>
  )
}

export default SynapseBarChart
