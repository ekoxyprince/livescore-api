const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const app = express()
const pageRoute = require("./routes/pageroute")
const dotenv = require("dotenv").config({path:"./.env"})

app.engine("ejs",ejs.renderFile)
app.set("view engine","ejs")
app.set("views","views")
app.use(express.static("static"))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use("/",pageRoute)


module.exports = app