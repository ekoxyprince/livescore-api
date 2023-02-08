const express = require("express")
const router = express.Router()
const pagesController = require("../controller/routecontroller")

router
.route("/")
.get(pagesController.getHome)



module.exports = router