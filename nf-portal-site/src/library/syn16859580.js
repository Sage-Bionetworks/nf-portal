import { SynapseConstants } from "synapse-react-client"

const sql = "SELECT * FROM syn16859580"
// datasets
const syn16859580 = {
  name: "datasets",
  rgbIndex: 5,
  type: "dataset",
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
    unitDescription: "files",
  },
  menuConfig: [
    {
      sql,
      facetName: "diseaseFocus",
      unitDescription: "files",
      synapseId: "syn16859580",
    },
    {
      sql,
      facetName: "tumorType",
      unitDescription: "files",
      synapseId: "syn16859580",
    },
    {
      sql,
      facetName: "fundingAgency",
      unitDescription: "files",
      synapseId: "syn16859580",
    },
  ],
}

export default syn16859580
