const mongoose = require('mongoose')

const connectToMongo = () => {
	try {
		if (!mongoose.connections[0].readyState) {
			mongoose.connect(process.env.MONGO_URI)
			console.log('Connected To Mongo!')
		}
	} catch (error) {
		console.log(error)
	}
}
export default connectToMongo