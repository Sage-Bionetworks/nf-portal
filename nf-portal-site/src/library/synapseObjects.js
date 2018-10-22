
export const synapseObjects = [
  {
    name: "funder",
    id: "syn16858699",
    filter: "",
    color: 0,
  },
  {
    name: "datasets",
    id: "syn16859580",
    filter: "diseaseFocus",
    color: 1,
  },
  {
    name: "data",
    id: "syn16858331",
    filter: "assay",
    color: 8,
  },
  {
    name: "studies",
    id: "syn16787123",
    filter: "diseaseFocus",
    color: 5,
  },
  {
    name: "analysis",
    id: "",
    filter: "",
    color: 0,
  },
  {
    name: "publications",
    id: "syn16857542",
    filter: "diseaseFocus",
    color: 7,
  },
]

export const returnSynapseValue = (objectArray = synapseObjects, id, nameOfValue) => {
  console.log(objectArray)
  const matchedObject = objectArray.filter(object => object.id === id)
  return matchedObject[0][nameOfValue]
}

export const setSynapseValue = (objectArray = synapseObjects, id, key, newValue) => {
  objectArray.forEach((object) => {
    if (object.id === id) {
      object[key] = newValue
    }
  })
}
