const jwt = require('jsonwebtoken')

const fetchUser = (handler) => {
	return async (req, res) => {
		// try {
		// const token = req.header('auth-token')

		// if (!token) return res.status(400).json({ success: false, message: 'Authentication Token not Found!', loc: 'fetchUser' })

		// const payload = jwt.verify(token, process.env.JWT_SECRET)

		// req.user = payload

		const bac = req.
			console.log(bac)

		return handler(req, res)
		// } catch (error) {
		// 	res.status(500).json({
		// 		success: false, error, message: 'An Internal Server Error Occured!', loc: 'api'
		// 	})
		// }
	}
}

export default fetchUser