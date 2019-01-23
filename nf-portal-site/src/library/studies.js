import { SynapseConstants } from "synapse-react-client"

const sql = "SELECT * FROM syn16787123"

const facetAliases = {
  projectStatus: "Project Status",
  dataStatus: "Data Status",
  fundingAgency: "Funding Agency",
  tumorType: "Tumor Type",
  diseaseFocus: "Disease Focus",
}

const type = "study"
// studies
const study = {
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
    facetAliases: {
      diseaseFocus: "Disease Focus",
    },
  },
  menuConfig: [
    {
      sql,
      facetName: "projectStatus",
      unitDescription: "files",
      facetAliases,
    },
    {
      sql,
      facetName: "dataStatus",
      unitDescription: "files",
      synapseId: "syn16787123",
      facetAliases,
    },
    {
      sql,
      facetName: "fundingAgency",
      unitDescription: "files",
      synapseId: "syn16787123",
      facetAliases,
    },
    {
      sql,
      facetName: "tumorType",
      unitDescription: "files",
      synapseId: "syn16787123",
      facetAliases,
    },
    {
      sql,
      facetName: "diseaseFocus",
      synapseId: "syn16787123",
      facetAliases,
    },
  ],
}

export default study
