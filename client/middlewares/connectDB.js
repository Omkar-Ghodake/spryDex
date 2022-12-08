const mongoose = require('mongoose')

const connectToMongo = async () => {

	const db = mongoose.connection

	if (mongoose.connection.readyState === 0) {
		mongoose.connect(process.env.MONGO_URI)

		db.once('connecting', () => {
			console.log('Connecting to Mongo...')
		})

		db.once('connected', () => {
			console.log('Connected to Mongo Successfully!')
		})
	}

	db.on('error', err => {
		console.error(err)
	})

}

export default connectToMongo