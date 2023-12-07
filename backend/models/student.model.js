const mongoose = require('mongoose')

// mongoose model for Info
const StudentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	}
})

const Info = mongoose.model('Info', StudentSchema)

module.exports = { Info }