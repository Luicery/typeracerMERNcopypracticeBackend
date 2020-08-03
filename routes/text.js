const express = require("express")
const router = express.Router()
const axios = require("axios")
router.get("/", function(req, res, next) {
  axios.get("https://loripsum.net/api/1/short/plaintext").then(resA => res.json(resA.data))
})

module.exports = router
