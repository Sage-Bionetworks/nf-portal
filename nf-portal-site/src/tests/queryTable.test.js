import { queryTable } from "../queries/queryForData"
import * as SynapseClient from "../synapse/SynapseClient"

const fetch = require("node-fetch")

const login = async () => SynapseClient.login("mikeybkats", "guinness")
const expectedOutput = {}

//fetch.mockResponse({hello: "hello"})

describe("get a synapse table", () => {
  describe("when given a query string, tableId, and token", () => {
    it("returns a table object", () => {
      login().then((token) => {
        const sessionToken = token.sessionToken
        const query = "SELECT * FROM syn16787123 where projectName = 'Synodos NF2'"
        const table = "syn16787123"
        // query table usage queryTable(tableId, queryString, token)
        queryTable(table, query, sessionToken).then((response) => {
          const finState = response
          console.log(response)
          expect(finState).toEqual(expectedOutput)
        })
      })
    })
  })
})
