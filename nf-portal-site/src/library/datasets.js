import { SynapseConstants } from "synapse-react-client"

const sql = `SELECT * FROM syn16859580
`
const type = "dataset"

const facetAliases = {
  diseaseFocus: "Disease Focus",
  tumorType: "Tumor Type",
  fundingAgency: "Funding Agency",
}

// datasets
const syn16859580 = {
  name: "datasets",
  rgbIndex: 5,
  sql,
  type,
  hash: "/Explore/Datasets",
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
    unitDescription: "datasets",
    facetAliases: {
      diseaseFocus: "Disease Focus",
    },
  },
  menuConfig: [
    {
      sql,
      facetName: "diseaseFocus",
      unitDescription: "datasets",
      synapseId: "syn16859580",
      facetAliases,
    },
    {
      sql,
      facetName: "tumorType",
      unitDescription: "datasets",
      synapseId: "syn16859580",
      facetAliases,
    },
    {
      sql,
      facetName: "fundingAgency",
      unitDescription: "datasets",
      synapseId: "syn16859580",
      facetAliases,
    },
  ],
}

export default syn16859580
