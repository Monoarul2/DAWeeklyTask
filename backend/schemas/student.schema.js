const Joi = require('joi')

// schema define for Info which helps for validation
const schema = Joi.object({
	name: Joi.string()
		.min(3)
		.max(15)
		.required(),

	phone: Joi.string()
		.min(11)
		.max(14)
		.required()
})

module.exports = {
	studentSchema: schema
}

/*name:monoarul islam
matrikel no: 1331547
/*date:07/11/23