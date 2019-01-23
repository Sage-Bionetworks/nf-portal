import { SynapseConstants } from "synapse-react-client"

const sql = "SELECT * FROM syn16857542"
const type = "publication"

const facetAliases = {
  projectStatus: "Project Status",
  dataStatus: "Data Status",
  fundingAgency: "Funding Agency",
  tumorType: "Tumor Type",
  diseaseFocus: "Disease Focus",
}

// publications
const publications = {
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
    facetAliases: {
      diseaseFocus: "Disease Focus",
    },
  },
  menuConfig: [
    // {
    //   sql,
    //   facetName: "id",
    //   unitDescription: "files",
    //   facetAliases,
    // },
    {
      sql,
      facetName: "fundingAgency",
      unitDescription: "files",
      synapseId: "syn16857542",
      facetAliases,
    },
    {
      sql,
      facetName: "tumorType",
      unitDescription: "files",
      synapseId: "syn16857542",
      facetAliases,
    },
    {
      sql,
      facetName: "diseaseFocus",
      synapseId: "syn16857542",
      facetAliases,
    },
  ],
}

export default publications
