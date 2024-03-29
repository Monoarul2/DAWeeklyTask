//Monoarul Islam 
//Matrikel nr:1331547
//Date:09-11-2023


const { Info } = require('../models/student.model')

// method for creating student info using mongoose model
const createStudentInfo = async (req, res, next) => {
	const newStudent = new Info(req.body)
	
	try {
		const insertedStudent = await newStudent.save()
		res.status(201).json(insertedStudent)
		console.log(insertedStudent);
	} catch (err) {
		const errorStatus = err.statusCode || 500;
		const errorMessage = err.message || 'Something went wrong'
		res.status(errorStatus).json({
			success: false,
			status: errorStatus,
			message: errorMessage,
		})
	}
}

// method for getting student info using mongoose model
const getAllStudentsInfo = async (req, res) => {
	const students = await Info.find()
	res.json(students)
}

// method for deleting student info using mongoose model
const deleteStudentInfo = async (req, res) => {
	const { id } = req.params

	try {
		const deletedStudent = await Info.findByIdAndDelete(id)
		res.status(200).json(deletedStudent)
	} catch (err) {
		res.status(404).json({
			message: `No student found with id: ${id}`
		})
	}
}

module.exports = {
	createStudentInfo,
	getAllStudentsInfo,
	deleteStudentInfo
}


