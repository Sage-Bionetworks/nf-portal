import express from "express"
import fs from "fs"
import queryTable from "./queryForData" 

const app = express()

const writeAllDataFile = () => {  
  let tables = ["syn16859580", "syn16858699", "syn16858331", "syn16857542", "syn16787123", "syn16859448"]
  let query = (table) => { return `SELECT * FROM ${table}` }
  
    tables.map((table) => {
      queryTable(table, query(table)).then( data => {
        fs.writeFile(`./dist/public/${table}.json`, data, err => {
          if (err) throw err
          console.log("The file has been saved!")
          //process.exit()
        })
      })
    })
}

app.all("/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  next()
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  next()
})

//writeAllDataFile()

app.use(express.static( __dirname + "/public"))

app.listen(3030, () => console.log("Example app listening on port 3030!"))

