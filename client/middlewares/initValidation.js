const { body, validationResult } = require('express-validator')

const initValidation = (handler, validations) => {
	return async (req, res) => {
		try {
			await Promise.all(validations.map((validation) => validation.run(req)))
			const errors = validationResult(req)
			if (errors.isEmpty()) {


				return handler(req, res)
			} else {
				const err = []
				errors.array().map(error => err.push(error.msg))
				res.status(400).json({ success: false, error: err })
			}
		} catch (error) {
			res.status(500).json({ success: false, message: 'An Internal Error Occured!', error })
		}
	}
}

export default initValidation