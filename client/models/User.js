const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	admin: {
		type: Boolean,
		default: false
	}
}, { timestamps: true })

// mongoose.models = {}
// module.exports = mongoose.model('User', UserSchema)

export default mongoose.models.User || mongoose.model('User', UserSchema)