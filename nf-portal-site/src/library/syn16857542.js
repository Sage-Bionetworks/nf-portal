import { SynapseConstants } from "synapse-react-client"

const sql = "SELECT * FROM syn16857542"
const type = "publication"

// publications
const syn16857542 = {
  name: "publications",
  id: "syn16857542",
  rgbIndex: 0,
  sql,
  type,
  hash: "/Explore/Publications",
  homePageParams: {
    initQueryRequest: {
      concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
      partMask:
          SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
          | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
          | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
      query: {
        isConsistent: false,
        limit: 25,
        offset: 0,
        sql,
      },
    },
    facetName: "diseaseFocus",
    unitDescription: "files",
  },
  menuConfig: [
    {
      sql,
      facetName: "id",
      unitDescription: "files",
    },
    {
      sql,
      facetName: "fundingAgency",
      unitDescription: "files",
      synapseId: "syn16857542",
    },
    {
      sql,
      facetName: "tumorType",
      unitDescription: "files",
      synapseId: "syn16857542",
    },
    {
      sql,
      facetName: "diseaseFocus",
      synapseId: "syn16857542",
    },
  ],
}

export default syn16857542
