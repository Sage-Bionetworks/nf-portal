import { SynapseConstants } from "synapse-react-client"

const sql = "SELECT * FROM syn16787123"
const type = "study"
// studies
const syn16787123 = {
  name: "studies",
  id: "syn16787123",
  rgbIndex: 1,
  sql,
  type,
  hash: "/Explore/Studies",
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
      facetName: "projectStatus",
      unitDescription: "files",
    },
    {
      sql,
      facetName: "dataStatus",
      unitDescription: "files",
      synapseId: "syn16787123",
    },
    {
      sql,
      facetName: "fundingAgency",
      unitDescription: "files",
      synapseId: "syn16787123",
    },
    {
      sql,
      facetName: "tumorType",
      unitDescription: "files",
      synapseId: "syn16787123",
    },
    {
      sql,
      facetName: "diseaseFocus",
      synapseId: "syn16787123",
    },
  ],
}

export default syn16787123
