const multer = require("multer")

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads/")
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + "-" + file.originalname)
	},
})

const fileFilter = (req, file, cb) => {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
		cb(null, true)
	} else {
		// reject file
		cb({ message: "Unsupport file format" }, false)
	}
}

const uploadMiddleware = multer({
	storage: storage,
	limits: {
		fileSize: 3000000,
	},
	fileFilter: fileFilter,
})

module.exports = uploadMiddleware
