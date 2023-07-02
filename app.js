require("dotenv").config()
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")

const authRouter = require("./app/api/auth/routes")
const categoriesRouter = require("./app/api/categories/routes")
const booksRouter = require("./app/api/books/routes")
const uploadsRouter = require("./app/api/uploads/routes")
const checkoutsRouter = require("./app/api/checkouts/routes")
const transactionsRouter = require("./app/api/transactions/routes")
const URL = `/api/v1`

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
	res.json({ message: "Welcome to api toko buku pak erwin" })
})
app.use(`${URL}`, authRouter)
app.use(`${URL}`, categoriesRouter)
app.use(`${URL}`, booksRouter)
app.use(`${URL}`, uploadsRouter)
app.use(`${URL}`, checkoutsRouter)
app.use(`${URL}`, transactionsRouter)

module.exports = app
