//'rgb(91,176,181)', // 0 turquoise
//'rgb(64,123,160)', // 1 blueberry
//'rgb(201,66,129)', // 2 rose
//'rgb(71,51,125)',  // 3 royal
//'rgb(222,154,31)', // 4 butterscotch
//'rgb(16,148,136)', // 5 powder
//'rgb(60,74,99)',   // 6 slate
//'rgb(212,109,30)', // 7 apricot
//'rgb(88,161,88)',  // 8 fern
//'rgb(81,113,192)', // 9 lavender
//'rgb(178,36,42)'   // 10 apple
//Color.rgb(218, 152, 61)

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
