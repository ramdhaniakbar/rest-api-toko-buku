const express = require("express")
const router = express.Router()
const { auth } = require("../../middlewares/auth")
const { getTransactionList } = require("./controller")

router.get("/transactions", auth, getTransactionList)

module.exports = router
