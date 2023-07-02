module.exports = {
	uploadImage: async (req, res, next) => {
		try {
			if (!req.file) {
				return res.status(403).json({
					message: "No file upload",
				})
			}

			res.status(201).json({
				message: "Success upload image",
				data: { src: `/uploads/${req.file.filename}` },
			})
		} catch (err) {
			next(err)
		}
	},
}
