import initValidation from "../../middlewares/initValidation"
const { body } = require('express-validator')
import User from "../../models/User";
const CryptoJS = require("crypto-js");

const validations = [
	body('username', 'Username Should be at 3-25 characters long!').isLength({ min: 3, max: 25 }),
	body('email', 'Invalid Email ID!').isEmail(),
	body('password', 'Password should be at least 8 characters long!').isLength({ min: 8 })
]

const handler = async (req, res) => {
	try {
		if (req.method !== 'POST') {
			return res.status(400).json({ success: false, message: 'Only Post Requests are Allowed!' })
		}

		const { username, email, password } = req.body

		const existingUsername = await User.findOne({ username })

		if (existingUsername) {
			return res.status(409).json({ success: false, message: 'Username already taken!', loc: 'username' })
		}

		const existingEmail = await User.findOne({ email })

		if (existingEmail) {
			return res.status(409).json({ success: false, message: 'User with this email already exists!', loc: 'email' })
		}

		const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.CRYPTOJS_ENCRYPTION_SECRET).toString()

		let newUser = new User({ username, email, password: encryptedPassword })
		await newUser.save()

		res.json({ success: true, message: 'Account created successfully!' })
	} catch (error) {
		console.log('Following Error Occured in Signup\n', error)
		res.status(500).json({
			success: false, error, message: 'Internal Server Error Occured', loc: 'api'
		})
	}
}

export default initValidation(handler, validations)