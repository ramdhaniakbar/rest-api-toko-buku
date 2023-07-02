"use strict"
const bcrypt = require("bcryptjs")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const password = bcrypt.hashSync("bismillah", 10)
		// Add seed commands here.
		await queryInterface.bulkInsert(
			"Users",
			[
				{
					name: "John Doe",
					email: "admin@gmail.com",
					password: password,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Gonalu Kaler",
					email: "gonalu@gmail.com",
					password: password,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		// Add commands to revert seed here.
		await queryInterface.bulkDelete("Users", null, {})
	},
}
