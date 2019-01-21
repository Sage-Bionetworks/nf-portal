import { SynapseConstants } from "synapse-react-client"
// files

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
        sql: `
          SELECT id, assay, dataType, diagnosis, tumorType, species, individualID, fileFormat, dataSubtype, nf1Genotype, nf2Genotype, fundingAgency, consortium, name FROM syn16858331 where resourceType = 'experimentalData'
        `,
      },
    },
    facetName: "assay",
    unitDescription: "files",
  },
  menuConfig: [
    {
      sql: `
        SELECT id, assay, dataType, diagnosis, tumorType, species, individualID, fileFormat, dataSubtype, nf1Genotype, nf2Genotype, fundingAgency, consortium, name FROM syn16858331 where resourceType = 'experimentalData'
      `,
      facetName: "assay",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql: `
        SELECT id, dataType, assay, diagnosis, tumorType, species, individualID, fileFormat, dataSubtype, nf1Genotype, nf2Genotype, fundingAgency, consortium, name FROM syn16858331 where resourceType = 'experimentalData'
      `,
      facetName: "dataType",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql: `
        SELECT id, tumorType, diagnosis, species, individualID, nf1Genotype, nf2Genotype, dataType, assay, fileFormat, dataSubtype, fundingAgency, consortium, name FROM syn16858331 where resourceType = 'experimentalData'
      `,
      facetName: "tumorType",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql: `
        SELECT id, fileFormat, dataType, assay, diagnosis, tumorType, species, individualID, dataSubtype, nf1Genotype, nf2Genotype, fundingAgency, consortium, name FROM syn16858331 where resourceType = 'experimentalData'
      `,
      facetName: "fileFormat",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql: `
        SELECT id, fundingAgency, consortium, dataType, assay, diagnosis, tumorType, species, fileFormat, individualID, dataSubtype, nf1Genotype, nf2Genotype, name FROM syn16858331 where resourceType = 'experimentalData'
      `,
      facetName: "fundingAgency",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql: `
        SELECT id, nf1Genotype, diagnosis, tumorType, species, individualID, dataType, assay, fileFormat, dataSubtype, fundingAgency, consortium, name, nf2Genotype FROM syn16858331 where resourceType = 'experimentalData'
      `,
      facetName: "nf1Genotype",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql: `
        SELECT id, nf2Genotype, diagnosis, tumorType, species, individualID, dataType, assay, fileFormat, dataSubtype, fundingAgency, consortium, name,  nf1Genotype FROM syn16858331 where resourceType = 'experimentalData'
      `,
      facetName: "nf2Genotype",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql: `
        SELECT id, species, diagnosis, tumorType, individualID, nf1Genotype, nf2Genotype, dataType, assay, fileFormat, dataSubtype, fundingAgency, consortium, name FROM syn16858331 where resourceType = 'experimentalData'
      `,
      facetName: "species",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql: `
        SELECT id, isCellLine, species, diagnosis, tumorType, individualID, nf1Genotype, nf2Genotype, dataType, assay, fileFormat, dataSubtype, fundingAgency, consortium, name FROM syn16858331 where resourceType = 'experimentalData'
      `,
      facetName: "isCellLine",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
    {
      sql: `
        SELECT id,isMultiSpecimen, species, diagnosis, tumorType, individualID, nf1Genotype, nf2Genotype, dataType, assay, fileFormat, dataSubtype, fundingAgency, consortium, name FROM syn16858331 where resourceType = 'experimentalData'
      `,
      facetName: "isMultiSpecimen",
      title: "files",
      visibleColumnCount: 7,
      unitDescription: "files",
      synapseId: "syn16858331",
    },
  ],
}

export default syn16858331
