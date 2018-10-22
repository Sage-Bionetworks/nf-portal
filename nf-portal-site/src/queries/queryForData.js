import { SynapseClient, SynapseConstants } from "synapse-react-client"

const buildRequest = (table, query, offset = 0, limit = 250) => {
  return {
    entityId: table,
    query: {
      sql: query,
      includeEntityEtag: true,
      isConsistent: true,
      offset,
      limit,
    },
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
      | SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
      | SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS
      | SynapseConstants.BUNDLE_MASK_QUERY_FACETS,
  }
}

const json = (response) => {
  return JSON.stringify(response)
}

const processError = (error) => {
  console.log(`Request has failed: ${error}`)
}

const getTable = (table, tokenResponse, query, offset, limit) => {
  const request = buildRequest(table, query, offset, limit)
  return SynapseClient.getQueryTableResults(request, tokenResponse).catch(
    error => console.log(error),
  )
}

const queryTable = (table, query, token) => {
  return getTable(table, token, query)
    .then(json)
    .catch(processError)
}

const host = "https://static.nf.synapse.org/"
//const host = "http://localhost:3030/"

const getStaticJSON = async (id, handleChanges, alternateId = "") => {
  return fetch(`${host}${id}.json`, {
    method: "GET",
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      if (handleChanges !== undefined) {
        handleChanges(alternateId || id, data)
      }
      return data
    })
    .catch(processError)
}

export {
  getStaticJSON, queryTable, processError, getTable, host,
}
