import { SynapseConstants } from "synapse-react-client"
// files
const sql = "SELECT id, dataType, assay, diagnosis, tumorType, fileFormat, species, individualID, dataSubtype, nf1Genotype, nf2Genotype, fundingAgency, consortium, name  FROM syn16858331 where resourceType = 'experimentalData'"

const syn16858331 = {
  name: "files",
  rgbIndex: 8,
  limit: 0,
  hash: "/Explore/Files",
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
    facetName: "assay",
    unitDescription: "files",
  },
  menuConfig: [
    {
      sql,
      facetName: "assay",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql,
      facetName: "dataType",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql,
      facetName: "diagnosis",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql,
      facetName: "tumorType",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql,
      facetName: "fileFormat",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql,
      facetName: "fundingAgency",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql,
      facetName: "nf1Genotype",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql,
      facetName: "nf2Genotype",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql,
      facetName: "species",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql,
      facetName: "isCellLine",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql,
      facetName: "isMultiSpecimen",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
  ],
}

export default syn16858331
