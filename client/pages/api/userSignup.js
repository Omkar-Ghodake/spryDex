import initValidation from "../../middlewares/initValidation"
const { body } = require('express-validator')

const validations = [
	body('username', 'Username Should be at 3-25 characters long!').isLength({ min: 3, max: 25 }),
	body('email', 'Invalid Email ID!').isEmail(),
	body('password', 'Password should be at least 8 characters long!').isLength({ min: 8 })
	// all other validation 
]

const handler = async (req, res) => {
	try {
		if (req.method !== 'POST') {
			return res.status(400).json({ success: false, error: 'Only Post Requests are Allowed!' })
		}

		res.json({ success: true, body: req.body })
	} catch (error) {
		res.status(500).json({
			success: false, message: 'Internal Server Error Occured'
		})
	}
}

export default initValidation(handler, validations)