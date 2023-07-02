const express = require("express")
const router = express.Router()
const { auth } = require("../../middlewares/auth")
const { uploadImage } = require("./controller")
const uploadMiddleware = require("../../middlewares/multer")

router.post("/uploads", auth, uploadMiddleware.single("image"), uploadImage)

module.exports = router
